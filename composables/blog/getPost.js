import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await getDoc(doc(db, "posts", id));

      if (!res.exists) {
        throw new Error("That post does not exist");
      }

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
