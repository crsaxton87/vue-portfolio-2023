/**
 * Maps titles to corresponding product data.
 * @param {Array} config - The configuration array containing tabs and titles.
 * @returns {Promise<Array>} The updated configuration array with mapped products.
 */

import getProducts from "../../composables/products/getProducts";

const { products, fetchProducts } = getProducts();

export const titlesToProducts = async (config) => {
  await fetchProducts();

  for (const tab of config) {
    tab.products = tab.titles.map((item) =>
      products.value.find((product) => product.title === item)
    );
  }
  return config;
};
