<script setup lang="ts">
defineProps<{
  header: string;
}>();
</script>

<template>
  <div class="border-1-2 m-2">
    <h5>{{ header }}</h5>

    <slot name="custom_component" />
  </div>
</template>
