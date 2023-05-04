<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
  </nav>
</template>

<script setup>
import getUser from "@/composables/chatroom/getUser";

const { user } = getUser();
</script>
