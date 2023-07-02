<template>
  <div class="reviews-wrapper">
    <div
      v-for="(num, index) in 1 + Math.round(Math.random() * 4)"
      :key="index"
      class="star"
    >
      <HeroIcons icon="star" class="text-theme-y" />
    </div>
    <span class="reviews-text"
      >{{ Math.round(Math.random() * 100) }} reviews</span
    >
  </div>
</template>

<script setup>
import HeroIcons from "../HeroIcons.vue";
</script>

<style scoped>
.reviews-text {
  @apply ml-4 text-base font-bold text-theme-r lg:ml-1 lg:text-sm xl:ml-4 xl:text-base;
}
.reviews-wrapper {
  @apply flex items-center;
}
.star {
  @apply w-4 -translate-x-1 scale-75;
}
</style>
