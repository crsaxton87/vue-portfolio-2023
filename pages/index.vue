<template>
  <main class="wrapper">
    <div class="button-container">
      <button class="splash-button" @click.prevent>
        <nuxt-link to="/products">SHOP SNOODS NOW</nuxt-link>
      </button>
    </div>
    <Splash2Up :config="splashConfig" />
    <ProductTabbedCarousel :config="carouselConfig" />
    <BannerDivider :config="{ img: '/img/blog/banner01.jpg' }" />
    <BlogPanel />
    <div class="padding" name="padding"></div>
  </main>
</template>

<script setup>
import BannerDivider from "~/components/layout/BannerDivider.vue";
import BlogPanel from "~/components/layout/BlogPanel.vue";
import ProductTabbedCarousel from "~/components/layout/ProductTabbedCarousel.vue";
import Splash2Up from "~/components/layout/Splash2Up.vue";
import { useStore } from "~/store";

import splashConfig from "~/config/splashConfig.json";
import carouselConfig from "~/config/carouselConfig.json";

const store = useStore();

const currentNavHeight = computed(() => store.navHeight);
</script>

<style scoped>
.button-container {
  @apply absolute z-10 flex w-full items-center justify-center;
  height: calc(100vh - v-bind(currentNavHeight));
}
.padding {
  @apply hidden p-4 lg:block;
}
.splash-button {
  @apply h-16 w-56 rounded-md bg-theme-y font-jost text-lg font-semibold shadow-md hover:text-theme-r active:text-black;
}
.wrapper {
  @apply grid grid-cols-1;
}
</style>
