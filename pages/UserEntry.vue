<template>
  <div class="container w-5/6 mx-auto text-center sm:w-full">
    <h1>Welcome</h1>
    <div v-if="showLogin">
      <h2>Log in to use the chat room or create blog posts</h2>
      <LoginForm @login="enterSite" />
      <p>
        No account yet?
        <span class="login-toggle" @click="showLogin = false">Sign up</span>
        instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up to use the chat room or create blog posts</h2>
      <SignupForm @signup="enterSite" />
      <p>
        Already registered?
        <span class="login-toggle" @click="showLogin = true">Log in</span>
        instead
      </p>
    </div>
  </div>
</template>

<script setup>
import SignupForm from "@/components/chatroom/SignupForm.vue";
import LoginForm from "@/components/chatroom/LoginForm.vue";
import { useStore } from "~/store";

const store = useStore();
const showLogin = ref(true);

const enterSite = () => {
  store.logIn();
  const prevRoute = localStorage.getItem("prevRoute");
  if (prevRoute === "Chatroom") {
    navigateTo("/chatroom");
  } else if (prevRoute === "Create") {
    navigateTo("/create");
  } else {
    navigateTo("/");
  }
};
</script>

<style>
.login-toggle {
  @apply cursor-pointer underline font-bold;
}
</style>
