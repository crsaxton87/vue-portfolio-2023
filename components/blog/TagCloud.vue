<template>
  <div class="cloud-wrapper">
    <div class="title">Tags</div>
    <div class="pills">
      <TagPill v-for="tag in tags" :key="tag" :tag="tag" class="pill-style" />
    </div>
  </div>
</template>

<script setup>
import TagPill from "./TagPill.vue";
import useTags from "~/composables/blog/useTags";

const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
});
const { tags } = useTags(props.posts);
</script>

<style scoped>
.cloud-wrapper {
  @apply flex flex-col px-4 pb-5 text-center lg:w-2/3 lg:px-0;
}
.title {
  @apply mb-4 mt-10 font-oliver text-4xl text-theme-r;
}
.pill-style {
  @apply mb-2 mr-1 sm:mr-2;
}
.pills {
  @apply self-center;
}
</style>
