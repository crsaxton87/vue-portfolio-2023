<template>
  <div v-if="product">
    <div
      id="productModal"
      ref="productModal"
      class="animate__animated animate__slideInDown"
    >
      <div class="max-h-[30vh] sm:max-h-full">
        <img
          :src="`/img/snoods/${product.img}a.jpg`"
          :alt="`${product.title} image`"
          class="mx-auto max-h-[30vh] sm:max-h-full"
        />
        <HeroIcons
          v-if="winWidth < 640"
          icon="x"
          class="absolute right-10 top-10 scale-150 transform hover:cursor-pointer hover:text-theme-r"
          @click="handleClose"
        />
      </div>
      <div>
        <div class="my-4 flex items-center justify-between border-b-2 sm:mt-0">
          <h2 class="text-2xl sm:text-4xl">{{ product.title }}</h2>
          <HeroIcons
            v-if="winWidth >= 640"
            icon="x"
            class="hover:cursor-pointer hover:text-theme-r"
            @click="handleClose"
          />
        </div>
        <div class="flex items-baseline justify-between">
          <h3 class="mb-2 font-bold">Product description:</h3>
          <p class="text-xl">{{ productPrice(product.price) }}</p>
        </div>
        <p class="mb-7 whitespace-pre-wrap text-sm sm:text-base">
          {{ product.description }}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <label class="hidden sm:block">Quantity:</label>
            <div class="flex items-center sm:ml-4">
              <HeroIcons
                icon="minus"
                class="hover:text-theme-r"
                @click="quantity--"
              />
              <span class="mx-4 font-jost text-lg font-semibold">{{
                quantity
              }}</span>
              <HeroIcons
                icon="plus"
                class="hover:text-theme-r"
                @click="quantity++"
              />
            </div>
          </div>
          <button class="button flex h-10" @click.prevent="addToCart(product)">
            <HeroIcons icon="cart" class="mr-2" />
            <span class="text-sm sm:text-base">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
    <div
      id="modalBg"
      class="animate__animated animate__slideInDown"
      @click="handleClose"
    ></div>
  </div>
</template>

<script setup>
import HeroIcons from "../HeroIcons.vue";
import { productPrice } from "../../composables/products/productPrice";
import { navHeight } from "~/composables/layout/navHeight";
import { useStore } from "~/store";

const router = useRouter();
const store = useStore();
const quantity = ref(1);

const winWidth = window.innerWidth;
const currentNavHeight = ref(parseInt(navHeight(), 10));

const props = defineProps({
  product: {
    type: Object,
    default: undefined,
    validator: (value) => {
      return value === null || typeof value === "object";
    },
  },
});

const product = ref(props.product);

if (product.value && window.innerWidth >= 640) {
  window.onscroll = () => window.scrollTo(0, 0);
}

store.$subscribe((_mutation, state) => {
  product.value = state.selectedProduct;
  if (product.value && window.innerWidth >= 640) {
    window.onscroll = () => window.scrollTo(0, 0);
  }
});

const productModal = ref(null);
const modalHeight = ref(null);
const modalWidth = ref(null);

onMounted(() => {
  if (productModal.value) {
    modalHeight.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 2 -
          currentNavHeight.value -
          productModal.value.getBoundingClientRect().height / 2 +
          "px"
        : 0;
    modalWidth.value =
      window.innerWidth / 2 -
      productModal.value.getBoundingClientRect().width / 2 +
      "px";
  }
});

watch(productModal, () => {
  if (productModal.value) {
    modalHeight.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 2 -
          currentNavHeight.value -
          productModal.value.getBoundingClientRect().height / 2 +
          "px"
        : 0;
    modalWidth.value =
      window.innerWidth / 2 -
      productModal.value.getBoundingClientRect().width / 2 +
      "px";
  }
});

const addToCart = (product) => {
  handleClose();
  store.addToCart({ ...product, quantity });
  store.cartToggle();
};

const handleClose = () => {
  store.setSelectedProduct(null);
  window.onscroll = null;
  router.push("/products");
};
</script>

<style scoped>
#modalBg {
  @apply fixed left-0 top-0 z-20 h-full w-full bg-theme-y;
}
#productModal {
  @apply absolute z-30 flex w-11/12 flex-col justify-center bg-white px-10 pb-10 pt-2 shadow-lg;
  @apply sm:container sm:grid sm:w-full sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-10 sm:py-10 sm:pl-10 sm:pr-20;
  left: v-bind(modalWidth);
  top: v-bind(modalHeight);
}
</style>
