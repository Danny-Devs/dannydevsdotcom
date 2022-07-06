<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  
    <label v-if="label">{{ props.title }}</label>
    <input
      v-bind="$attrs"
      :placeholder="label"
      class="field py-1 rounded-md px-4 bg-red-100"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  
</template>

<style scoped></style>
