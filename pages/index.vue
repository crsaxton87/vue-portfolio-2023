<template>
  <div class="grid grid-cols-12 justify-items-center">
    <NuxtLink class="col-span-12 logo" to="/">Send Snoods</NuxtLink>
    <div class="w-5/6 mt-4 mb-2 sm:my-10 sm:w-3/4 gradient-hr"></div>
    <div v-if="error" class="col-span-12">{{ error }}</div>
    <div v-if="posts.length" class="grid grid-cols-12 col-span-12">
      <PostList :posts="posts" class="col-span-12 sm:col-span-10" />
      <TagCloud :posts="posts" class="col-span-12 sm:col-span-2" />
    </div>
    <div v-else class="absolute-center">
      <SpinnerGraphic />
    </div>
  </div>
</template>

<script setup>
import PostList from "~/components/blog/PostList.vue";
import TagCloud from "~/components/blog/TagCloud.vue";
import getPosts from "~/composables/blog/getPosts";

const { posts, error, load } = getPosts();

load();
</script>

<style scoped>
.logo {
  @apply text-center font-logo text-6xl sm:text-8xl text-accent3;
}
</style>
