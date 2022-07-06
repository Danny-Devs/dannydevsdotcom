<script setup>
import { ref, reactive } from 'vue'
import BaseSelect from './BaseSelect.vue'
import BaseCheckbox from './BaseCheckbox.vue'

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
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category:"
      />

      <h3>Name & describe your event</h3>

      <BaseInput class="mr-2" v-model="event.title" label="Title" type="text" />

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
        <BaseCheckbox
          class="mr-4"
          label="Catering"
          v-model="event.extras.catering"
        />

        <BaseCheckbox label="Live music" v-model="event.extras.music" />
      </div>

      <button class="bg-red-300 py-2 px-5 rounded-md" type="submit">
        Submit
      </button>
    </form>

    <pre class="bg-red-500 text-left">{{ event }}</pre>
  </div>
</template>
