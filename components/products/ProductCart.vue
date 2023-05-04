<template>
  <div class="cart">
    <h3 class="absolute top-5 left-5">Cart</h3>
    <HeroIcons
      icon="x"
      class="absolute cursor-pointer hover:text-accent3 active:text-accent2 top-5 right-4"
      @click="emit('cartToggle')"
    />
    <div
      v-for="item in cart"
      :key="item.id"
      class="grid w-full grid-cols-2 mt-2"
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
    <div class="grid items-center grid-cols-2 mt-5">
      <div class="font-bold">Cart Total:</div>
      <div class="font-bold text-right">${{ cartTotal.toFixed(2) }}</div>
    </div>
  </div>
  <div
    class="fixed left-0 z-10 w-full h-full p-0 m-0 bg-white bg-opacity-50 modal-bg"
    @click="emit('cartToggle')"
  ></div>
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
const navHeight = computed(() => {
  return document.getElementsByTagName("header")[0].offsetHeight + "px";
});
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
.cart {
  @apply relative z-20 max-w-xs mx-auto text-sm px-5 pb-5 bg-white shadow-lg pt-14 -translate-y-5;
}

@media (min-width: 640px) {
  .cart {
    @apply absolute z-20 max-w-md px-5 pb-5 bg-white shadow-lg pt-14;
    right: v-bind(cartEdge);
    top: v-bind(navHeight);
  }
}
.modal-bg {
  top: v-bind(navHeight);
}
</style>
