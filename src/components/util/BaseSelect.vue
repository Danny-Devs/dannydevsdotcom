<script setup>
import UniqueID from '../../composables/UniqueID'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const uuid = UniqueID()
</script>

<template>
  <label v-if="label" :for="uuid" class="mr-3">{{ props.label }}</label>
  <select
    :id="uuid"
    v-bind="{
      ...$attrs,
      onChange: $event => {
        $emit('update:modelValue', $event.target.value)
      },
    }"
    :value="modelValue"
    class="bg-red-100 pl-2 py-1 mb-3 field"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<style scoped></style>
