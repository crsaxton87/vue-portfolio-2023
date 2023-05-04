<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <h1 class="ml-4 sm:ml-0">#{{ useRoute().params.id }}</h1>
    <div v-if="posts.length" class="grid grid-cols-12">
      <PostList :posts="tagPosts" class="col-span-12 sm:col-span-10" />
      <TagCloud :posts="posts" class="col-span-12 sm:col-span-2" />
    </div>
    <div v-else>
      <SpinnerGraphic />
    </div>
  </div>
</template>

<script setup>
import PostList from "~/components/blog/PostList.vue";
import TagCloud from "~/components/blog/TagCloud.vue";
import getPosts from "~/composables/blog/getPosts";

const { id } = useRoute().params;
const { posts, error, load } = getPosts();

load();

const tagPosts = computed(() => {
  return posts.value.filter((post) => post.tags.includes(id));
});
</script>
