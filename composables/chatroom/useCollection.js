import { ref } from "vue";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/firebase/config";

const useCollection = (col) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    error.value = null;

    try {
      await addDoc(collection(db, col), doc);
    } catch (err) {
      // console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, addDocument };
};

export default useCollection;
