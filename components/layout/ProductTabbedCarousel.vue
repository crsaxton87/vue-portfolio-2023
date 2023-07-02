<template>
  <main>
    <nav id="carousel-nav">
      <div
        v-for="(tab, index) in config"
        :key="index"
        :class="{ active: show === tab.name }"
        class="tabs"
      >
        <div class="tab" @click.prevent="handleNavClick(tab.name)">
          {{ tab.name }}
        </div>
      </div>
      <div id="nav-selection"></div>
    </nav>
    <section v-for="(tab, index) in config" :key="index">
      <div
        v-if="show === tab.name"
        :id="`section${index + 1}`"
        class="animate__animated animate__slideInLeft animate__faster product"
        :class="{ 'active-product': show === tab.name }"
      >
        <div
          v-for="(product, productIndex) in tab.products"
          :key="productIndex"
        >
          <NuxtLink :to="`/products/?product=${product.id}`">
            <ProductCard :product="product" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ProductCard from "../../components/products/ProductCard.vue";
import { titlesToProducts } from "../../composables/products/titlesToProducts";

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});

const config = await titlesToProducts(props.config);

const show = ref(config[0].name);

const handleNavClick = (name) => {
  const activeSection = document.getElementsByClassName("active-product")[0];
  activeSection.classList.remove("animate__slideInLeft");
  activeSection.classList.add("animate__slideOutRight");
  activeSection.classList.add("animate__fadeOut");
  setTimeout(() => {
    show.value = name;
  }, 300);
};
</script>

<style scoped>
main {
  @apply mx-auto my-0 w-full bg-white py-4 shadow-sm md:my-10 md:w-3/4 lg:w-11/12 2xl:w-2/3;
}
#carousel-nav {
  @apply relative mx-auto flex w-full flex-row justify-around border-b-2 border-b-gray-300 text-base lg:w-1/3 lg:text-lg;
}
#nav-selection {
  @apply absolute bottom-0 translate-y-0.5 transform border-b-2 border-b-gray-700;
}
.active {
  @apply border-b-2 border-b-gray-800;
}
.product {
  @apply mx-auto mt-4 grid w-11/12 grid-cols-1 gap-5 md:w-11/12 lg:grid-cols-3;
}
.tab {
  @apply cursor-pointer font-jost font-medium;
}
.tabs {
  @apply w-1/3 translate-y-0.5 transform text-center;
}
</style>
