/**
 * Handles user logout using Firebase authentication.
 * @returns {Object} Object containing the logout function and error ref.
 */

import { ref } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const useLogout = () => {
  const error = ref(null);

  const logout = async () => {
    error.value = null;
    try {
      await signOut(auth);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { logout, error };
};

export default useLogout;
