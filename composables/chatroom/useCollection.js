/**
 * Composable for interacting with the chat Firestore collection.
 * @param {string} collectionName - The name of the collection in Firestore.
 * @returns {object} - An object containing the error and addDocument functions.
 */

import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/firebase/config";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    error.value = null;

    try {
      await addDoc(collection(db, collectionName), doc);
    } catch (err) {
      error.value = "Could not send the message";
    }
  };

  return { error, addDocument };
};

export default useCollection;
