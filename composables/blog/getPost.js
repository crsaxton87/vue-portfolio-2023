/**
 * Retrieves a single blog post from a Firebase Cloud Firestore collection.
 * @param {string} id - The ID of the document to retrieve.
 * @returns {object} An object containing reactive references to the document,
 *    any errors encountered during retrieval, and a function to retrieve the
 *    document.
 */

import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchPost = async () => {
    try {
      const res = await getDoc(doc(db, "posts", id));

      post.value = { ...res?.data(), id: res?.id };

      if (!res?.exists) {
        throw new Error("That post does not exist");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, fetchPost };
};

export default getPost;
