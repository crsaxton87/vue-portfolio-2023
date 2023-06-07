<!-- Might need to set postmode in the store -->

<template>
  <div v-if="postmode">
    <div
      id="postModal"
      ref="postModal"
      class="animate__animated animate__slideInDown"
    >
      <HeroIcons
        icon="x"
        class="absolute right-4 top-4 scale-150 transform hover:cursor-pointer hover:text-theme-r lg:right-10 lg:top-10"
        @click="handleClose"
      />
      <div class="w-full">
        <form
          class="grid grid-rows-[6rem_14rem_7rem_3rem] items-center lg:grid-rows-[6rem_24rem_7rem_3rem]"
          @submit.prevent="handleSubmit"
        >
          <div class="mb-4">
            <h3>Title</h3>
            <input
              v-model="title"
              class="h-10 w-full px-4"
              type="text"
              placeholder="Snood Post"
              required
            />
          </div>
          <div class="mb-4">
            <h3>Content</h3>
            <textarea
              v-model="body"
              class="min-h-[200px] w-full p-4"
              placeholder="Snood Content"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <h3>Tags <span class="text-sm">(press enter to add tag)</span></h3>
            <input
              v-model="tagInput"
              class="mb-4 h-10 w-full px-4"
              type="text"
              placeholder="Snood Tags"
              @keydown.enter.prevent="handleKeydown"
              @keydown.tab.prevent="handleKeydown"
              @keydown.,.prevent="handleKeydown"
            />
            <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
            <div v-if="error">{{ error }}</div>
          </div>
          <div class="mx-auto">
            <button class="button mt-2">Add Post</button>
          </div>
        </form>
      </div>
    </div>
    <div
      id="modalBg"
      class="animate__animated animate__slideInDown"
      @click="handleClose"
    ></div>
  </div>
</template>

<script setup>
import { doc, setDoc, collection } from "@firebase/firestore";
import HeroIcons from "../HeroIcons.vue";
import { db, timestamp } from "@/firebase/config";
import getUser from "~/composables/auth/getUser";
import { navHeight } from "~/composables/layout/navHeight";

const error = ref(null);
const emit = defineEmits(["close-post-modal"]);
const props = defineProps({
  postmode: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const postmode = computed(() => {
  return props.postmode;
});

const { user } = await getUser();

const postModal = ref(null);
const modalTop = ref(null);
const modalLeft = ref(null);
const modalHeight = ref(null);
const title = ref("");
const body = ref("");
const tagInput = ref("");
const tags = ref([]);
const currentNavHeight = ref(navHeight());

watch(postModal, () => {
  window.scrollTo(0, 0);
  if (postmode.value && window.innerWidth >= 640) {
    window.onscroll = () => window.scrollTo(0, 0);
  }
  if (postModal.value) {
    modalTop.value =
      window.innerWidth >= 1024
        ? (window.innerHeight + parseInt(currentNavHeight.value, 10)) / 2 -
          postModal.value.getBoundingClientRect().height / 2 -
          20 +
          "px"
        : parseInt(currentNavHeight.value, 10) + 20 + "px";
    modalLeft.value =
      window.innerWidth / 2 -
      postModal.value.getBoundingClientRect().width / 2 +
      "px";
    modalHeight.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 3
        : window.innerHeight - parseInt(currentNavHeight.value, 10) - 40 + "px";
  }
});

const handleClose = () => {
  postmode.value = false;
  window.onscroll = null;
  emit("close-post-modal");
};

const handleKeydown = () => {
  if (!tags.value.includes(tagInput.value)) {
    tagInput.value = tagInput.value.replace(/\s/, "");
    tags.value.push(tagInput.value);
  }
  tagInput.value = "";
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp(),
    createdBy: user.value.email,
  };

  try {
    const docReference = doc(collection(db, "posts"));
    await setDoc(docReference, post);
    handleClose();
    navigateTo({ path: `/details/${docReference.id}` });
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style scoped>
input,
textarea {
  @apply shadow-inner;
}
h3 {
  @apply font-jost;
}
#modalBg {
  @apply fixed left-0 top-0 z-30 h-full w-full bg-theme-y;
}
#postModal {
  @apply absolute z-40 flex w-11/12 flex-col justify-center bg-white p-5 pt-10 shadow-lg lg:px-10 lg:pb-10 lg:pt-2;
  @apply lg:container lg:w-full lg:items-center lg:p-10;
  left: v-bind(modalLeft);
  top: v-bind(modalTop);
  height: v-bind(modalHeight);
}
</style>
