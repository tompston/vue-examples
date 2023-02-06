<script setup lang="ts">
import CodeBlock from "@/components/global/CodeBlock.vue";
import ExampleBlock from "@/components/global/ExampleBlock.vue";
import { links } from "@/assets/ts";
import Parent from "./Parent.vue";

const code = `
import { ref } from "vue";`;

const _parent_code = `
import Child from "./Child.vue";
import Button from "./Button.vue";`;
const _parent_tmpl = `
<div class="border border-black">
  <h3>Parent component</h3>

  <Child header="Child component">
    <template v-slot:custom_component>
      <Button text="Custom component passed as a prop to a child" />
      <Button text="you can pass either one, or many components here" />
    </template>
  </Child>
</div>`;

const _child_code = `
defineProps<{
  header: string;
}>();`;
const _child_tmpl = `
<div class="border-1-2 m-2">
  <h5>{{ header }}</h5>

  <slot name="custom_component" />
</div>`;

const _button_code = `
defineProps<{
  text: string;
}>();`;
const _button_tmpl = `
<button class="p-3 fs-10 fw-600 bg-gray-600 text-white m-2">{{ text }}</button>`;
</script>

<template>
  <ExampleBlock :idx="4" :exampleName="links[3].label">
    <template v-slot:explanation>
      <div>
        Example that shows how to pass multiple elements to an existing component, using <code
          class="code__1">slots</code>.

        <br />
        <br />

        Link to the official
        <a href="https://vuejs.org/guide/components/slots.html" target="_blank"
          rel="noopener noreferrer">explanation</a>.
      </div>
    </template>

    <template v-slot:code>
      <CodeBlock filename="Parent.vue" :code="_parent_code" :template="_parent_tmpl" />
      <CodeBlock filename="Child.vue" :code="_child_code" :template="_child_tmpl" />
      <CodeBlock filename="Button.vue" :code="_button_code" :template="_button_tmpl" />
    </template>

    <template v-slot:_component>
      <Parent />
    </template>
  </ExampleBlock>
</template>
