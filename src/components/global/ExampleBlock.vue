<script setup lang="ts">
import { slugify } from "@/assets/ts";

defineProps<{
  idx: number;
  exampleName: string;
}>();
</script>

<template>
  <div>
    <div class="grid leading-none mt-3">
      <span class="fs-10 fw-700 opacity-60 mb-1 mt-2" :id="slugify(exampleName)">EXAMPLE {{ idx }}</span>
      <hr class="hr-1-3 my-2.5" />
      <h6 class="fw-700 mt-1">{{ exampleName }}</h6>
    </div>
    <div class="max-w-[660px] mt-4 mb-7 fs-8 fw-400">
      <slot name="explanation" />
    </div>
    <div class="grid grid-cols-2 gap-4 mt-1.5 md:grid-cols-1">
      <div>
        <h6 class="fs-8 fw-700">Code</h6>
        <div class="grid gap-3">
          <slot name="code" />
        </div>
      </div>
      <div>
        <h6 class="fs-8 fw-700">Component</h6>
        <div class="grid gap-3">
          <slot name="_component"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
