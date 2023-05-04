import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const user = ref(null);

const getUser = async () => {
  try {
    await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (_user) => {
        user.value = _user;
        // if (user.value) {
        //   console.log("user value present");
        // } else {
        //   console.log("user value not present");
        // }
        resolve();
        unsubscribe();
      });
    });
    return { user };
  } catch (error) {
    throw new Error("Error getting user");
  }
};

export default getUser;
