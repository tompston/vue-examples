<script setup lang="ts">
import CodeBlock from "@/components/global/CodeBlock.vue";
import ExampleBlock from "@/components/global/ExampleBlock.vue";
import { links } from "@/assets/ts";
import Parent from "./Parent.vue";

const code = `
import { ref } from "vue";
`;

const _parent_code = `
import { ref } from "vue";
import Child from "./Child.vue";

const DropdownOptions = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const selected_value = ref(DropdownOptions.GET);
const dropdown_is_shown = ref(false);`;

const _parent_tmpl = `
<button @click="dropdown_is_shown = !dropdown_is_shown" class="button__1">
  SHOW DROPDOWN
</button>

<Child
  :options="DropdownOptions"
  :value="selected_value"
  :is_shown="dropdown_is_shown"
  @switch_value="(selected_value = $event), (dropdown_is_shown = false)"
/>`;

const _child_code = `
defineProps<{
  is_shown: boolean;    // toggle for the dropdown
  options: any;         // array of possible values
  value: any;           // currently selected value in the passed down value
}>();

defineEmits(["switch_value"]);`;
const _child_tmpl = `
<div v-if="is_shown">
  <div class="border border-black py-3">
    <h6 class="fs-8 fw-700 flex-center">Child Component</h6>
    <div class="flex-center text-center flex-col">
      <div v-for="option in options" v-bind:key="option">
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
</div>`;
</script>

<template>
  <!--  -->
  <ExampleBlock :idx="2" :exampleName="links[1].label">
    <template v-slot:explanation>
      Lets say we want to create a dropown box to which we pass predefined values from the
      parent component. As we want to reuse that custom dropdown box in multiple places,
      we should create it as a custom component. For full functionality, we need to emit
      the selected value x, once some event happens.

      <br />
      <br />
      To do this,
      <ol>
        <li>
          <div>In the child component</div>
          <ol class="">
            <li>
              Define an emit event in child component script tag, like
              <code class="code__1">defineEmits(["switch_value"]);</code>
            </li>
            <li>
              Then, define when that value should be emitted, using the defined name, like
              <code class="code__1">@click="$emit('switch_value', option)" </code>
            </li>
          </ol>
        </li>
        <li>
          <div>
            In the parent component, when calling the child component, append a new value
            to the component, like this
            <code class="code__1">@switch_value="(selected_value = $event)"</code>. Note
            that the @ symbol is followed by the string that we defined in the child
            components <code class="code__1">defineEmits([])</code> array.
          </div>
          <!-- <ol>
            <li>asd</li>
          </ol> -->
        </li>
      </ol>
    </template>

    <!--  -->
    <template v-slot:code>
      <CodeBlock :code="_parent_code" filename="Parent.vue" :template="_parent_tmpl" />
      <CodeBlock :code="_child_code" filename="Child.vue" :template="_child_tmpl" />
    </template>

    <!--  -->
    <template v-slot:_component>
      <Parent />
    </template>
  </ExampleBlock>
</template>
