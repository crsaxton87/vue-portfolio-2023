/**
 * Retrieves a collection of chat message documents from Firestore and provides reactivity.
 *
 * @param {string} col - The name of the collection to retrieve.
 * @returns {Object} - An object containing the reactive `documents` array and the `error` value.
 */

import { ref, watchEffect } from "vue";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

const getCollection = (col) => {
  const documents = ref(null);
  const error = ref(null);

  const collectionRef = query(collection(db, col), orderBy("createdAt", "asc"));

  const unsub = onSnapshot(
    collectionRef,
    (snap) => {
      const results = snap.docs
        .map((doc) => doc.data().createdAt && { ...doc.data(), id: doc.id })
        .filter(Boolean);
      documents.value = results;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      error.value = "Could not fetch data:" + err.message;
    }
  );

  /**
   * Unsubscribe from the collection when the watcher is stopped (component unmounted).
   */
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
