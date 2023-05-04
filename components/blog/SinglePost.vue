<template>
  <div class="p-5 border-b-2 border-gray-100 sm:mb-5">
    <NuxtLink :to="`/details/${post.id}`">
      <h2>{{ post.title }}</h2>
      <p>{{ snippet }}</p>
    </NuxtLink>
    <TagPill v-for="tag in post.tags" :key="tag" :tag="tag" class="post-tags" />
  </div>
</template>

<script setup>
import TagPill from "./TagPill.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const snippet = computed(() => {
  return props.post.body.substring(0, 300) + "....";
});
</script>
