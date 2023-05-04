import getUser from "@/composables/chatroom/getUser";
import { useStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  localStorage.setItem("currentRoute", to.name as string);
  localStorage.setItem("prevRoute", from.name as string);

  const store = useStore();

  const loginCheck = async () => {
    const { user } = await getUser();

    if (user.value) {
      store.logIn();
    } else {
      store.logOut();
    }
  };

  loginCheck();
});
