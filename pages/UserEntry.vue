<template>
  <main
    class="mx-auto flex h-[66vh] w-full flex-col items-center justify-center rounded-lg bg-white text-center lg:w-3/4 xl:w-1/2"
  >
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
  </main>
</template>

<script setup>
import SignupForm from "@/components/auth/SignupForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const showLogin = ref(true);

const enterSite = () => {
  const prevRoute = localStorage.getItem("prevRoute");
  if (prevRoute === "Videos") {
    navigateTo("/videos");
  } else if (prevRoute === "Create") {
    navigateTo("/create");
  } else {
    navigateTo("/");
  }
};
</script>

<style scoped>
h1 {
  @apply font-oliver text-7xl;
}
h2 {
  @apply font-jost text-2xl;
}
.login-toggle {
  @apply cursor-pointer font-bold underline;
}
</style>
