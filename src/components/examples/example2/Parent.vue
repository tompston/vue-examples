<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

const DropdownOptions = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const selected_value = ref(DropdownOptions.GET);
const dropdown_is_shown = ref(false);
</script>

<template>
  <code class="input__1_code">
    <div>selected_value: {{ selected_value }}</div>
    <div>dropdown_is_shown: {{ dropdown_is_shown }}</div>
  </code>

  <button @click="dropdown_is_shown = !dropdown_is_shown" class="button__1">
    SHOW DROPDOWN
  </button>

  <Child
    :options="DropdownOptions"
    :value="selected_value"
    :is_shown="dropdown_is_shown"
    @switch_value="(selected_value = $event), (dropdown_is_shown = false)"
  />
</template>
