<script setup lang="ts">
import Header from "./components/global/Header.vue";
import Home from "./components/global/Home.vue";
// import { RouterLink, RouterView } from "vue-router";
import example1 from "../src/components/examples/example1/example1.vue";
import example2 from "../src/components/examples/example2/example2.vue";
import example3 from "../src/components/examples/example3/example3.vue";
import example4 from "../src/components/examples/example4/example4.vue";
import example5 from "../src/components/examples/example5/example5.vue";
</script>

<template>
  <main>
    <Header />

    <div class="flex-center">
      <div class="max-width-1 mb-36">
        <!-- <RouterView /> -->

        <Home />

        <div class="grid gap-[88px] sm:gap-16">
          <example1 />
          <example2 />
          <example3 />
          <example4 />
          <example5 />
        </div>
      </div>
    </div>
  </main>
</template>
