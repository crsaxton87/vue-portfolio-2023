<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup>
import SinglePost from "./SinglePost.vue";

defineProps({
  posts: {
    type: Object,
    required: true,
  },
});
</script>
