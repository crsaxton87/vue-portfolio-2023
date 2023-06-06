<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="post">
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

<style scoped>
.post {
  @apply mt-10;
}
</style>
