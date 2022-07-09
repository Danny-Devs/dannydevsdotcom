<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const clickOutTarget = ref(null)

const props = defineProps({
  isError: {
    type: Boolean,
    required: true,
  },
  mainText: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['closeModal'])

onClickOutside(clickOutTarget, () => emit('closeModal'))
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative z-10" :class="isError ? 'z-10' : '-z-10'" role="dialog">
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-50"
      :class="isError ? 'visible' : 'invisible'"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          ref="clickOutTarget"
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:max-w-lg sm:w-full"
          :class="isError ? 'visible' : 'invisible'"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
            <p class="text-error-content text-lg">
              {{ mainText }}
            </p>
          </div>
          <div class="bg-warning px-4 py-3 text-right">
            <button
              @click="$emit('closeModal')"
              type="button"
              class="btn btn-error"
            >
              Ok! Sorry!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
