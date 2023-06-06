<template>
  <div class="mx-auto w-5/6 sm:w-3/4">
    <div v-if="error">{{ error }}</div>
    <form
      class="grid sm:grid-rows-[6rem_24rem_7rem_3rem]"
      @submit.prevent="handleSubmit"
    >
      <div class="mb-4">
        <h3>Title</h3>
        <input v-model="title" class="h-10 w-full" type="text" required />
      </div>
      <div class="mb-4">
        <h3>Content</h3>
        <textarea
          v-model="body"
          class="h-80 min-h-[300px] w-full"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <h3>Tags <span class="text-sm">(press enter to add tag)</span></h3>
        <input
          v-model="tagInput"
          class="h-10 w-full"
          type="text"
          @keydown.enter.prevent="handleKeydown"
          @keydown.tab.prevent="handleKeydown"
          @keydown.,.prevent="handleKeydown"
        />
        <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      </div>
      <div class="mx-auto">
        <button class="button mt-2">Add Post</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { addDoc, collection } from "@firebase/firestore";
import { db, timestamp } from "@/firebase/config";
import getUser from "~/composables/auth/getUser";

definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(async () => {
      const { user } = await getUser();
      if (!user.value) {
        return navigateTo("/userentry");
      }
    }),
  ],
});

const title = ref("");
const body = ref("");
const error = ref("");
const tagInput = ref("");
const tags = ref([]);
const { user } = await getUser();

const handleKeydown = () => {
  if (!tags.value.includes(tagInput.value)) {
    tagInput.value = tagInput.value.replace(/\s/, "");
    tags.value.push(tagInput.value);
  }
  tagInput.value = "";
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp(),
    createdBy: user.value.email,
  };

  try {
    const colRef = collection(db, "posts");
    await addDoc(colRef, post);
  } catch (err) {
    error.value = err.message;
  }

  navigateTo({ path: "/" });
};
</script>
