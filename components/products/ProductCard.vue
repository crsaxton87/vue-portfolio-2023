<template>
  <div class="text-center">
    <NuxtLink :to="`/products/${product.id}`">
      <div
        class="transform overflow-hidden bg-white p-4 shadow-sm duration-300 ease-out sm:hover:relative sm:hover:z-10 sm:hover:rotate-3 sm:hover:scale-110 sm:hover:shadow-md"
      >
        <img
          :src="`/img/snoods/${product.img}.jpg`"
          :alt="`${product.title} thumb`"
          class="h-64 min-w-full object-cover"
        />
        <div class="gradient-hr mt-4 w-full"></div>
        <div class="text-right">
          <h4 class="font-bold text-accent2">{{ product.title }}</h4>
          <h4 class="text-sm">${{ product.price }}</h4>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
