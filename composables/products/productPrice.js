/**
 * Formats a product price to include two decimal places and a currency symbol.
 * @param {number} price - The price of the product.
 * @returns {string} The formatted price with a currency symbol.
 */

export const productPrice = (price) => {
  const formattedPrice = price.toFixed(2).padEnd(4, "0");
  return `$${formattedPrice}`;
};
