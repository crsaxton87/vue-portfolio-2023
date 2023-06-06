<template>
  <div class="grid grid-cols-12 justify-items-center">
    <NuxtLink class="logo col-span-12" to="/">Send Snoods</NuxtLink>
    <div class="gradient-hr mb-1 mt-6 w-5/6 sm:my-10 sm:w-3/4"></div>
    <div v-if="error" class="col-span-12">{{ error }}</div>
    <div v-if="posts.length" class="col-span-12 grid grid-cols-12">
      <PostList :posts="posts" class="col-span-12 sm:col-span-10" />
      <div class="col-span-12 grid sm:col-span-2 sm:justify-items-end">
        <TagCloud :posts="posts" />
      </div>
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
  @apply mt-2 text-center font-logo text-6xl text-accent3 sm:text-8xl;
}
</style>
