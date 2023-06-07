<template>
  <form class="z-20 flex items-center">
    <textarea
      v-model="message"
      class="message w-3/4 cursor-pointer pr-4"
      placeholder="Type a message and hit enter to send"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div
      class="message flex w-1/4 cursor-pointer flex-col justify-center bg-theme-y text-center font-jost font-medium hover:text-theme-r active:text-black"
      @click.prevent="handleSubmit"
    >
      <div>Submit</div>
    </div>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import getUser from "~/composables/auth/getUser";
import useCollection from "@/composables/chatroom/useCollection";
import { navHeight } from "~/composables/layout/navHeight";
import { timestamp } from "@/firebase/config";

const { user } = await getUser();
const { addDocument, error } = useCollection("messages");
const message = ref("");

const handleSubmit = async () => {
  setTimeout(() => {
    document.body.classList.remove("noscroll");
    window.scrollTo({ top: 0 });
    document.body.classList.add("noscroll");
  }, 1000);

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

const currentNavHeight = ref(parseInt(navHeight(), 10));

const messageHeight = ref(0);

messageHeight.value =
  window.innerWidth >= 1024
    ? (window.innerHeight - currentNavHeight.value) * 0.1 + "px"
    : (window.innerHeight -
        currentNavHeight.value -
        (window.innerWidth / 16) * 9) *
        0.2 +
      "px";
</script>

<style scoped>
input,
textarea {
  @apply resize-none p-2;
}
input:focus,
textarea:focus {
  outline: none;
}
.message {
  height: v-bind(messageHeight);
}
</style>
