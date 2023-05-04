<template>
  <span v-if="currentUser" class="mr-4 italic text-accent3/75"
    >Logged in as {{ currentUser.email }}</span
  >
  <NuxtLink
    v-if="loggedIn"
    to="/userentry"
    class="navbar-item"
    @click="handleLogout()"
    >Logout</NuxtLink
  >
  <NuxtLink v-else to="/userentry" class="navbar-item">Login</NuxtLink>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import useLogout from "@/composables/chatroom/useLogout";

const store = useStore();
const { loggedIn, currentUser } = storeToRefs(store);
const { logout } = useLogout();

const handleLogout = async () => {
  store.logOut();
  await logout();
};
</script>
