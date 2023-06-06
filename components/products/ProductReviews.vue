<template>
  <div class="flex items-center">
    <div
      v-for="(num, index) in 1 + Math.round(Math.random() * 4)"
      :key="index"
      class="w-4 -translate-x-1 scale-75"
    >
      <HeroIcons icon="star" class="text-theme-y" />
    </div>
    <span
      class="ml-4 text-base font-bold text-theme-r lg:ml-1 lg:text-sm xl:ml-4 xl:text-base"
      >{{ Math.round(Math.random() * 100) }} reviews</span
    >
  </div>
</template>

<script setup>
import HeroIcons from "../HeroIcons.vue";
</script>

<style scoped></style>
