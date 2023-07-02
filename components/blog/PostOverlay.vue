<template>
  <div v-if="postmode">
    <div
      ref="postModal"
      class="animate__animated animate__slideInDown postModal"
    >
      <HeroIcons icon="x" class="close-icon" @click="handleClose" />
      <div class="absolute-center w-11/12">
        <form class="postForms" @submit.prevent="handleSubmit">
          <div class="mb-4">
            <h3>Title</h3>
            <input
              v-model="title"
              class="title"
              type="text"
              placeholder="Snood Post"
              required
            />
          </div>
          <div class="mb-4">
            <h3>Content</h3>
            <textarea
              v-model="body"
              :style="{
                resize: winWidth < 1024 ? 'none' : 'vertical',
              }"
              class="content"
              placeholder="Snood Content"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <h3>Tags <span class="text-sm">(press enter to add tag)</span></h3>
            <input
              v-model="tagInput"
              class="tag-input"
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
      class="animate__animated animate__slideInDown modalBg"
      @click="handleClose"
    ></div>
  </div>
</template>

<script setup>
import { doc, setDoc, collection } from "@firebase/firestore";
import HeroIcons from "../HeroIcons.vue";
import { db, timestamp } from "@/firebase/config";
import getUser from "~/composables/auth/getUser";
import { useStore } from "~/store";

const store = useStore();
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
const contentHeight = ref(null);
const title = ref("");
const body = ref("");
const tagInput = ref("");
const tags = ref([]);
const currentNavHeight = computed(() => store.navHeight);
const winWidth = ref(window.innerWidth);

onUnmounted(() => {
  window.onscroll = undefined;
});

watch(postModal, () => {
  // Scroll to top
  window.scrollTo(0, 0);

  // If the modal is open and the screen is wide
  if (postmode.value && window.innerWidth >= 1024) {
    // Prevent scrolling
    window.onscroll = () => window.scrollTo(0, 0);
  }

  // If the modal is open
  if (postModal.value) {
    // Set the modal top position
    modalTop.value = parseInt(currentNavHeight.value, 10) + 20 + "px";

    // Set the modal left position
    modalLeft.value =
      window.innerWidth / 2 -
      postModal.value.getBoundingClientRect().width / 2 +
      "px";

    // Set the modal height
    modalHeight.value =
      window.innerWidth >= 1024
        ? window.innerHeight -
          parseInt(currentNavHeight.value, 10) -
          window.innerHeight / 10 +
          "px"
        : window.innerHeight - parseInt(currentNavHeight.value, 10) - 40 + "px";

    // Set the content height
    setTimeout(() => {
      contentHeight.value =
        postModal.value.getBoundingClientRect().height > 785
          ? postModal.value.getBoundingClientRect().height / 2 + "px"
          : postModal.value.getBoundingClientRect().height / 3 + "px";
    }, 1);
  }
});

const handleClose = () => {
  postmode.value = false;
  // Remove the onscroll event listener
  window.onscroll = undefined;
  // Emit a close event
  emit("close-post-modal");
};

const handleKeydown = () => {
  if (!tags.value.includes(tagInput.value)) {
    // Remove all whitespace from input value
    tagInput.value = tagInput.value.replace(/\s/, "");
    // Add input value to tags value
    tags.value.push(tagInput.value);
  }
  // Clear input value
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
    // Create a new document reference
    const docReference = doc(collection(db, "posts"));
    // Write the post to the database
    await setDoc(docReference, post);
    // Close the modal
    handleClose();
    // Navigate to the post page
    navigateTo({ path: `/blog/${docReference.id}` });
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
.content {
  min-height: v-bind(contentHeight);
  @apply w-full p-4;
}
.close-icon {
  @apply absolute right-4 top-4 scale-150 transform hover:cursor-pointer hover:text-theme-r lg:right-10 lg:top-10;
}
.modalBg {
  @apply fixed left-0 top-0 z-30 h-full w-full bg-theme-y;
}
.postModal {
  @apply absolute z-40 w-11/12 justify-center bg-white p-5 pt-10 shadow-lg lg:px-10 lg:pb-10 lg:pt-2;
  @apply lg:container lg:w-full lg:p-10;
  left: v-bind(modalLeft);
  top: v-bind(modalTop);
  height: v-bind(modalHeight);
}
.postForms {
  @apply flex h-full w-full flex-col justify-center;
}
.tag-input {
  @apply mb-4 h-10 w-full px-4;
}
.title {
  @apply h-10 w-full px-4;
}
</style>
