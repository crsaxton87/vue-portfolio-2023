export const productPrice = (price) => {
  price = price.toFixed(2);
  while (price.toString().split(".")[1].length < 2) {
    price += "0";
  }
  return `$${price}`;
};
