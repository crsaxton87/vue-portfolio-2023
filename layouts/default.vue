<template>
  <div class="wrapper">
    <header class="header">
      <NuxtLink class="logo" to="/">send snoods</NuxtLink>
      <nav
        class="nav"
        :class="{
          'pb-5 pt-7': showMenu,
          'h-[50px] py-6': !showMenu,
        }"
        @click="showMenu = !showMenu"
      >
        <div class="burger" @click="showMenu = !showMenu">
          <HeroIcons icon="burger" @click="showMenu = !showMenu" />
        </div>
        <div
          class="flex flex-row items-end justify-between md:flex md:items-center"
          :class="{ hidden: !showMenu }"
        >
          <div class="nav-left">
            <NuxtLink class="navbar-item" to="/">Home</NuxtLink>
            <NuxtLink class="navbar-item" to="/products">Store</NuxtLink>
            <NuxtLink class="navbar-item" to="/videos">Videos</NuxtLink>
            <NuxtLink
              v-if="user"
              class="navbar-item"
              @click.prevent="postmode = true"
              >Post</NuxtLink
            >
          </div>
          <div class="nav-right">
            <NuxtLink v-if="cartSize" class="cart-navbar" @click="handleCart">
              <HeroIcons class="pt-1" icon="cart" />
              <span> ({{ cartSize }})</span>
            </NuxtLink>
            <div>
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
    <PostOverlay :postmode="postmode" @close-post-modal="postmode = false" />
    <ProductCart :cart-visible="cartVisible" @cart-toggle="handleCart" />
    <div id="app">
      <slot />
    </div>
    <footer>
      &copy; 2023 Send Snoods &&nbsp;
      <a href="mailto:saxton.christian@gmail.com">Christian Saxton</a>
    </footer>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import HeroIcons from "~/components/HeroIcons.vue";
import LoginButton from "~/components/auth/LoginButton.vue";
import PostOverlay from "~/components/blog/PostOverlay.vue";
import ProductCart from "~/components/products/ProductCart.vue";
import getUser from "~/composables/auth/getUser";
import { useStore } from "~/store";

document.body.classList.add("relative");
document.body.classList.add("overflow-x-hidden");

const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const { user } = await getUser();
const showMenu = ref(false);
const postmode = ref(false);

store.setCurrentUser(user.value);

onMounted(() => {
  handleNavHeight();
  window.addEventListener("resize", handleNavHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleNavHeight);
});

const handleNavHeight = () => {
  const navHeightCheck = `${
    document.getElementsByTagName("header")[0].offsetHeight
  }px`;
  if (store.navHeight !== navHeightCheck) {
    store.navHeight = navHeightCheck;
  }
};

const handleCart = () => {
  window.scrollTo(0, 0);
  document.getElementById("productCart").classList.remove("hidden");
  cartVisible.value = !cartVisible.value;
};
</script>

<style scoped>
footer {
  @apply flex h-10 w-full items-center justify-center bg-theme-y text-center font-jost font-medium;
}
.burger {
  @apply absolute left-6 top-3 flex cursor-pointer items-center hover:text-theme-r md:hidden;
}
.cart-navbar {
  @apply flex -translate-y-[0.0625rem] transform cursor-pointer font-jost text-lg font-medium hover:text-theme-r active:text-black md:-order-1 md:mr-4 lg:-translate-y-[0rem];
}
.header {
  @apply relative left-0 top-0 z-50 w-[100vw] lg:w-full;
}
.logo {
  @apply absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 transform font-oliver text-3xl md:top-1/2 lg:text-4xl xl:text-5xl;
}
.nav {
  @apply flex flex-col justify-center bg-theme-y px-6 md:py-4 xl:h-[60px] 2xl:h-[70px];
}
.navbar-item {
  @apply cursor-pointer font-jost text-lg font-medium uppercase tracking-wider hover:text-theme-r active:text-black md:mr-4 md:text-sm md:tracking-normal lg:text-lg  lg:tracking-wider;
}
.nav-left {
  @apply flex flex-col gap-4 pt-5 text-left sm:gap-0 md:flex-row md:justify-normal md:pt-0;
}
.nav-right {
  @apply flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-0;
}
.wrapper {
  @apply flex flex-col justify-between;
}
</style>
