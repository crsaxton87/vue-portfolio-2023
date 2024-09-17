<template>
  <div class="videos-container">
    <div id="player"></div>
    <div class="chat-container">
      <ChatWindow class="chat-window" />
      <NewChatForm class="chat-form" />
    </div>
  </div>
</template>

<script setup>
import ChatWindow from "~/components/chatroom/ChatWindow.vue";
import NewChatForm from "~/components/chatroom/NewChatForm.vue";
import getUser from "~/composables/auth/getUser";
import { useStore } from "~/store";

const store = useStore();

const currentNavHeight = computed(() => parseInt(store.navHeight, 10));

definePageMeta({
  middleware: [
    /**
     * Middleware function to check user authentication.
     * @param {object} context - The Nuxt context object.
     */
    defineNuxtRouteMiddleware(async () => {
      const { user } = await getUser();
      if (!user.value) {
        return navigateTo("/userentry");
      }
    }),
  ],
});

/**
 * Lifecycle hooks to prevent scrolling on this page.
 */
onMounted(() => {
  if (window.innerWidth >= 1024) {
    document.body.classList.add("noscroll", "overflow-hidden");
    window.onscroll = () => window.scrollTo(0, 0);
    window.touchmove = () => window.scrollTo(0, 0);
  }
  createVideoPlayer();
});

onUnmounted(() => {
  if (window.innerWidth >= 1024) {
    document.body.classList.remove("noscroll", "overflow-hidden");
    window.onscroll = undefined;
    window.touchmove = null;
  }
});

/**
 * Create a script element to load the YouTube iframe API.
 */
const createVideoPlayer = () => {
  if (!window.YT) {
    // If the YouTube API is not loaded
    const iframeAPI = document.createElement("script");
    iframeAPI.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(iframeAPI, firstScriptTag);
  } else {
    // If the YouTube API is already loaded
    window.onYouTubeIframeAPIReady();
  }
};

watch(
  () => store.navHeight,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== 0) {
      handleWindowHeight();
    }
  }
);

const windowHeight = ref(0);

const handleWindowHeight = () => {
  windowHeight.value =
    window.innerWidth >= 1024
      ? window.innerHeight - currentNavHeight.value
      : (window.innerWidth / 16) * 9;
};
handleWindowHeight();

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    id: "player",
    height: windowHeight.value,
    width: "100%",
    videoId: "QdEVb1rheRE",
    playerVars: {
      playsinline: 1,
      frameborder: 0,
      autoplay: 1,
      mute: 1,
      controls: 1,
      modestbranding: 1,
    },
    events: {
      onReady: (event) => event.target.playVideo(),
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      },
    },
  });
};

/**
 * Flag to track if the video has finished playing.
 * @type {boolean}
 */
let done = false;
</script>

<style scoped>
body.noscroll::-webkit-scrollbar {
  display: none;
}
#player {
  z-index: 10;
}
.chat-container {
  @apply flex flex-col lg:absolute lg:right-0 lg:w-1/4;
}
.chat-form {
  @apply border border-y-4 border-theme-y lg:border-0 lg:border-y-0;
}
.chat-height {
  top: calc(100vh - v-bind(currentNavHeight));
}
.chat-window {
  @apply border border-t-4 border-theme-y lg:border-0 lg:border-t-0;
}
.noscroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 100vh !important;
}
.videos-container {
  @apply flex flex-col;
}
</style>
