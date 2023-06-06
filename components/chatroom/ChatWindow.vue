<template>
  <div id="chat-window" ref="messages">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <span class="block text-xs text-gray-300">{{ doc.createdAt }}</span>
        <span class="mr-3 font-bold">{{ doc.name }}</span>
        <span>{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from "date-fns";
import { navHeight } from "~/composables/layout/navHeight";
import getCollection from "@/composables/chatroom/getCollection";

const { documents, error } = getCollection("messages");

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      const time = formatDistanceToNow(doc.createdAt.toDate()) + " ago";
      return { ...doc, createdAt: time };
    });
  }
});

const currentNavHeight = ref(navHeight());

const chatHeight = ref(0);

chatHeight.value =
  window.innerWidth >= 1024
    ? (window.innerHeight - parseInt(currentNavHeight.value, 10)) * 0.9 + "px"
    : (window.innerHeight -
        parseInt(currentNavHeight.value, 10) -
        (window.innerWidth / 16) * 9) *
        0.8 +
      "px";

const messages = ref(null);

// Auto-scroll to bottom of messages
onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight;
});
</script>

<style scoped>
#chat-window {
  @apply z-40 overflow-hidden bg-white px-4 py-2 hover:overflow-auto lg:bg-white/75 lg:px-7 lg:py-5 lg:backdrop-blur-md;
  height: v-bind(chatHeight);
  top: v-bind(currentNavHeight);
}
</style>
