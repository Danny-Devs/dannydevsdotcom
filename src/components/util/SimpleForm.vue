<script setup>
import { ref, reactive } from 'vue'

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
</script>

<template>
  <div class="text-center">
    <h1 class="mb-4">Create an event</h1>
    <hr />
    <form class="mt-6">
      <label class="mr-3">Select a category:</label>
      <select class="bg-red-100 pl-2 py-1 mb-3" v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <BaseInput class="mb-2" v-model="event.title" label="Title" type="text" />

      <BaseInput
        class="mb-6"
        v-model="event.description"
        label="Description"
        type="text"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        class="mb-6"
        v-model="event.location"
        label="Location"
        type="text"
      />

      <h3>Are pets allowed?</h3>

      <div class="flex justify-center mb-6">
        <div class="mr-3">
          <input type="radio" v-model="event.pets" :value="1" name="pets" />
          <label>Yes</label>
        </div>

        <div>
          <input type="radio" v-model="event.pets" :value="0" name="pets" />
          <label>No</label>
        </div>
      </div>

      <h3>Extras</h3>
      <div class="flex justify-center mb-6">
        <div class="mr-4">
          <input
            type="checkbox"
            v-model="event.extras.catering"
            class="field mr-1"
          />
          <label>Catering</label>
        </div>

        <div>
          <input
            type="checkbox"
            v-model="event.extras.music"
            class="field mr-1"
          />
          <label>Live music</label>
        </div>
      </div>

      <button class="bg-red-300 py-2 px-5 rounded-md" type="submit">
        Submit
      </button>
    </form>

    <pre class="bg-red-500 text-left">{{ event }}</pre>
  </div>
</template>
