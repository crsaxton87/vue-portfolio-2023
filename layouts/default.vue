<template>
  <div>
    <header>
      <nav class="px-6 py-4 bg-white">
        <div
          class="container flex flex-col items-center justify-between visible mx-auto sm:flex-row"
        >
          <div class="flex justify-between leading-8 sm:justify-normal">
            <NuxtLink class="navbar-item" to="/">Home</NuxtLink>
            <NuxtLink class="navbar-item" to="/create">Create Post</NuxtLink>
            <NuxtLink class="navbar-item" to="/products">Store</NuxtLink>
            <NuxtLink class="navbar-item" to="/chatroom">Chat Room</NuxtLink>
          </div>
          <div class="flex justify-between sm:justify-normal">
            <NuxtLink
              v-if="cartSize"
              id="cart-navbar"
              class="flex cursor-pointer navbar-item"
              @click="handleCart"
            >
              <HeroIcons icon="cart" />
              <span> ({{ cartSize }})</span>
            </NuxtLink>
            <LoginButton />
          </div>
        </div>
        <!-- <HeroIcons
          icon="burger"
          class="absolute right-4 top-3 text-accent3 hover:text-accent2"
        /> -->
      </nav>
      <div class="w-full mb-5 sm:mb-10 gradient-hr"></div>
    </header>
    <ProductCart v-if="cartVisible" @cart-toggle="handleCart" />
    <div
      id="app"
      class="container pb-5 mx-auto"
      :class="{ 'blur-sm': cartVisible }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import HeroIcons from "~/components/HeroIcons.vue";
import ProductCart from "~/components/products/ProductCart.vue";
import getUser from "~/composables/chatroom/getUser";
import { useStore } from "~/store";

const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const { user } = await getUser();

store.setCurrentUser(user.value);

const handleCart = () => {
  cartVisible.value = !cartVisible.value;
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
.pointer {
  cursor: pointer;
} */
</style>
