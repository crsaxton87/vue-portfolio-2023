import { defineStore } from "pinia";

const cookie = useCookie("cart", {
  sameSite: true,
});

export const useStore = defineStore({
  id: "store",
  state: () => ({
    loggedIn: false,
    cart: cookie.value ? cookie.value : [],
    cartVisible: false,
    currentUser: null,
    selectedProduct: null,
  }),
  getters: {
    cartSize() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartTotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    logIn() {
      this.loggedIn = true;
    },
    logOut() {
      this.loggedIn = false;
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += product.quantity.value;
      } else {
        const { title, id, quantity, price } = product;
        this.cart.push({ title, id, quantity: quantity.value, price });
      }
      cookie.value = JSON.stringify(this.cart);
    },
    removeFromCart(id) {
      const item = this.cart.find((item) => item.id === id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cart.splice(this.cart.indexOf(item), 1);
      }
      cookie.value = JSON.stringify(this.cart);
    },
    cartToggle() {
      this.cartVisible = !this.cartVisible;
    },
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
  },
});
