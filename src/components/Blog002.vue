<script setup>
import { marked } from 'marked'
import { ref, computed } from 'vue'

const markdownStr = ref('##### Hello World')

const HTMLFromMarkdown = computed(() => {
  return marked(markdownStr.value)
})
</script>

<template>
  <div class="container mx-auto py-4 px-4">
    <span>July 1, 2022</span>
    <h1 class="text-center text-2xl mb-2">
      Let's Learn about Markdown...in Vue!
    </h1>
    <hr />
    <p class="mt-3 text-sm mb-4">Blog Post 0002</p>

    <div class="mb-8">
      {{ markdownStr }}
      <div v-html="HTMLFromMarkdown"></div>
    </div>
  </div>
</template>

<style scoped></style>
