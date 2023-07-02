/**
 * Get the current authenticated user from Firebase
 * @returns {Promise<{ user: Ref<null> }>} An object containing the current authenticated user ref
 */

import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const user = ref(null);

const getUser = async () => {
  await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (userSnapshot) => {
      user.value = userSnapshot;
      resolve();
      unsubscribe();
    });
  });
  return { user };
};

export default getUser;
