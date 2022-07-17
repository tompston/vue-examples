<script setup lang="ts">
defineProps<{
  filename: string;
  code: string;
  style?: string;
  template?: string;
}>();
</script>

<template>
  <div>
    <div class="fs-10 fw-700 opacity-60">{{ filename.toLocaleUpperCase() }}</div>

    <div>
      <pre class="grid grid-cols-1 overflow-y-hidden">
        <div class="tag__name">Script</div>
        <code class="">{{code}}</code>
        <div v-if="template">
          <div class="tag__name">Template</div>
          <code class="language-html">{{template}}</code>
        </div>
        <div v-if="style">
          <div class="tag__name">Style</div>
          <code class="">{{style}}</code>
        </div>
      </pre>
    </div>
  </div>
</template>

<style scoped>
pre {
  border: var(--border-1-2);
  line-height: 1;
  padding: 0px 11px;
  font-size: var(--fs-10);
  overflow-x: scroll;
}

pre code {
  padding: 0px;
  background: rgba(255, 255, 255, 0) !important;
  color: var(--code-txt);
}

.tag__name {
  margin-top: 10px;
  background: var(--code-bg);
  border-radius: var(--border-rad-4);
  padding: 6px 13px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
  font-weight: 600;
}
</style>
