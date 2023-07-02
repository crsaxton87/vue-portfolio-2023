/**
 * Retrieves all blog posts from the Firestore database.
 * @returns {Object} An object containing the posts array, error object, and load function.
 */

import { ref } from "vue";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchPosts = async () => {
    try {
      const queryRef = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc")
      );
      const { docs } = await getDocs(queryRef);
      posts.value = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, fetchPosts };
};

export default getPosts;
