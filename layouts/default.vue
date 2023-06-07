<template>
  <div id="wrapper" class="flex flex-col justify-between">
    <header class="fixed left-0 top-0 z-50 w-[100vw] lg:w-full">
      <NuxtLink class="logo" to="/">send snoods</NuxtLink>
      <nav
        class="flex flex-col justify-center bg-theme-y px-6 md:py-4 xl:h-[60px] 2xl:h-[70px]"
        :class="{
          'pb-5 pt-7': showMenu,
          'h-[50px] py-6': !showMenu,
        }"
        @click="showMenu = !showMenu"
      >
        <div
          class="absolute left-6 top-3 flex cursor-pointer items-center hover:text-theme-r md:hidden"
          @click="showMenu = !showMenu"
        >
          <HeroIcons icon="burger" @click="showMenu = !showMenu" />
        </div>
        <div
          class="flex flex-row items-end justify-between md:flex md:items-center"
          :class="{ hidden: !showMenu }"
        >
          <div
            class="flex flex-col gap-4 pt-5 text-left sm:gap-0 md:flex-row md:justify-normal md:pt-0"
          >
            <NuxtLink class="navbar-item" to="/">Home</NuxtLink>
            <NuxtLink class="navbar-item" to="/products">Store</NuxtLink>
            <NuxtLink class="navbar-item" to="/videos">Videos</NuxtLink>
            <NuxtLink
              v-if="user"
              class="navbar-item cursor-pointer"
              @click.prevent="postmode = true"
              >Post</NuxtLink
            >
          </div>
          <div
            class="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-0"
          >
            <NuxtLink v-if="cartSize" id="cart-navbar" @click="handleCart">
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
import { navHeight } from "~/composables/layout/navHeight";
import { useStore } from "~/store";

document.body.classList.add("relative");
document.body.classList.add("overflow-x-hidden");

const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const { user } = await getUser();
const currentNavHeight = ref(navHeight());

const showMenu = ref(false);
const postmode = ref(false);

store.setCurrentUser(user.value);

// watch(postmode, () => {
//   console.log("postmode.value", postmode.value);
// });

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
//   watchEffect(() => {
//     currentNavHeight.value =
//       document.getElementsByTagName("header")[0].offsetHeight + "px";
//   });
// });

// onUnmounted(() => {
//   window.removeEventListener("resize", handleResize);
// });

// const handleResize = () => {
//   currentNavHeight.value =
//     document.getElementsByTagName("header")[0].offsetHeight + "px";
// };

const handleCart = () => {
  // document.body.classList.toggle("overflow-x-hidden");
  // document.html.classList.toggle("overflow-x-hidden");
  window.scrollTo(0, 0);
  document.getElementById("productCart").classList.remove("hidden");
  cartVisible.value = !cartVisible.value;
};

const appMinHeight = ref(
  window.innerHeight - parseInt(currentNavHeight.value, 10) - 40 + "px"
);
</script>

<style scoped>
footer {
  @apply flex h-10 w-full items-center justify-center bg-theme-y text-center font-jost font-medium;
}
#app {
  margin-top: v-bind(currentNavHeight);
  min-height: v-bind(appMinHeight);
}

#cart-navbar {
  @apply flex -translate-y-[0.0625rem] transform cursor-pointer font-jost text-lg font-medium hover:text-theme-r active:text-black md:-order-1 md:mr-4 lg:-translate-y-[0rem];
}
.logo {
  @apply absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 transform font-oliver text-3xl md:top-1/2 lg:text-4xl xl:text-5xl;
}
.navbar-item {
  @apply font-jost text-lg font-medium uppercase tracking-wider hover:text-theme-r active:text-black md:mr-4 md:text-sm md:tracking-normal lg:text-lg lg:tracking-wider;
}
</style>
