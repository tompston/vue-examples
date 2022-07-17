<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <button class="p-3 fs-10 fw-600 bg-gray-600 text-white m-2">{{ text }}</button>
</template>
