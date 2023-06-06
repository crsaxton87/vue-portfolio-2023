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
        class="absolute right-10 top-10 scale-150 transform hover:cursor-pointer hover:text-theme-r"
        @click="handleClose"
      />
      <div class="w-full">
        <form
          class="grid sm:grid-rows-[6rem_24rem_7rem_3rem]"
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
              class="h-80 min-h-[300px] w-full p-4"
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
import { addDoc, collection } from "@firebase/firestore";
import HeroIcons from "../HeroIcons.vue";
import { db, timestamp } from "@/firebase/config";
import getUser from "~/composables/auth/getUser";

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

watch(postmode, () => {
  console.log("postmode.value", postmode.value);
});

if (postmode.value && window.innerWidth >= 640) {
  window.onscroll = () => window.scrollTo(0, 0);
}

const { user } = await getUser();

const postModal = ref(null);
const modalHeight = ref(null);
const modalWidth = ref(null);
const title = ref("");
const body = ref("");
const tagInput = ref("");
const tags = ref([]);

watch(postModal, () => {
  if (postModal.value) {
    modalHeight.value =
      window.innerWidth >= 1024
        ? window.innerHeight / 2 -
          postModal.value.getBoundingClientRect().height / 2 +
          "px"
        : 0;
    modalWidth.value =
      window.innerWidth / 2 -
      postModal.value.getBoundingClientRect().width / 2 +
      "px";
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
    const colRef = collection(db, "posts");
    await addDoc(colRef, post);
    if (!err) {
    handleClose();
    navigateTo({ path: "/" });
  }
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
  @apply fixed left-0 top-0 z-20 h-full w-full bg-theme-y;
}
#postModal {
  @apply absolute z-30 flex w-11/12 flex-col justify-center bg-white px-10 pb-10 pt-2 shadow-lg;
  @apply lg:container lg:w-full lg:items-center lg:p-10;
  left: v-bind(modalWidth);
  top: v-bind(modalHeight);
}
</style>
