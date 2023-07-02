/**
 * A composable function for handling user signup using Firebase authentication.
 *
 * @returns {Object} An object containing a ref to an error message and a signup function.
 * @property {Ref<String|null>} error - A ref to the error message.
 * @property {Function} signup - A function that takes email, password, and displayName as arguments and performs user signup.
 */

import { ref } from "vue";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const useSignup = () => {
  const error = ref(null);

  const signup = async (email, password, displayName) => {
    error.value = null;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not complete the signup");
      }
      await updateProfile(auth.currentUser, { displayName });

      return res;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { error, signup };
};

export default useSignup;
