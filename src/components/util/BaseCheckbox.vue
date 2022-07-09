<script setup>
import UniqueID from '../../composables/UniqueID';

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

const uuid = UniqueID()
</script>

<template>
  <div>
    <input
      :id="uuid"
      :checked="modelValue"
      class="field mr-2"
      type="checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :for="uuid">{{ label }}</label>
  </div>
</template>

<style scoped></style>
