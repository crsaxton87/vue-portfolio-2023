<template>
  <section class="splash-columns grid grid-cols-1 lg:grid-cols-2">
    <div
      class="panel relative grid grid-cols-1 justify-items-end"
      :style="`background-image:url(${props.config.left.img})`"
    >
      <aside class="splash-text splash-text-left">
        <h3>{{ props.config.left.textTop }}</h3>
        <h2>{{ props.config.left.textBottom }}</h2>
      </aside>
    </div>
    <div
      class="panel relative grid grid-cols-1 justify-items-start"
      :style="`background-image:url(${props.config.right.img})`"
    >
      <aside class="splash-text splash-text-right">
        <h3>{{ props.config.right.textTop }}</h3>
        <h2>{{ props.config.right.textBottom }}</h2>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { navHeight } from "~/composables/layout/navHeight";
const currentNavHeight = ref(navHeight());

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
h2 {
  @apply text-5xl;
}
h3 {
  @apply text-4xl;
}
.panel {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.splash-columns {
  height: calc(100vh - v-bind(currentNavHeight));
}
.splash-text {
  @apply absolute font-oliver text-3xl text-theme-r md:text-5xl;
}
.splash-text-left {
  @apply mr-3 text-right md:mr-10;
  top: 80%;
}
.splash-text-right {
  @apply ml-3 text-left md:ml-10;
  top: 27%;
}
@media (max-width: 1536px) {
  .splash-text-left {
    top: 87%;
  }
  .splash-text-right {
    top: 15%;
  }
}
@media (max-width: 1024px) {
  .splash-text-left {
    top: 5%;
  }
  .splash-text-right {
    top: 10%;
  }
}
</style>
