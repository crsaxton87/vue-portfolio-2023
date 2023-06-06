import getProducts from "../../composables/products/getProducts";

const { products, load } = getProducts();

await load();

export const titlesToProducts = (config) => {
  for (const tab of config) {
    tab.products = tab.titles.map((item) => {
      return products.value.filter((product) => product.title === item)[0];
    });
  }
  return config;
};
