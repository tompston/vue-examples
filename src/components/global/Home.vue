<script setup lang="ts">
import { links, slugify } from "@/assets/ts";
</script>

<template>
  <div>
    <div class="max-w-[640px] mb-12 fw-600">
      <div class="fs-8 opacity-80-- leading-6">
        Learned a couple of things while making
        <a href="https://gomarvin.pages.dev/" target="_blank" rel="noopener noreferrer"
          >gomarvin editor</a
        >. Some of theses tips / snippets could be classified as semi-advanced (aka hard
        to find how to do properly online). Full code can be found
        <a
          href="https://github.com/tompston/vue-examples"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >.
      </div>
    </div>

    <nav class="grid gap-2 mb-7 sm:gap-4">
      <div v-for="link in links" :key="link.index">
        <div class="flex gap-4 sm:flex-col sm:gap-0">
          <div class="uppercase fs-10 fw-700 opacity-50">example_{{ link.index }}</div>
          <div class="fs-9 hover:underline fw-600">
            <a :href="'#' + slugify(link.label)">{{ link.label }}</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
