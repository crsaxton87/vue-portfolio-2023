<template>
  <div>
    <div
      class="grid justify-center sm:items-center sm:w-full w-5/6 grid-rows-[1fr_2fr] sm:gap-10 mx-auto sm:grid-rows-1 sm:grid-cols-[1fr_2fr]"
    >
      <div class="">
        <nuxt-img
          :src="`static/img/snoods/${product.img}.jpg`"
          alt="product img"
          class="border-8 shadow-sm border-gradient max-h-96"
        />
      </div>
      <div>
        <div
          class="flex items-center justify-between mt-4 mb-4 border-b-2 sm:mt-0"
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
              class="ml-2 w-14 sm:w-20 sm:ml-4"
            />
          </div>
          <button class="flex h-10 button" @click.prevent="addToCart(product)">
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
