<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<template>
  <Layout>
    <div>
      This thing is passed down to the Layout.vue slot
      <div class="bg-red-600">
        and can hold other elements also
      </div>
    </div>
  </Layout>
</template>
