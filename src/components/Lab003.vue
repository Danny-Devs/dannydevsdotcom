<script setup>
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'

const isError = ref(false)
const errorMsg = ref('')

const onSubmit = values => {
  const veeValidateReturn = validateEmail(values.email)
  if (veeValidateReturn === true) {
    // do this if email is valid
    isError.value = false
    console.log('Great job! you signed up!')
  } else {
    // handle error
    isError.value = true
    errorMsg.value = veeValidateReturn
    console.log(errorMsg.value)
  }
}

const validateEmail = value => {
  // if the field is blank
  if (!value) {
    return 'Please enter an email address.'
  }

  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'Please enter a valid email.'
  }

  // all is good
  return true
}

const closeError = () => {
  isError.value = false
}
</script>

<template>
  <div class="container mx-auto px-10 py-8">
    <!-- header -->
    <div class="flex justify-center">
      <div>
        <h1 class="text-2xl">Lab 001</h1>
        <p>Date: 07.08.2022</p>
      </div>
      <div class="ml-8">
        <p class="font-bold text-xl">Validating Vue 3 Forms</p>
        <p class="mt-1">
          Vee-Validate makes it easier to validate your form data
        </p>
      </div>
    </div>
    <!-- header -->

    <!-- form -->
    <Form class="container mx-auto text-center mt-10" @submit="onSubmit">
      <div>
        <label class="block mb-4 text-xl font-semibold" for="email"
          >Sign up for the Danny Devs newsletter today!</label
        >
        <Field
          class="text-lg rounded-md px-6 py-3 w-96 bg-violet-200 focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-violet-500"
          type="email"
          name="email"
          id="email"
          placeholder="enter your email here"
        />
      </div>
      <button class="btn btn-lg btn-primary mt-4 px-6">Sign me up now!</button>
      <p v-if="isError" class="text-error-content bg-error">{{ errorMsg }}</p>
      <Modal :isError="isError" :mainText="errorMsg" @closeModal="closeError" />
    </Form>
    <!-- form -->

    <!-- writeup -->
    <hr class="mt-12" />
    <br />
    <h2 class="text-2xl">Results</h2>
    <!-- writeup -->
  </div>
</template>

<style scoped></style>
