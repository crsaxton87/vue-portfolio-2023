<template>
  <div>
    <div
      class="mx-auto mb-10 grid w-11/12 grid-cols-1 gap-5 sm:mb-20 sm:w-full sm:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="p in products" :key="p">
        <ProductCard :product="p" />
        <div v-if="error">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import getProducts from "~/composables/products/getProducts";
import ProductCard from "~/components/products/ProductCard.vue";

const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const route = useRoute();
const { products, error, load } = getProducts();

await load();

if (route.query.cart && !cartVisible.value && cartSize.value) {
  store.cartToggle();
}

useHead({
  title: "Send Snoods | Merch",
});
</script>
