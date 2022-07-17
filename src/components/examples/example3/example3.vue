<script setup lang="ts">
import CodeBlock from "@/components/global/CodeBlock.vue";
import ExampleBlock from "@/components/global/ExampleBlock.vue";
import { links } from "@/assets/ts";
import Parent from "./Parent.vue";

const code = `
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
`;

const template = `
<button id="theme-switcher" ref="themeSwitch" @click="switchTheme()" class="button__1">
  Switch Theme
</button>
`;
</script>

<template>
  <!--  -->
  <ExampleBlock :idx="3" :exampleName="links[2].label">
    <template v-slot:explanation>
      Darkmode is made into this rocket science, when it shouldn't be. I wrote a mini
      article on
      <a
        href="https://tompston.pages.dev/writing/2022-05-14-writing-css-effectively"
        target="_blank"
        rel="noopener noreferrer"
        >writing CSS more effectively</a
      >, which showed how to implement darkmode in an easy way, using
      <code class="code__1">:root</code> variables.

      <br />
      <br />
      Credits to
      <a
        href="https://tutorial.tips/how-to-create-theme-switcher-in-css-and-javascript/"
        target="_blank"
        rel="noopener noreferrer"
        >this</a
      >
    </template>

    <template v-slot:code>
      <CodeBlock :code="code" :template="template" filename="Parent.vue" />
    </template>

    <template v-slot:_component>
      <Parent />
    </template>
  </ExampleBlock>
</template>
