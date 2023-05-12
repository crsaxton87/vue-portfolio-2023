<template>
  <div class="absolute left-0 top-0 h-full w-full">
    <div class="cart">
      <h3 class="absolute left-5 top-5">Cart</h3>
      <HeroIcons
        icon="x"
        class="absolute right-4 top-5 cursor-pointer hover:text-accent3 active:text-accent2"
        @click="emit('cartToggle')"
      />
      <div
        v-for="item in cart"
        :key="item.id"
        class="mt-2 grid w-full grid-cols-2"
      >
        <span>{{ item.title }} ({{ item.quantity }})</span>
        <div class="flex justify-end">
          <HeroIcons
            icon="trash"
            class="ml-2 cursor-pointer hover:text-accent3 active:text-accent2"
            @click="store.removeFromCart(item.id)"
          />
          <span>${{ item.price }}</span>
        </div>
      </div>
      <div class="mt-5 grid grid-cols-2 items-center">
        <div class="font-bold">Cart Total:</div>
        <div class="text-right font-bold">${{ cartTotal.toFixed(2) }}</div>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 z-10 m-0 h-full w-full bg-white bg-opacity-50 p-0"
      @click="emit('cartToggle')"
    ></div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import HeroIcons from "../HeroIcons.vue";
import { useStore } from "~/store";

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const emit = defineEmits(["cartToggle"]);

const store = useStore();
const { cart, cartSize, cartTotal } = storeToRefs(store);

const cartEdge = ref(null);
const navHeight =
  document.getElementsByTagName("header")[0].offsetHeight + "px";
const bounding = ref(
  document.getElementById("cart-navbar").getBoundingClientRect()
);

const handleResize = () => {
  bounding.value = document
    .getElementById("cart-navbar")
    .getBoundingClientRect();
  calculateCartEdge();
};

const calculateCartEdge = () => {
  cartEdge.value =
    window.innerWidth.toFixed() - bounding.value.right.toFixed() - 15 + "px";
};

calculateCartEdge();

watch(cartSize, () => {
  if (!cartSize.value) {
    emit("cartToggle");
  }
});
</script>

<style scoped>
@media (max-width: 769px) {
  .cart {
    @apply absolute left-1/2 top-1/2 z-20 w-5/6 -translate-x-1/2 -translate-y-1/2 transform bg-white px-5 pb-5 pt-14 text-sm shadow-lg;
  }
}

@media (min-width: 770px) {
  .cart {
    @apply absolute z-20 box-border max-w-md bg-white px-5 pb-5 pt-14 shadow-lg;
    right: v-bind(cartEdge);
    top: v-bind(navHeight);
  }
}
</style>
