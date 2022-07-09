<script setup>
import { ref } from 'vue'
import axios from 'axios'

// https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
])

const event = ref({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 1,
  extras: {
    catering: false,
    music: false,
  },
})

const radioOptions = [
  { label: 'yes', value: 1 },
  { label: 'no', value: 0 },
]

// client-side validation aka pre-validation is a best practice before sending data to the server
const sendForm = () => {
  axios
    .post(
      'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
      event.value
    )
    .then(res => {
      console.log('Response', res)
    })
    .catch(err => {
      console.log('Error', err)
    })
}
</script>

<template>
  <div class="text-center">
    <h1 class="mb-4">Create an event</h1>
    <hr />
    <form class="mt-6" @submit.prevent="sendForm">
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category:"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="event.title"
          class="mr-2"
          label="Title"
          type="text"
        />

        <BaseInput
          class="mb-6"
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          class="mb-6"
          v-model="event.location"
          label="Location"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>

        <BaseRadioGroup
          v-model="event.pets"
          :options="radioOptions"
          name="pets"
          :vertical="true"
          class="mb-6"
        />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div class="flex justify-center mb-6">
          <BaseCheckbox
            class="mr-4"
            label="Catering"
            v-model="event.extras.catering"
          />

          <BaseCheckbox label="Live music" v-model="event.extras.music" />
        </div>
      </fieldset>

      <button
        class="bg-red-300 py-2 px-5 rounded-md hover:bg-red-400 hover:shadow-md active:shadow-none active:bg-red-500"
        type="submit"
      >
        Submit
      </button>
    </form>

    <pre class="bg-red-500 text-left">{{ event }}</pre>
  </div>
</template>
