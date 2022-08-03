<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [Date, String, Number],
    default: "",
  },
});
</script>

<template>
  <div class="mb-4">
 <label class="block text-gray-700 mb-2">      
  <span>{{ label }}</span>
      <input
        type="date"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as any).value)"
      />
    </label>
  </div>
</template>
