<template>
  <NuxtLink :id="tag" :to="`/tags/${tag}`" class="pill"> #{{ tag }} </NuxtLink>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
