<script setup lang="ts">
defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "Elige una apción",
  },
});
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 mb-2">
      <span>{{ label }}</span>
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :value="modelValue"
        v-bind="{
          ...$attrs,
          onChange: ($event) => {
            $emit('update:modelValue',($event.target as any).value)
          },
        }"
      >
        <option
          v-for="opcion in options"
          :value="opcion"
          :key="opcion"
          :selected="opcion === modelValue"
        >
          {{ opcion }}
        </option>
      </select>
    </label>
  </div>
</template>
