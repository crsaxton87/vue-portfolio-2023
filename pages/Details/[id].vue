<template>
  <div class="px-5 sm:w-full sm:px-0">
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p class="mb-4 whitespace-pre-wrap">{{ post.body }}</p>
      <div>
        <TagPill
          v-for="tag in post.tags"
          :key="tag"
          class="post-tags"
          :tag="tag"
        />
      </div>
      <div class="flex items-center justify-center sm:block">
        <button
          v-if="showDelete()"
          class="button mt-4 flex h-10 justify-center"
          @click="handleClick"
        >
          <HeroIcons icon="trash" class="mr-2" />
          <span>Delete Post</span>
        </button>
      </div>
    </div>
    <SpinnerGraphic v-else />
  </div>
</template>

<script setup>
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import HeroIcons from "~/components/HeroIcons.vue";
import TagPill from "~/components/blog/TagPill.vue";
import getPost from "~/composables/blog/getPost";
import getUser from "~/composables/auth/getUser";

const { user } = await getUser();
const route = useRoute();
const router = useRouter();

const { post, error, load } = getPost(route.params.id);

load();

const handleClick = async () => {
  const docRef = await doc(db, "posts", route.params.id);

  try {
    await deleteDoc(docRef);
  } catch (err) {
    error.value = err.message;
  }

  router.push("/");
};

const showDelete = () => {
  if (user.value) {
    return post.value.createdBy === user.value.email;
  }
  return false;
};
</script>
