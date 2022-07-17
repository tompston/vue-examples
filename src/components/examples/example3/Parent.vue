<script setup lang="ts">
import { ref, onMounted } from "vue";
const currentTheme = ref(localStorage.getItem("theme"));

function switchTheme() {
  const toggleValue = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", toggleValue);
  setTheme();
  currentTheme.value = toggleValue;
}

function setTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = currentTheme;
}
onMounted(() => {
  setTheme();
});
</script>

<template>
  <code class="input__1_code">currentTheme ::{{ currentTheme }}</code>

  <button id="theme-switcher" ref="themeSwitch" @click="switchTheme()" class="button__1">
    Switch Theme
  </button>
</template>
