<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-wrapper">
      <input
        v-model="displayName"
        class="form"
        type="text"
        required
        placeholder="display name"
      />
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
const emit = defineEmits(["auth"]);

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value);
  if (!error.value) {
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
