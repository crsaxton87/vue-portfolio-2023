<template>
  <div class="text-center">
    <NuxtLink :to="`/products/${product.id}`">
      <div
        class="p-4 overflow-hidden duration-300 ease-out transform bg-white shadow-sm hover:shadow-md hover:scale-110 hover:rotate-3 hover:z-10 hover:relative"
      >
        <nuxt-img
          :src="`static/img/snoods/${product.img}.jpg`"
          alt="product thumb"
          class="object-cover h-64 min-w-full"
        />
        <div class="w-full mt-4 gradient-hr"></div>
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
