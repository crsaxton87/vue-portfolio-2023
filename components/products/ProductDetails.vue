<template>
  <div>
    <div
      class="mx-auto grid w-5/6 grid-rows-[1fr_2fr] justify-center sm:w-full sm:grid-cols-[1fr_2fr] sm:grid-rows-1 sm:items-center sm:gap-10"
    >
      <div class="">
        <img
          :src="`/img/snoods/${product.img}.jpg`"
          :alt="`${product.title} image`"
          class="border-gradient mx-auto max-h-96 border-8 shadow-sm sm:mx-0"
        />
      </div>
      <div>
        <div
          class="mb-4 mt-4 flex items-center justify-between border-b-2 sm:mt-0"
        >
          <h2 class="text-4xl">{{ product.title }}</h2>
          <p class="text-xl">${{ product.price }}</p>
        </div>
        <h3 class="mb-2 font-bold">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <div class="flex items-center justify-between">
          <div>
            <label>Quantity:</label>
            <input
              v-model="quantity"
              minlength="1"
              type="number"
              class="ml-2 w-14 sm:ml-4 sm:w-20"
            />
          </div>
          <button class="button flex h-10" @click.prevent="addToCart(product)">
            <HeroIcons icon="cart" class="mr-2" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroIcons from "../HeroIcons.vue";
import { useStore } from "~/store";

const store = useStore();
const quantity = ref(1);

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const addToCart = (product) => {
  store.addToCart({ ...product, quantity });
  navigateTo({ path: "/Products", query: { cart: true } });
};
</script>
