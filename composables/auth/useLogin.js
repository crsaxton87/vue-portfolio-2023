/**
 * Log in a user with the provided email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<Object|undefined>} - The authentication response object or undefined if an error occurs.
 */

import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const useLogin = () => {
  const error = ref(null);

  const login = async (email, password) => {
    error.value = null;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      error.value = null;
      return res;
    } catch (err) {
      error.value = "Incorrect login credentials";
    }
  };
  return { error, login };
};

export default useLogin;
