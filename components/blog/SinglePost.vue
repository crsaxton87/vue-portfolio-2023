<template>
  <NuxtLink :to="`/details/${post.id}`">
    <h1 id="title">{{ post.title }}</h1>
    <h2 v-if="post.subhead" id="subhead">{{ post.subhead }}</h2>
    <p id="snippet">{{ snippet(post.body) }}</p>
  </NuxtLink>
  <div class="mt-2">
    <TagPill v-for="tag in post.tags" :key="tag" :tag="tag" class="post-tags" />
  </div>
</template>

<script setup>
import TagPill from "./TagPill.vue";
import { snippet } from "~/composables/blog/snippet.js";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const post = ref(props.post);
</script>

<style scoped>
h1 {
  @apply text-center font-oliver text-4xl md:text-3xl lg:text-left lg:text-4xl xl:text-5xl;
}
h2 {
  @apply text-center font-jost text-base uppercase text-black/60 md:text-sm lg:text-left lg:text-3xl;
}
#snippet {
  @apply font-jost text-base lg:text-lg xl:text-2xl;
}
</style>
