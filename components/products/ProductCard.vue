<template>
  <div class="card-wrapper">
    <div class="card">
      <Swiper
        :modules="[SwiperNavigation, SwiperPagination]"
        :pagination="{
          dynamicBullets: true,
        }"
        :navigation="false"
        class="swiper"
      >
        <SwiperSlide>
          <div class="swiper-slide" @click="handleClick(product)">
            <img
              :id="product.title"
              :src="`/img/snoods/${product.img}${letter ? 'a' : 'b'}.jpg`"
              :alt="`${product.title} thumb a`"
              class="swiper-image"
              @mouseenter="letter = !letter"
              @mouseleave="letter = !letter"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide" @click="handleClick(product)">
            <img
              :id="product.title"
              :src="`/img/snoods/${product.img}b.jpg`"
              :alt="`${product.title} thumb b`"
              class="swiper-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div class="product-details" @click="handleClick(product)">
          <h4 class="product-title">
            {{ product.title }}
          </h4>
          <div class="reviews">
            <ProductReviews />
            <span>{{ productPrice(product.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductReviews from "./ProductReviews.vue";
import { productPrice } from "~/composables/products/productPrice";
import { useStore } from "~/store";

const store = useStore();

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const handleClick = (product) => {
  store.setSelectedProduct(product);
};

const letter = ref(true);
</script>

<style scoped>
.card {
  @apply bg-white p-4;
}
.card-wrapper {
  @apply cursor-pointer font-jost;
}
.product-details {
  @apply mt-2 grid grid-rows-2 text-left;
}
.product-title {
  @apply text-xl font-medium uppercase tracking-wider md:font-semibold lg:text-sm lg:font-medium xl:text-xl;
}
.reviews {
  @apply flex items-center justify-between;
}
.swiper {
  @apply h-72 md:h-80 lg:h-64 xl:h-80 2xl:h-96;
}
.swiper-button-next,
.swiper-button-prev {
  @apply md:hidden;
  color: black;
  opacity: 0.2;
  scale: 75%;
}
.swiper-button-disabled {
  @apply md:hidden;
  scale: 75%;
  color: black;
  opacity: 0.05 !important;
}
.swiper-image {
  @apply mx-auto max-h-72 md:max-h-80 lg:max-h-64 xl:max-h-80 2xl:max-h-96;
}
.swiper-pagination-bullet {
  @apply md:hidden;
  background-color: black;
  opacity: 0.2;
}
.swiper-pagination-bullet-active-next {
  opacity: 0.05 !important;
}
.swiper-slide {
  @apply min-w-full object-contain;
}
</style>
