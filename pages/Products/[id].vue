<template>
  <div>
    <Head>
      <Title>Send Snoods | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import getProduct from "~/composables/products/getProduct";
import ProductDetails from "~/components/products/ProductDetails.vue";

const { id } = useRoute().params;

const { product, error, load } = getProduct(id);

await load();

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>
