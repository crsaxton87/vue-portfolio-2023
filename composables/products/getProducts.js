/**
 * Fetches a list of products from the Firestore database.
 * @returns {Object} An object containing the fetched products, error, and load function.
 */

import { ref } from "vue";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/config";

const getProducts = () => {
  const products = ref([]);
  const error = ref(null);

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const docsSnapshot = await getDocs(q);
      products.value = docsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (err) {
      error.value = err.message;
    }
  };

  return { products, error, fetchProducts };
};

export default getProducts;
