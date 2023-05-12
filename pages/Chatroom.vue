<template>
  <div class="container mx-auto w-5/6">
    <UserDetails />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import ChatWindow from "@/components/chatroom/ChatWindow.vue";
import UserDetails from "@/components/chatroom/UserDetails.vue";
import NewChatForm from "@/components/chatroom/NewChatForm.vue";
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
</script>
