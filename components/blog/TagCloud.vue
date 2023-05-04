<template>
  <div class="flex flex-col px-4 pb-5 text-center sm:px-0">
    <h3 class="pt-5 pb-1">Tags</h3>
    <div class="self-center sm:w-8/12">
      <TagPill v-for="tag in tags" :key="tag" :tag="tag" class="mb-2 mr-1" />
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
