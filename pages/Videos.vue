<template>
  <div class="flex flex-col">
    <div id="player"></div>
    <div class="flex flex-col lg:absolute lg:right-0 lg:w-1/4">
      <ChatWindow
        class="border border-t-4 border-theme-y lg:border-0 lg:border-t-0"
      />
      <NewChatForm
        class="border border-y-4 border-theme-y lg:border-0 lg:border-y-0"
      />
    </div>
  </div>
</template>

<script setup>
import { navHeight } from "~/composables/layout/navHeight";
import ChatWindow from "~/components/chatroom/ChatWindow.vue";
import NewChatForm from "~/components/chatroom/NewChatForm.vue";
import getUser from "~/composables/auth/getUser";

let player;
const currentNavHeight = ref(parseInt(navHeight(), 10));

definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(async () => {
      const { user } = await getUser();
      if (!user.value) {
        return navigateTo("/userentry");
      }
    }),
  ],
});

onMounted(() => {
  if (window.innerWidth >= 1024) {
    document.body.classList.add("noscroll");
    document.body.classList.add("overflow-hidden");
    window.onscroll = () => window.scrollTo(0, 0);
    window.touchmove = () => window.scrollTo(0, 0);
  }
});

onUnmounted(() => {
  if (window.innerWidth >= 1024) {
    document.body.classList.remove("noscroll");
    document.body.classList.remove("overflow-hidden");
    window.onscroll = null;
    window.touchmove = null;
  }
});

const iframeAPI = document.createElement("script");
iframeAPI.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(iframeAPI, firstScriptTag);

const windowHeight =
  window.innerWidth >= 1024
    ? window.innerHeight - currentNavHeight.value
    : (window.innerWidth / 16) * 9;

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    id: "player",
    height: windowHeight,
    width: "100%",
    videoId: "_nGmnWSzEvM",
    playerVars: {
      playsinline: 1,
      frameborder: 0,
      autoplay: 1,
      mute: 1,
      controls: 1,
      modestbranding: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};

function onPlayerReady(event) {
  event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
</script>

<style>
body.noscroll::-webkit-scrollbar {
  display: none;
}
#player {
  z-index: 10;
}
.chat-height {
  top: calc(100vh - v-bind(navHeight()));
}
.noscroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 100vh !important;
}
</style>
