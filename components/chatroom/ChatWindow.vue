<template>
  <div
    ref="messages"
    class="scrollbar chat-height overflow-hidden border-4 border-secondary/50 bg-white px-7 py-5 hover:overflow-auto"
  >
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="scrollbar">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <span class="block text-xs text-gray-300">{{ doc.createdAt }}</span>
        <span class="mr-3 font-bold">{{ doc.name }}</span>
        <span>{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow } from "date-fns";
import getCollection from "@/composables/chatroom/getCollection";

export default {
  setup() {
    const { documents, error } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          const time = formatDistanceToNow(doc.createdAt.toDate()) + " ago";
          return { ...doc, createdAt: time };
        });
      }
    });

    // Auto-scroll to bottom of messages
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    const navHeight = computed(() => {
      return document.getElementsByTagName("header")[0].offsetHeight + "px";
    });

    return { documents, error, messages, formattedDocuments, navHeight };
  },
};
</script>

<style scoped>
.chat-height {
  height: calc(68vh - 60px);
}
</style>
