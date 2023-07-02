<template>
  <div
    v-for="(post, index) in posts.slice().reverse()"
    :key="post.id"
    class="blog-panel-wrapper"
  >
    <div
      :class="index % 2 ? 'md:col-span-2' : 'md:col-span-4'"
      class="col-span-6 flex h-full items-center justify-center bg-white"
    >
      <NuxtLink v-if="index % 2" :to="`/blog/${post.id}`">
        <img class="w-full" :src="`/img/blog/blog${(index + 1) % 10}.jpg`" />
      </NuxtLink>
      <div v-else class="p-4 xl:p-12">
        <SinglePost :post="post" />
        <span v-if="error">{{ error }}</span>
      </div>
    </div>
    <div
      :class="
        index % 2 ? 'order-first md:order-none md:col-span-4' : 'md:col-span-2'
      "
      class="col-span-6 flex h-full items-center justify-center bg-white"
    >
      <div v-if="index % 2" class="p-4 xl:p-12">
        <SinglePost :post="post" />
        <span v-if="error">{{ error }}</span>
      </div>
      <NuxtLink v-else :to="`/blog/${post.id}`">
        <img
          class="w-full"
          :src="`/img/blog/blog${String(index + 1).substring(-1)}.jpg`"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import SinglePost from "../blog/SinglePost.vue";
import getPosts from "~/composables/blog/getPosts";

const { posts, error, fetchPosts } = getPosts();

fetchPosts();
</script>

<style scoped>
.blog-panel-wrapper {
  @apply mx-auto grid w-full grid-cols-6 shadow-sm lg:mt-10 xl:w-11/12 2xl:w-2/3;
}
.image-panel {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
