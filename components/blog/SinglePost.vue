<template>
  <div class="border-b-2 border-gray-100 p-5 sm:mb-5">
    <NuxtLink :to="`/details/${post.id}`">
      <h2>{{ post.title }}</h2>
      <p>{{ snippet }}</p>
    </NuxtLink>
    <div class="mt-2">
      <TagPill
        v-for="tag in post.tags"
        :key="tag"
        :tag="tag"
        class="post-tags"
      />
    </div>
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
