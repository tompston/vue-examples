<script setup lang="ts">
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

const user_input = ref("");
</script>

<template>
  <div class="grid">
    <label for="user_input" class="input__1_label">removedWhitespace user_input</label>
    <input
      type="text"
      class="input__1"
      placeholder="user_input"
      v-model="user_input"
      @input="user_input = ConvertToValidValue($event, removedWhitespace)"
    />
    <code class="input__1_code"> user_input :: {{ user_input }} </code>
  </div>

  <div class="grid">
    <label for="user_input" class="input__1_label">Capitalized user_input</label>
    <input
      type="text"
      class="input__1"
      placeholder="user_input"
      v-model="user_input"
      @input="user_input = ConvertToValidValue($event, Capitalized)"
    />
    <code class="input__1_code"> user_input :: {{ user_input }} </code>
  </div>

  <div class="grid">
    <label for="user_input" class="input__1_label"
      >Capitalized + removedWhitespace user_input</label
    >
    <input
      type="text"
      class="input__1"
      placeholder="user_input"
      v-model="user_input"
      @input="user_input = ConvertToValidValue($event, Capitalized_RemovedWhitespace)"
    />
    <code class="input__1_code"> user_input :: {{ user_input }} </code>
  </div>
</template>
