<template>
  <div>
    <div
      v-show="cartVisible"
      id="productCart"
      class="transition-transform ease-in"
      :class="{ 'translate-x-full': !cartVisible }"
    >
      <h3 class="label">Cart</h3>
      <HeroIcons icon="x" class="icon-close" @click="emit('cart-toggle')" />
      <div v-for="product in cart" :key="product.id" class="product-list">
        <span>{{ product.title }} ({{ product.quantity }})</span>
        <div class="flex justify-end">
          <HeroIcons
            icon="trash"
            class="icon-trash"
            @click="store.removeFromCart(product.id)"
          />
          <span>{{ productPrice(product.price * product.quantity) }}</span>
        </div>
      </div>
      <div class="cart-total">
        <div class="font-bold">Cart Total:</div>
        <div class="text-right font-bold">${{ cartTotal.toFixed(2) }}</div>
      </div>
    </div>
    <div v-if="cartVisible" class="modal-bg" @click="emit('cart-toggle')"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import HeroIcons from "../HeroIcons.vue";
import { useStore } from "~/store";
import { productPrice } from "~/composables/products/productPrice";

defineProps({
  cartVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["cart-toggle"]);

const store = useStore();
const { cart, cartSize, cartTotal } = storeToRefs(store);

const currentNavHeight = computed(() => store.navHeight);

watch(cartSize, () => {
  if (!cartSize.value) {
    emit("cart-toggle");
  }
});
</script>

<style scoped>
#productCart {
  @apply absolute right-0 top-0 z-40 box-border bg-white px-5 pb-5 pt-14 shadow-lg;
  height: calc(100vh - v-bind(currentNavHeight));
  top: v-bind(currentNavHeight);
}
.cart-total {
  @apply mt-5 grid grid-cols-2 items-center;
}
.icon-close {
  @apply absolute right-4 top-5 cursor-pointer hover:text-theme-r active:text-black;
}
.icon-trash {
  @apply mr-2 cursor-pointer hover:text-theme-r active:text-black;
}
.label {
  @apply absolute left-5 top-5;
}
.modal-bg {
  @apply absolute left-0 top-0 z-20 m-0 h-full w-full bg-white bg-opacity-50 p-0 backdrop-blur-sm;
}
.product-list {
  @apply mt-2 grid w-full grid-cols-2;
}
</style>
