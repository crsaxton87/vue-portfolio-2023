<template>
  <div
    ref="messages"
    class="py-5 overflow-hidden bg-white border-4 px-7 border-secondary/50 hover:overflow-auto scrollbar chat-height"
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
  height: calc(80vh - v-bind(navHeight));
}
</style>
