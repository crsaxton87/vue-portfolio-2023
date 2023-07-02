<template>
  <div id="entryForm">
    <main id="formBody">
      <h1>Welcome</h1>
      <div>
        <h2>
          {{ message }}
        </h2>
        <component :is="showLogin ? LoginForm : SignupForm" @auth="enterSite" />
        <p>
          {{ prompt }}
          <span class="login-toggle" @click="showLogin = !showLogin">{{
            action
          }}</span>
          instead
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import SignupForm from "@/components/auth/SignupForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import { useStore } from "~/store";

const store = useStore();

const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

const showLogin = ref(true);

const message = computed(() =>
  showLogin.value
    ? "Log in to use the chat room or create blog posts"
    : "Sign up to use the chat room or create blog posts"
);
const prompt = computed(() =>
  showLogin.value ? "No account yet? " : "Already registered? "
);
const action = computed(() => (showLogin.value ? "Sign up" : "Log in"));

/**
 * Navigates to the previous route stored in localStorage.
 * If the previous route is "Videos", navigates to "/videos", otherwise navigates to "/".
 */
const enterSite = () => {
  const prevRoute = localStorage.getItem("prevRoute");
  navigateTo(prevRoute === "Videos" ? "/videos" : "/");
};

/**
 * The watcher for the store.navHeight property.
 * Calls the handleFormHeight function when the navHeight value changes and is not zero.
 */
watch(
  () => store.navHeight,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== 0) {
      handleFormHeight();
    }
  }
);

const formHeight = ref(`${window.innerHeight - currentNavHeight.value - 40}px`);

const handleFormHeight = () => {
  formHeight.value = `${window.innerHeight - currentNavHeight.value - 40}px`;
};

handleFormHeight();
</script>

<style scoped>
h1 {
  @apply font-oliver text-7xl;
}
h2 {
  @apply font-jost text-2xl;
}
#entryForm {
  height: v-bind(formHeight);
  @apply flex w-full items-center justify-center;
}
#formBody {
  @apply mx-auto flex h-[66vh] w-full flex-col items-center justify-center rounded-lg bg-white text-center lg:w-3/4 xl:w-1/2;
}
.login-toggle {
  @apply cursor-pointer font-bold underline;
}
</style>
