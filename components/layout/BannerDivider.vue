<template>
  <div id="banner" :style="`background-image: url(${config.img});`"></div>
</template>

<script setup>
const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});

const config = ref(props.config);
</script>

<style scoped>
#banner {
  @apply h-[200px] w-full bg-cover bg-center sm:h-[250px] xl:h-[400px];
}
</style>
