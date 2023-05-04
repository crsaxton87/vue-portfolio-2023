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
      const results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      // console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data:" + err.message;
    }
  );

  // Unsubscribe from collection when watcher is stopped (component unmounted)
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
