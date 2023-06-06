<template>
  <main class="grid grid-cols-1">
    <button class="splash-button" @click="handleClick">SHOP SNOODS NOW</button>
    <Splash2Up :config="splashConfig" />
    <ProductTabbedCarousel :config="carouselConfig1" />
    <BannerDivider :config="bannerConfig1" />
    <BlogPanel />
    <div class="hidden p-4 lg:block" name="padding"></div>
  </main>
</template>

<script setup>
import { useRouter } from "nuxt/app";
import { navHeight } from "~/composables/layout/navHeight";
import BannerDivider from "~/components/layout/BannerDivider.vue";
import BlogPanel from "~/components/layout/BlogPanel.vue";
import ProductTabbedCarousel from "~/components/layout/ProductTabbedCarousel.vue";
import Splash2Up from "~/components/layout/Splash2Up.vue";
const router = useRouter();

const currentNavHeight = ref(navHeight());

const splashConfig = {
  left: {
    textTop: "snood",
    textBottom: "doggy dogg",
    img: "/img/blog/splash01.jpg",
  },
  right: {
    textTop: "cute pooch",
    textBottom: "comfy snood",
    img: "/img/blog/splash02.jpg",
  },
};

const carouselConfig1 = [
  {
    name: "Fun",
    titles: ["Baby Alien Snood", "Rooster Snood", "Frog Snood"],
  },
  {
    name: "Classic",
    titles: ["Westerly Snood", "Dachshund Snood", "Black Bear Snood"],
  },
  {
    name: "Limited Time",
    titles: ["Baby Shark Snood", "Devil Snood", "Rhino Snood"],
  },
];

const bannerConfig1 = {
  img: "/img/blog/banner01.jpg",
};

const handleClick = () => {
  router.push("products");
};

const buttonTop =
  window.innerHeight / 2 + parseInt(currentNavHeight.value, 10) / 2 + "px";
</script>

<style scoped>
.splash-button {
  @apply h-16 w-56 rounded-md bg-theme-y font-jost text-lg font-semibold shadow-md hover:text-theme-r active:text-black;
  @apply absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform;
  top: v-bind(buttonTop);
}
</style>
