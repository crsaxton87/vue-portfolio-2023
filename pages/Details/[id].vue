<template>
  <div
    id="wrapper"
    class="mx-4 mt-4 overflow-auto lg:mx-10 lg:mt-10 lg:flex lg:items-start lg:justify-center"
  >
    <div v-if="error">{{ error }}</div>
    <div
      v-if="post"
      id="postWrapper"
      class="post lg:grid lg:grid-cols-12 lg:items-center lg:gap-10"
    >
      <div
        class="image mb-4 lg:col-span-6 lg:mb-0"
        :style="`background-image:url('/img/blog/blog${(index + 1) % 10}.jpg')`"
      ></div>
      <div class="lg:col-span-6">
        <h1>{{ post.title }}</h1>
        <h2>{{ post.subhead }}</h2>
        <div
          id="postBody"
          class="whitespace-pre-wrap"
          :style="{ height: postBodyHeight, width: postBodyWidth }"
        >
          {{ post.body }}
        </div>
        <div class="flex justify-between">
          <div id="pillWrapper" class="mb-4 lg:mb-0">
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
// import fitTextInit from "~/composables/utility/fittext";
import getPosts from "~/composables/blog/getPosts";
import getUser from "~/composables/auth/getUser";
import { navHeight } from "~/composables/layout/navHeight";

const { user } = await getUser();
const route = useRoute();
const router = useRouter();
const currentNavHeight = ref(navHeight());

const { posts, error, load } = await getPosts();

await load();

const post = ref(null);
for (const entry of posts.value) {
  if (entry.id === route.params.id) {
    post.value = entry;
  }
}

const index = posts.value.indexOf(post.value);
// console.log(`file: [id].vue:62 ~ index:`, index);
// console.log("window.innerHeight", window.innerHeight);

// fitTextInit();

let postBodyHeight = "0px";
let postBodyWidth = "0px";

const checkPostDimensions = () => {
  postBodyHeight =
    window.innerWidth >= 1024
      ? document.getElementById("postWrapper").getBoundingClientRect().height -
        document.getElementById("pillWrapper").getBoundingClientRect().height -
        document.getElementsByTagName("h1")[0].getBoundingClientRect().height -
        document.getElementsByTagName("h2")[0].getBoundingClientRect().height -
        40 +
        "px"
      : (window.innerHeight - parseInt(currentNavHeight.value, 10) - 56) * 1.2 +
        "px";
  document.getElementById("postBody").style.height = postBodyHeight;
  postBodyWidth =
    window.innerWidth >= 1024
      ? window.innerWidth / 2 - 80 + "px"
      : window.innerWidth - 40 + "px";
  document.getElementById("postBody").style.width = postBodyWidth;
  textFit(document.getElementById("postBody"), { multiLine: true });
};

onMounted(() => {
  window.addEventListener("resize", checkPostDimensions);
  checkPostDimensions();
  textFit(document.getElementById("postBody"), { multiLine: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkPostDimensions);
});

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

const postHeight = computed(() => {
  if (window.innerWidth >= 1024) {
    return (
      window.innerHeight - parseInt(currentNavHeight.value, 10) - 120 + "px"
    );
  } else {
    return (
      (window.innerHeight - parseInt(currentNavHeight.value, 10) - 56) * 2 +
      "px"
    );
  }
});

const imageHeight = computed(() => {
  if (window.innerWidth >= 1024) {
    return (
      window.innerHeight - parseInt(currentNavHeight.value, 10) - 120 + "px"
    );
  } else {
    return (
      window.innerHeight / 2 - parseInt(currentNavHeight.value, 10) + 40 + "px"
    );
  }
});

const wrapperHeight = computed(() => {
  if (window.innerWidth >= 1024) {
    return (
      window.innerHeight - parseInt(currentNavHeight.value, 10) - 80 + "px"
    );
  } else {
    return (
      (window.innerHeight - parseInt(currentNavHeight.value, 10) - 56) * 2 +
      "px"
    );
  }
});
</script>

<style scoped>
h1 {
  @apply font-oliver text-4xl 2xl:text-5xl;
}
h2 {
  @apply font-jost text-2xl text-black/60 2xl:mb-4 2xl:text-3xl;
}
#postBody {
  @apply font-jost;
  /* height: v-bind(postBodyHeight);
  width: v-bind(postBodyWidth); */
}
#postWrapper {
  @apply w-full;
}
#wrapper {
  height: v-bind(wrapperHeight);
  scrollbar-width: none;
}
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: v-bind(imageHeight);
}
.post {
  height: v-bind(postHeight);
}
</style>
