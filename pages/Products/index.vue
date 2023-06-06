<template>
  <div>
    <div class="store-banner-bg relative mb-5 h-16 overflow-hidden md:h-20">
      <span
        class="absolute-center w-full text-center font-jost text-4xl font-semibold text-white md:text-5xl"
        >SNOOD SHOP</span
      >
    </div>
    <div
      class="container mx-auto mb-10 grid w-11/12 grid-cols-1 gap-5 sm:mb-20 sm:w-full sm:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="p in products.slice().reverse()" :key="p">
        <ProductCard :product="p" @click="handleClick(p)" />
        <div v-if="error">{{ error }}</div>
      </div>
    </div>
    <ProductDetails :product="product" @close-details="product = null" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import getProducts from "~/composables/products/getProducts";
import getProduct from "~/composables/products/getProduct";
import ProductCard from "~/components/products/ProductCard.vue";
import ProductDetails from "~/components/products/ProductDetails.vue";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { cartVisible, cartSize } = storeToRefs(store);
const { products, error, load } = getProducts();
const product = ref();

await load();

window.scrollTo({ top: 0, behavior: "smooth" });

if (route.query.cart && !cartVisible.value && cartSize.value) {
  store.cartToggle();
}

store.$subscribe((_mutation, state) => {
  product.value = state.selectedProduct;
});

if (route.query.product) {
  const { product: newProduct, load } = getProduct(route.query.product);
  await load();
  store.setSelectedProduct(newProduct.value);
  product.value = newProduct.value;
}

const handleClick = (p) => {
  router.push(`/products/?product=${p.id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.store-banner-bg {
  background: linear-gradient(135deg, #87d3df 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #87d3df 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #87d3df 25%, transparent 25%),
    linear-gradient(45deg, #87d3df 25%, transparent 25%);
  background-size: 2em 2em;
  background-color: #82cad6;
}
</style>
