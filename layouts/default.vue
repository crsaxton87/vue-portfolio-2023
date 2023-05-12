<template>
  <div>
    <header class="left-0 top-0 z-30 w-full">
      <nav class="bg-white px-6 py-6 md:py-4" @click="showMenu = !showMenu">
        <div
          class="container mx-auto flex-col items-center justify-between md:flex md:flex-row"
          :class="{ hidden: !showMenu }"
        >
          <div
            class="flex flex-col text-left leading-8 md:flex-row md:justify-normal"
          >
            <NuxtLink class="navbar-item" to="/">Home</NuxtLink>
            <NuxtLink class="navbar-item" to="/create">Create Post</NuxtLink>
            <NuxtLink class="navbar-item" to="/products">Store</NuxtLink>
            <NuxtLink class="navbar-item" to="/chatroom">Chat Room</NuxtLink>
          </div>
          <div
            class="flex flex-row items-end justify-between md:justify-normal"
          >
            <NuxtLink
              v-if="cartSize"
              id="cart-navbar"
              class="navbar-item order-2 flex cursor-pointer pb-1 md:-order-1"
              @click="handleCart"
            >
              <HeroIcons icon="cart" />
              <span> ({{ cartSize }})</span>
            </NuxtLink>
            <div>
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>
      <div
        class="absolute top-3 flex cursor-pointer items-center text-accent3 hover:text-accent2 md:hidden"
        :class="{
          'right-6': showMenu,
          'right-5': !showMenu,
          'top-7': showMenu,
        }"
        @click="showMenu = !showMenu"
      >
        <span v-if="!showMenu" class="text-sm font-bold uppercase">Menu</span>
        <HeroIcons icon="burger" />
      </div>
      <div class="gradient-hr mb-5 w-full sm:mb-10"></div>
    </header>
    <ProductCart v-if="cartVisible" @cart-toggle="handleCart" />
    <div
      id="app"
      class="container mx-auto pb-5"
      :class="{ 'blur-sm': cartVisible }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import HeroIcons from "~/components/HeroIcons.vue";
import LoginButton from "~/components/auth/LoginButton.vue";
import ProductCart from "~/components/products/ProductCart.vue";
import getUser from "~/composables/auth/getUser";
import { useStore } from "~/store";

const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const { user } = await getUser();

store.setCurrentUser(user.value);

const handleCart = () => {
  cartVisible.value = !cartVisible.value;
};

const showMenu = ref(false);
</script>
