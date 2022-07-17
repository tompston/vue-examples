<script setup lang="ts">
import Child from "./Child.vue";
import Button from "./Button.vue";
</script>

<template>
  <div class="border border-black">
    <h3>Parent component</h3>

    <Child header="Child component">
      <template v-slot:custom_component>
        <Button text="Custom component passed as a prop to a child" />
        <Button text="you can pass either one, or many components here" />
      </template>
    </Child>
  </div>
</template>
