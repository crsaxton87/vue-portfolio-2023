<template>
  <div class="flex flex-col px-4 pb-5 text-center sm:w-2/3 sm:px-0">
    <h3 class="pb-1 pt-5">Tags</h3>
    <div class="self-center">
      <TagPill
        v-for="tag in tags"
        :key="tag"
        :tag="tag"
        class="mb-2 mr-1 sm:mr-0"
      />
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
