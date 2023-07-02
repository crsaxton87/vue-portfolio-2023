import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    cart: useCookie("cart", { sameSite: true }).value || [],
    cartVisible: false,
    currentUser: null,
    loggedIn: false,
    navHeight: 0,
    selectedProduct: null,
  }),
  getters: {
    cartSize: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
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
    setNavHeight(height) {
      this.navHeight = height;
    },
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += product.quantity.value;
      } else {
        const { title, id, quantity, price } = product;
        this.cart.push({ title, id, quantity: quantity.value, price });
      }
      this.updateCookie();
    },
    removeFromCart(id) {
      const itemIndex = this.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const item = this.cart[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart.splice(itemIndex, 1);
        }
        this.updateCookie();
      }
    },
    cartToggle() {
      this.cartVisible = !this.cartVisible;
    },
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
    updateCookie() {
      useCookie("cart", { sameSite: true }).value = JSON.stringify(this.cart);
    },
  },
});
