<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps<{
  // toggle for the dropdown
  is_shown: boolean;
  // array of possible values
  options: any;
  // currently selected value in the passed down value
  value: any;
}>();
defineEmits(["switch_value"]);
</script>

<template>
  <div v-if="is_shown">
    <div class="border border-black py-3">
      <h6 class="fs-8 fw-700 flex-center">Child Component</h6>
      <div class="flex-center text-center flex-col">
        <div v-for="option in options" v-bind:key="option">
          <!-- on click, emit the value which is clicked -->
          <button
            @click="$emit('switch_value', option)"
            class="disable-text-select"
            :class="value == option ? '' : 'opacity-40'"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
