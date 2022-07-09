<script setup>
import UniqueID from '../../composables/UniqueID'

const uuid = UniqueID()

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label v-if="label" :for="uuid">{{ props.title }}</label>
  <input
    :aria-invalid="error ? true : null"
    :aria-describedby="error ? `${uuid}-error` : null"
    :id="uuid"
    v-bind="$attrs"
    :placeholder="label"
    class="field py-1 rounded-md px-4 bg-red-100"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <p
    v-if="error"
    :id="`${uuid}-error`"
    class="text-red-700"
    aria-live="assertive"
  >
    Whoops! There was an error.
  </p>
</template>

<style scoped></style>
