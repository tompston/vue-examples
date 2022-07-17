<script setup lang="ts">
import { ref } from "vue";

/**
 * @param {number} time in ms
 * @example const pause = await fakePause(1500)
 */
function fakePause(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, time);
  });
}

const popup_is_shown = ref(false);

// toggle popup_is_shown boolean for x seconds
async function showPopup() {
  popup_is_shown.value = true;
  const pause = await fakePause(3200);
  popup_is_shown.value = false;
}
</script>

<template>
  <code class="input__1_code"> popup_is_shown :: {{ popup_is_shown }} </code>
  <button class="button__1" @click="showPopup()">SHOW POPUP</button>

  <transition name="fade">
    <div v-if="popup_is_shown">
      <div class="fixed inset-0 top-0">
        <div class="bg-red-600 p-4 text-white fw-600">Popup With Something</div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
