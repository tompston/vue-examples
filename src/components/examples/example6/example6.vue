<script setup lang="ts">
import CodeBlock from "@/components/global/CodeBlock.vue";
import ExampleBlock from "@/components/global/ExampleBlock.vue";
import { links } from "@/assets/ts";
import Child from "./Child.vue";


const _parent_tmpl = `
<div class="bg-zinc-700 text-white p-5">
    <div class="font-mono fw-700">
        <slot />
    </div>
</div>`;

const _child_code = `
import Layout from './Layout.vue';`;

const _child_tmpl = `
<Layout>
    <div>
      This thing is passed down to the Layout.vue slot
      <div class="bg-red-600">
        and can hold other elements also
      </div>
    </div>
</Layout>`;


</script>

<template>
  <ExampleBlock :idx="6" :exampleName="links[5].label">
    <template v-slot:explanation>
      <div>
        Example that shows how to pass a single element to an existing component, using <code
          class="code__1">slots</code>. In this example we can see that, if the Layout component has only a single <code
          class="code__1">slot</code> tag with no name, then we don't need specify the slot when passing down new
        elements down to it.
      </div>
    </template>

    <template v-slot:code>
      <CodeBlock filename="Layout.vue" :template="_parent_tmpl" />
      <CodeBlock filename="Child.vue" :code="_child_code" :template="_child_tmpl" />
    </template>

    <template v-slot:_component>
      <Child />
    </template>
  </ExampleBlock>
</template>
