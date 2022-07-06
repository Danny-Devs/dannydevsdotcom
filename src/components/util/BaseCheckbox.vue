<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <input
      :checked="modelValue"
      class="field mr-2"
      type="checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<style scoped></style>
