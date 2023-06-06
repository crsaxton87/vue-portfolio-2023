<template>
  <div
    class="flex flex-col items-end justify-between leading-8 md:flex-row md:items-center"
  >
    <span v-if="error">{{ error.message }}</span>
    <span
      v-if="currentUser"
      class="font-jost text-xs italic text-theme-r md:mr-4 lg:text-base"
      >logged in as {{ currentUser.email }}</span
    >
    <NuxtLink
      v-if="loggedIn"
      to="/userentry"
      class="login-link"
      @click="handleLogout()"
      >Log out</NuxtLink
    >
    <NuxtLink v-else to="/userentry" class="login-link">Login</NuxtLink>
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

<style scoped>
.login-link {
  @apply font-jost text-lg font-medium uppercase tracking-wider hover:text-theme-r active:text-black md:text-sm md:tracking-normal lg:text-lg lg:tracking-wider;
}
</style>
