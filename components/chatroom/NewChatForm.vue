<template>
  <form class="mt-5 flex items-center">
    <textarea
      v-model="message"
      class="window-height mr-4 w-full"
      placeholder="Type a message and hit enter to send"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <button class="button h-10" @click.prevent="handleSubmit">Submit</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import getUser from "~/composables/auth/getUser";
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
