<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-bind="$attrs">
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{ 'mr-4': !vertical }"
    >
      <BaseRadio
        :modelValue="modelValue"
        :label="option.label"
        :value="option.value"
        :name="name"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </component>
  </div>
</template>

<style scoped></style>
