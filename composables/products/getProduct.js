/**
 * Fetches a product from Firebase Firestore based on the provided ID.
 * @param {string} id - The ID of the product.
 * @returns {object} - An object containing the fetched product, error, and a function to load the product.
 */

import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getProduct = (id) => {
  const product = ref(null);
  const error = ref(null);

  const fetchProduct = async () => {
    try {
      const docRef = doc(db, "products", id);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        throw new Error("That product does not exist");
      }

      product.value = { ...docSnapshot.data(), id: docSnapshot.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { product, error, fetchProduct };
};

export default getProduct;
