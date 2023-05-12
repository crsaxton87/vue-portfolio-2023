<template>
  <form @submit.prevent="handleSubmit">
    <div class="mx-auto my-8 grid w-5/6 gap-4 md:w-2/3 lg:w-1/3">
      <input
        v-model="displayName"
        type="text"
        required
        placeholder="display name"
      />
      <input v-model="email" type="email" required placeholder="email" />
      <input
        v-model="password"
        type="password"
        required
        placeholder="password"
      />
    </div>
    <button class="button mb-8">Sign Up</button>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script setup>
import useSignup from "@/composables/auth/useSignup";

const { error, signup } = useSignup();

const displayName = ref("");
const email = ref("");
const password = ref("");
const emit = defineEmits(["signup"]);

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    emit("signup");
  }
};
</script>
