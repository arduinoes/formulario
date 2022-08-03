<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <div class="container formulario">
    <div class="mb-3">
      <div class="form-check">
        <input
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="radio"
          :checked="modelValue === value"
          @change="$emit('update:modelValue', value)"
          v-bind="$attrs"
        />
        <label class="form-check-label" for="flexCheckDefault" v-if="label">
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>
