import getProducts from "../../composables/products/getProducts";

const { products, load } = getProducts();

export const titlesToProducts = async (config) => {
  await load();
  for (const tab of config) {
    tab.products = tab.titles.map((item) => {
      return products.value.filter((product) => product.title === item)[0];
    });
  }
  return config;
};
