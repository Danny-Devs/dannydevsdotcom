<script setup>
import UniqueID from '../../composables/UniqueID'

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
})

let uuid = UniqueID()
</script>

<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    class="mr-1"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
</template>

<style scoped></style>
