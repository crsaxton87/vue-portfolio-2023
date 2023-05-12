<template>
  <form @submit.prevent="handleSubmit">
    <div class="mx-auto my-8 grid w-5/6 gap-4 md:w-2/3 lg:w-1/3">
      <input v-model="email" type="email" required placeholder="email" />
      <input
        v-model="password"
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
const emit = defineEmits(["login"]);

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    const { user } = await getUser();
    store.setCurrentUser(user.value);
    store.logIn();
    emit("login");
  }
};
</script>
