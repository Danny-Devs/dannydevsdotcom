<script setup>
import { ref } from 'vue'

const excitingText = ref('Click for a new adventure!')
const toggleMsg = () => {
  excitingText.value =
    excitingText.value === "Let's go! Powered by Vue!!!"
      ? (excitingText.value = 'Click for a new adventure!')
      : "Let's go! Powered by Vue!!!"
}
const isClicked = ref(false)
const reactiveVariable = ref('94')
let unreactiveVariable = 94
const trackUnreactive = ref(unreactiveVariable)

const clickClickMe = () => {
  isClicked.value = true
}
const subtractUnreactive = () => {
  unreactiveVariable -= 50
  trackUnreactive.value = unreactiveVariable
  console.log(unreactiveVariable)
}
const subtractReactive = () => {
  reactiveVariable.value -= 50
}
</script>

<template>
  <div class="container mx-auto px-10 py-8">
    <div class="flex justify-center">
      <div>
        <h1 class="text-2xl">Lab 001</h1>
        <p>Date: 06.28.2022</p>
      </div>
      <div class="ml-8">
        <p class="font-bold text-xl">A Small Lesson on Reactivity</p>
        <p class="text-right mt-1">
          a web essay on modern web experience design, by DannyDevs @_@
        </p>
      </div>
    </div>

    <div
      class="bg-red-600 w-3/4 mx-auto shadow-md rounded-lg mb-8 hover:bg-red-500 active:shadow-lg active:bg-red-700 hover:cursor-pointer"
      @click="toggleMsg"
    >
      <p class="py-4 text-center font-thin text-white text-5xl mt-8">
        {{ excitingText }}
      </p>
    </div>

    <p>
      Thanks for humoring me. I created that big red button up there, which,
      when clicked, shows you a second message. It then flips back and forth
      between the two messages. It's a simple thing really, but it relies on
      something quite powerful: <strong>reactivity</strong>.
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
    <div class="w-48 mx-auto text-center font-extralight text-8xl my-4">
      {{ unreactiveVariable }}
    </div>
    <div class="flex">
      <button
        class="bg-red-500 py-2 mx-auto w-1/3 mb-8"
        @click="subtractUnreactive"
      >
        Click me to subtract 50
      </button>
    </div>
    <p>
      Every time you click the button above, you will instantly subtract 44 from
      the number. However, the number you see (94) will not change, even though
      the actual value of that variable in Javascript has changed.
    </p>
    <br />
    <p>Here is the actual value (try clicking some more!):</p>
    <div class="w-48 mx-auto text-center font-extralight text-8xl my-4">
      {{ trackUnreactive }}
    </div>

    <br />
    <p>
      If we change the value of a <strong>reactive</strong> variable, however,
      anywhere that number is shown on the webpage (and any other things that
      depend on that value) will update themselves automatically.
    </p>
    <br />
    <p>Let's try that again with a reactive variable:</p>

    <div class="w-48 mx-auto text-center font-extralight text-8xl my-4">
      {{ reactiveVariable }}
    </div>
    <div class="flex">
      <button
        class="bg-red-500 py-2 mx-auto w-1/3 mb-8"
        @click="subtractReactive"
      >
        Click me to subtract 50
      </button>
    </div>

    <p>
      The data on the webpage automatically stays in sync with the data in the
      Javascript!
    </p>
    <br />
    <p>
      Hopefully that gives you some insight into how valuable and convenient
      reactivity is. It allows us to be more <em>declarative</em> with our UI,
      since we can go ahead and work with our data and make changes to it, and
      the UI will automagically keep in step thanks to the power of reactivity.
      This makes building more complex websites and web apps much easier and a
      lot more fun! This website was created with
      <a
        target="_blank"
        href="https://www.vuejs.org"
        class="text-emerald-500 hover:cursor-pointer"
        >Vue</a
      >, an excellent and popular Javascript framework.
    </p>
    <br />
    <p>Thanks, and stay tuned for more fun blog posts ahead!</p>
  </div>
</template>

<style scoped></style>
