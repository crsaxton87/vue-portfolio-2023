import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getProduct = (id) => {
  const product = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await getDoc(doc(db, "products", id));

      if (!res.exists) {
        throw new Error("That post does not exist");
      }

      product.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { product, error, load };
};

export default getProduct;
