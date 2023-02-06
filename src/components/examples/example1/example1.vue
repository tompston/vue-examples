<script setup lang="ts">
import CodeBlock from "@/components/global/CodeBlock.vue";
import ExampleBlock from "@/components/global/ExampleBlock.vue";
import Parent from "./Parent.vue";
import { links } from "@/assets/ts";

const code = `
import { ref } from "vue";

/**
 * @param e     $event
 * @param func  function that converts string to a valid value
 * @returns     output string of the passed in functions
 * @example     @input="my_ref_value = ConvertToValidValue($event, removedWhitespace)"
 */
function ConvertToValidValue(e: any, func: Function) {
  return func(e.target.value);
}

function removedWhitespace(x: string): string {
  return x.replace(/\s/g, "");
}

function Capitalized(x: string): string {
  return x.toUpperCase();
}

function Capitalized_RemovedWhitespace(x: string): string {
  return removedWhitespace(x.toUpperCase());
}

const user_input = ref("");`;

const template = `
<input
  type="text"
  class="input__1"
  placeholder="user_input"
  v-model="user_input"
  @input="user_input = ConvertToValidValue($event, removedWhitespace)"
/>

<input
  type="text"
  class="input__1"
  placeholder="user_input"
  v-model="user_input"
  @input="user_input = ConvertToValidValue($event, Capitalized)"
/>


<input
  type="text"
  class="input__1"
  placeholder="user_input"
  v-model="user_input"
  @input="user_input = ConvertToValidValue($event, Capitalized_RemovedWhitespace)"
/>`;

</script>

<template>
  <!--  -->
  <ExampleBlock :idx="1" :exampleName="links[0].label">
    <template v-slot:explanation>
      <div>
        Let's say we have an input field, that is binded to a
        <code class="code__1">ref</code> variable and we want to change the
        input value to escape unwanted characters. An easy way to do this is by
        passing the event target value through a reusable utility function that
        converts and returns a new string, once the user changes the input. We
        can convert the input by using either regex patterns or the built in JS
        functions. If we create multiple util functions that return a new
        string, we can stack them to create even more custom input validation.

        <br />
        <br />

        You can find more examples of util functions that convert input
        <a
          href="https://github.com/tompston/gomarvin-editor/blob/main/src/assets/ts/utils/convert.ts"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >.
      </div>
    </template>

    <!--  -->
    <template v-slot:code>
      <CodeBlock :code="code" filename="Parent.vue" :template="template" />
    </template>

    <!--  -->
    <template v-slot:_component>
      <Parent />
    </template>
  </ExampleBlock>
</template>
