<template>
  <div class="wrapper">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <div
        class="image"
        :style="`background-image:url('/img/blog/blog${(index + 1) % 10}.jpg')`"
      ></div>
      <div class="post-content">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.subhead }}</h2>
        <div class="post-body">
          {{ post.body }}
        </div>
        <div class="bottom-row">
          <div class="pill-wrapper">
            <TagPill
              v-for="tag in post.tags"
              :key="tag"
              class="post-tags"
              :tag="tag"
            />
          </div>
          <div class="delete-button-wrap">
            <button
              v-if="showDelete()"
              class="button delete-button"
              @click="handleDelete"
            >
              <HeroIcons icon="trash" class="mr-2" />
              <span>Delete Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <SpinnerGraphic v-else />
  </div>
</template>

<script setup>
import { doc, deleteDoc } from "firebase/firestore";
import textFit from "textFit";
import { db } from "@/firebase/config";
import HeroIcons from "~/components/HeroIcons.vue";
import TagPill from "~/components/blog/TagPill.vue";
import getPosts from "~/composables/blog/getPosts";
import getUser from "~/composables/auth/getUser";
import { useStore } from "~/store";

const store = useStore();

const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

const { user } = await getUser();
const route = useRoute();
const router = useRouter();

/**
 * Would use getPost here, but we need the index of the post in the array to get the image.
 */
const { posts, error, fetchPosts } = await getPosts();

await fetchPosts();

/**
 * Finds the post with the given ID.
 * @param {string} id - The ID of the post.
 * @returns {object} The post with the given ID.
 */
const post = ref(posts.value.find((entry) => entry.id === route.params.id));

/**
 * Finds the index of the post with the given ID.
 * @param {string} id - The ID of the post.
 * @returns {number} The index of the post with the given ID.
 */
const index = posts.value
  .reverse()
  .findIndex((entry) => entry.id === route.params.id);

onMounted(() => {
  window.addEventListener("resize", fitBodyText);
  fitBodyText();
});

const fitBodyText = () => {
  textFit(document.getElementsByClassName("post-body"), { multiLine: true });
};

const imageHeight = ref("0px");

const handleImageHeight = () => {
  imageHeight.value =
    window.innerWidth >= 1024
      ? `${window.innerHeight - currentNavHeight.value - 120}px`
      : `${(window.innerHeight - currentNavHeight.value - 120) / 1.5}px`;
};

handleImageHeight();

/**
 * Watches the store's navHeight property and updates the image height accordingly.
 */
watch(
  () => store.navHeight,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== 0) {
      handleImageHeight();
    }
  }
);

const handleDelete = async () => {
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

<style scoped>
h1 {
  @apply font-oliver text-4xl 2xl:text-5xl;
}
h2 {
  @apply font-jost text-2xl text-black/60 2xl:mb-4 2xl:text-3xl;
}
.bottom-row {
  @apply flex flex-col items-end lg:flex-row lg:justify-between;
}
.delete-button {
  @apply my-4 flex h-10 justify-center lg:my-0;
}
.delete-button-wrap {
  @apply flex items-center justify-center sm:block;
}
.image {
  @apply mb-4 lg:col-span-6 lg:mb-0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: v-bind(imageHeight);
}
.pill-wrapper {
  @apply mt-4 lg:mt-0;
}
.post {
  @apply w-full font-jost lg:grid lg:grid-cols-12 lg:items-center lg:gap-10;
  height: v-bind(postHeight);
}
.post-body {
  @apply whitespace-pre-wrap lg:h-full;
}
.post-content {
  @apply flex flex-col justify-start lg:col-span-6 lg:h-full lg:justify-between;
}
.wrapper {
  @apply mx-4 mt-4 flex lg:mx-10 lg:my-10;
  height: v-bind(wrapperHeight);
  scrollbar-width: none;
}
</style>
