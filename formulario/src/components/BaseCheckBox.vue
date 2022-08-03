<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex items-center">
    <label class="cursor-pointer label">
      <input
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', ($event.target as any).checked)"
      />
      <label class="cursor-pointer label" for="flexCheckDefault" v-if="label">
        {{ label }}
      </label>
    </label>
  </div>
</template>
