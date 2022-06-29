<script setup>
import { ref } from 'vue'

const excitingText = ref('Ready for a new adventure???')
const toggleMsg = () => {
  excitingText.value =
    excitingText.value === "Let's go! Powered by Vue!!!"
      ? (excitingText.value = 'Ready for a new adventure???')
      : "Let's go! Powered by Vue!!!"
}
const isClicked = ref(false)

let unreactiveVariable = 94

const clickedUnreactive = () => {
  unreactiveVariable -= 44
}

const clickClickMe = () => {
  isClicked.value = true
}
</script>

<template>
  <div class="container mx-auto px-11 py-8">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl">Lab 001</h1>
        <p>Date: 06.28.2022</p>
      </div>
      <div class="ml-8">
        <p class="font-bold text-xl">
          Exploring the Fun of Deploying while Creating a web experience.
        </p>
        <p class="text-right mt-1">
          a web essay on modern web experience design, by DannyDevs @_@
        </p>
      </div>
    </div>

    <div class="bg-red-600 shadow-md rounded-lg mb-8" @click="toggleMsg">
      <p class="py-4 text-center font-thin text-white text-6xl mt-8">
        {{ excitingText }}
      </p>
    </div>

    <p>
      Thanks for humoring me. I created that big red button up there, when
      clicked, shows you a second message. It then flips back and forth between
      the two messages. It's a simple thing really, but it relies on something
      quite powerful: <strong>reactivity</strong>.
    </p>
    <br />
    <p>
      If you were 'reactive', you could tell other objects that depend on you
      when your value has changed, and they will update their values using your
      new value. Here is a simple example.
    </p>
    <br />
    <p>
      Here is a number. It's stored inside a regular old Javascript variable.
      I'm using interpolation to insert it directly into the webpage:
    </p>
    <div
      class="w-48 mx-auto text-center font-extralight text-8xl"
      @click="clickedUnreactive"
    >
      {{ unreactiveVariable }}
    </div>
    <div class="flex">
      <button class="bg-red-500 py-2 mx-auto w-1/2">
        Click me to subtract 50
      </button>
    </div>
    <p>
      It has a click handler on it. When you click it, you will instantly
      subtract 44 from the number. However, the number you see will not change,
      even the actual value of that variable in Javascript changed, as you can
      see below:
    </p>
    <br />
    <p>Click to get the current value of the unreactive variable:</p>
    <div class="text-center font-extralight text-8xl" @click="clickClickMe">
      {{ isClicked ? unreactiveVariable : 'Click me!' }}
    </div>
  </div>
</template>

<style scoped></style>
