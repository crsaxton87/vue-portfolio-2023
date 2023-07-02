<template>
  <div v-if="product">
    <div
      id="productModal"
      ref="productModal"
      class="animate__animated animate__slideInDown"
    >
      <div class="image-container">
        <img
          :src="`/img/snoods/${product.img}a.jpg`"
          :alt="`${product.title} image`"
          class="product-image"
        />
        <HeroIcons
          v-show="winWidth < 640"
          icon="x"
          class="icon-close-mobile"
          @click="handleClose"
        />
      </div>
      <div>
        <div class="title-bar">
          <h2 class="text-2xl sm:text-4xl">{{ product.title }}</h2>
          <HeroIcons
            v-show="winWidth >= 640"
            icon="x"
            class="icon-close-desktop"
            @click="handleClose"
          />
        </div>
        <div class="description-bar">
          <h3 class="mb-2 font-bold">Product description:</h3>
          <p class="text-xl">{{ productPrice(product.price) }}</p>
        </div>
        <p class="product-description">
          {{ product.description }}
        </p>
        <div class="quantity-bar">
          <div class="quantity">
            <label class="hidden sm:block">Quantity:</label>
            <div class="quantity-icons">
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
      class="animate__animated animate__slideInDown modalBg"
      @click="handleClose"
    ></div>
  </div>
</template>

<script setup>
import HeroIcons from "../HeroIcons.vue";
import { productPrice } from "../../composables/products/productPrice";
import { useStore } from "~/store";

const router = useRouter();
const store = useStore();
const quantity = ref(1);

const winWidth = window.innerWidth;
const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

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

const disableScrolling = () => {
  window.onscroll = () => window.scrollTo(0, 0);
};

if (product.value && window.innerWidth >= 1024) {
  disableScrolling();
}

/**
 * Subscribe to store changes and update the product value accordingly.
 * If the product value is truthy and the window width is greater than or equal to 1024, disable scrolling.
 */
store.$subscribe((_mutation, state) => {
  product.value = state.selectedProduct;
  if (product.value && window.innerWidth >= 1024) {
    disableScrolling();
  }
});

const productModal = ref(null);
const modalTop = ref(null);
const modalLeft = ref(null);

onMounted(() => {
  if (window.innerWidth >= 1024) {
    document.body.classList.add("overflow-x-hidden");
  }
  if (productModal.value) {
    modalTop.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 2 -
          currentNavHeight.value -
          productModal.value.getBoundingClientRect().height / 2 +
          "px"
        : 0;
    modalLeft.value =
      window.innerWidth / 2 -
      productModal.value.getBoundingClientRect().width / 2 +
      "px";
  }
});
onUnmounted(() => {
  document.body.classList.remove("overflow-x-hidden");
});

// Watch for changes in the product modal and update the modal top and left positions accordingly.
watch(productModal, () => {
  if (productModal.value) {
    modalTop.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 2 -
          currentNavHeight.value -
          productModal.value.getBoundingClientRect().height / 2 +
          "px"
        : parseInt(currentNavHeight.value, 10) + "px";
    modalLeft.value =
      window.innerWidth / 2 -
      productModal.value.getBoundingClientRect().width / 2 +
      "px";
  }
});

const addToCart = (product) => {
  handleClose();
  window.scrollTo(0, 0);
  store.addToCart({ ...product, quantity });
  store.cartToggle();
};

const handleClose = () => {
  document.body.classList.remove("overflow-y-hidden");
  store.setSelectedProduct(null);
  window.onscroll = undefined;
  router.push("/products");
};
</script>

<style scoped>
#productModal {
  @apply absolute z-30 flex w-11/12 flex-col justify-center bg-white px-10 pb-10 pt-2 shadow-lg;
  @apply sm:container sm:grid sm:w-full sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-10 sm:py-10 sm:pl-10 sm:pr-20;
  left: v-bind(modalLeft);
  top: v-bind(modalTop);
}
.description-bar {
  @apply flex items-baseline justify-between;
}
.icon-close-desktop {
  @apply hover:cursor-pointer hover:text-theme-r;
}
.icon-close-mobile {
  @apply absolute right-10 top-10 scale-150 transform hover:cursor-pointer hover:text-theme-r;
}
.image-container {
  @apply max-h-[30vh] sm:max-h-full;
}
.modalBg {
  @apply fixed left-0 top-0 z-20 h-full w-full bg-theme-y;
}
.product-description {
  @apply mb-7 whitespace-pre-wrap text-sm sm:text-base;
}
.product-image {
  @apply mx-auto max-h-[30vh] sm:max-h-full;
}
.quantity {
  @apply flex items-center;
}
.quantity-bar {
  @apply flex items-center justify-between;
}
.quantity-icons {
  @apply flex items-center sm:ml-4;
}
.title-bar {
  @apply my-4 flex items-center justify-between border-b-2 sm:mt-0;
}
</style>
