<template>
  <div class="flex flex-col justify-between leading-8 md:flex-row">
    <span v-if="error">{{ error.message }}</span>
    <span v-if="currentUser" class="mr-4 italic text-accent3/75"
      >Logged in as {{ currentUser.email }}</span
    >
    <NuxtLink
      v-if="loggedIn"
      to="/userentry"
      class="text-accent2 active:text-accent3"
      @click="handleLogout()"
      >Logout</NuxtLink
    >
    <NuxtLink v-else to="/userentry" class="text-accent2 active:text-accent3"
      >Login</NuxtLink
    >
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import useLogout from "@/composables/auth/useLogout";

const store = useStore();
const { loggedIn, currentUser } = storeToRefs(store);
const { error, logout } = useLogout();

const handleLogout = async () => {
  await logout();
  if (!error.value) {
    store.logOut();
    store.currentUser = null;
  }
};
</script>
