<script setup>
import { marked } from 'marked'
import { ref, computed } from 'vue'

const isHintShowing = ref(false)
const wasShown = ref(false)

const markdownStr = ref('Type your markdown here')

const HTMLFromMarkdown = computed(() => {
  return marked(markdownStr.value)
})

const handleHint = () => {
  wasShown.value = true
  isHintShowing.value = true
  console.log('Handlehint fired. wasShown =', wasShown.value)
}

const showHintModal = computed(() => {
  return wasShown.value && isHintShowing.value
})
</script>

<template>
  <div class="container mx-auto py-4 px-10 bg-teal-200 h-full">
    <div class="flex justify-between mt-2">
      <span>July 1, 2022</span>
      <p class="">Blog Post 0002</p>
    </div>
    <h1 class="text-center text-4xl mb-6 mt-6">
      Let's Learn about Markdown...in Vue!
    </h1>

    <hr />
    <div class="mx-auto w-full mt-8">
      <textarea
        class="bg-red-100 w-full h-36"
        v-model="markdownStr"
        @mouseover="handleHint"
      ></textarea>
      <div v-if="showHintModal" class="text-center">
        <p>
          Don't know what markdown is? Here's a fun
          <a
            class="font-bold text-indigo-600 hover:text-indigo-500"
            href="https://www.markdowntutorial.com/"
            target="_blank"
            >tutorial</a
          >!
        </p>
      </div>
    </div>

    <div class="mb-8 mt-6 bg-red-100 h-36">
      <div v-html="HTMLFromMarkdown"></div>
    </div>
  </div>
</template>

<style scoped></style>
