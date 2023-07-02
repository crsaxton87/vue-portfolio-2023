<template>
  <form class="chat-form">
    <textarea
      v-model="message"
      class="message message-text"
      placeholder="Type a message and hit enter to send"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="message message-submit" @click.prevent="handleSubmit">
      <div>Submit</div>
    </div>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import getUser from "~/composables/auth/getUser";
import useCollection from "@/composables/chatroom/useCollection";
import { timestamp } from "@/firebase/config";
import { useStore } from "~/store";

const store = useStore();

const { user } = await getUser();
const { addDocument, error } = useCollection("messages");
const message = ref("");

/**
 * Handles the submission of a new chat message.
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the message has been added to the collection.
 */
const handleSubmit = async () => {
  // setTimeout(() => {
  //   document.body.classList.remove("noscroll");
  //   window.scrollTo({ top: 0 });
  //   document.body.classList.add("noscroll");
  // }, 1000);

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

const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

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
.chat-form {
  @apply z-20 flex items-center;
}
.message {
  height: v-bind(messageHeight);
}
.message-submit {
  @apply flex w-1/4 cursor-pointer flex-col justify-center bg-theme-y text-center font-jost font-medium hover:text-theme-r active:text-black;
}
.message-text {
  @apply w-3/4 cursor-pointer pr-4;
}
</style>
