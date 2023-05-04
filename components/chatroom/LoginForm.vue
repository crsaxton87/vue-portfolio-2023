<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid w-5/6 gap-4 mx-auto my-8 md:w-2/3 lg:w-1/3">
      <input v-model="email" type="email" required placeholder="email" />
      <input
        v-model="password"
        type="password"
        required
        placeholder="password"
      />
    </div>
    <button class="mb-8 button">Log In</button>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script setup>
import useLogin from "@/composables/chatroom/useLogin";

const email = ref("");
const password = ref("");
const emit = defineEmits(["login"]);

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    emit("login");
  }
};
</script>
