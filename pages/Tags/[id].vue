<template>
  <div class="wrapper">
    <div v-if="error">{{ error }}</div>
    <h1 class="title">
      {{ `#${id}` }}
    </h1>
    <div v-if="posts.length" class="posts-wrapper">
      <PostList :posts="tagPosts" class="post-list" />
      <TagCloud :posts="posts" class="tag-cloud" />
    </div>
    <div v-else>
      <SpinnerGraphic />
    </div>
  </div>
</template>

<script setup>
import PostList from "~/components/blog/PostList.vue";
import TagCloud from "~/components/blog/TagCloud.vue";
import getPosts from "~/composables/blog/getPosts";
import { useStore } from "~/store";

const store = useStore();

const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

const { id } = useRoute().params;
const { posts, error, fetchPosts } = getPosts();

onMounted(() => {
  fetchPosts();
});

const tagPosts = computed(() =>
  posts.value.filter((post) => post.tags.includes(id))
);

const bodyHeight = ref("0px");

const handleBodyHeight = () => {
  bodyHeight.value =
    window.innerWidth >= 1024
      ? `${window.innerHeight - currentNavHeight.value - 80}px`
      : `100%`;
};

handleBodyHeight();

/**
 * Watches the store's navHeight property and updates the image height accordingly.
 */
watch(
  () => store.navHeight,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== 0) {
      handleBodyHeight();
    }
  }
);
</script>

<style scoped>
.post-list {
  @apply col-span-12 mx-4 lg:col-span-10 lg:ml-20 lg:mr-10;
}
.posts-wrapper {
  @apply grid grid-cols-12;
}
.tag-cloud {
  @apply col-span-12 mx-auto lg:col-span-2;
}
.title {
  @apply mb-0 text-center font-jost text-3xl lg:ml-10 lg:text-start;
}
.wrapper {
  @apply mt-10 min-h-[100vh];
  height: v-bind(bodyHeight);
}
</style>
