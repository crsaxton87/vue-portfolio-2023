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

const { id } = useRoute().params;
const { posts, error, fetchPosts } = getPosts();

onMounted(() => {
  fetchPosts();
});

const tagPosts = computed(() =>
  posts.value.filter((post) => post.tags.includes(id))
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
  @apply col-span-12 mx-auto sm:col-span-2;
}
.title {
  @apply mb-0 text-center font-jost text-3xl lg:ml-10 lg:text-start;
}
.wrapper {
  @apply mt-10;
}
</style>
