<template>
  <form class="flex items-center mt-5">
    <textarea
      v-model="message"
      class="w-full mr-4 window-height"
      placeholder="Type a message and hit enter to send"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <button class="h-10 button" @click.prevent="handleSubmit">Submit</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import getUser from "@/composables/chatroom/getUser";
import useCollection from "@/composables/chatroom/useCollection";
import { timestamp } from "@/firebase/config";

const { user } = await getUser();
const { addDocument, error } = useCollection("messages");
const message = ref("");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };

  await addDocument(chat);
  if (!error.value) {
    message.value = "";
  }
};
</script>
