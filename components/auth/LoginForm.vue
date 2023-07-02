<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-wrapper">
      <input
        v-model="email"
        class="form"
        type="email"
        required
        placeholder="email"
      />
      <input
        v-model="password"
        class="form"
        type="password"
        required
        placeholder="password"
      />
    </div>
    <button class="button mb-8">Log In</button>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script setup>
import useLogin from "@/composables/auth/useLogin";
import { useStore } from "~/store";
import getUser from "~/composables/auth/getUser";

const store = useStore();
const email = ref("");
const password = ref("");
const emit = defineEmits(["auth"]);

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    const { user } = await getUser();
    store.setCurrentUser(user.value);
    store.logIn();
    emit("auth");
  }
};
</script>

<style scoped>
.form {
  @apply w-full rounded-md border-2 border-theme-b/25 p-2;
}
.form-wrapper {
  @apply mx-auto my-8 grid w-5/6 gap-4;
}
</style>
