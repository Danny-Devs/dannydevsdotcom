<script setup>
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'

const isError = ref(false)
const isSuccess = ref(false)
const errorMsg = ref('')

const onSubmit = values => {
  const veeValidateReturn = validateEmail(values.email)
  if (veeValidateReturn === true) {
    // do this if email is valid
    isError.value = false
    isSuccess.value = true
    console.log('Great job! you signed up!')
  } else {
    // handle error
    isError.value = true
    isSuccess.value = false
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

const closeModals = () => {
  isError.value = false
  isSuccess.value = false
  console.log('isError: ', isError.value)
  console.log('isSuccess: ', isSuccess.value)
}
</script>

<template>
  <div class="container mx-auto px-10 py-8">
    <!-- header -->
    <div class="flex justify-center">
      <div>
        <h1 class="text-2xl">Lab 003</h1>
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

      <Modal
        v-if="isError"
        :isFlag="isError"
        :mainText="errorMsg"
        @close-modal="closeModals"
      />
      <Modal
        v-if="isSuccess"
        :isFlag="isSuccess"
        :mainText="'Congratulations, you signed up!'"
        @close-modal="closeModals"
      />
    </Form>
    <!-- form -->

    <!-- writeup -->
    <hr class="mt-12" />
    <br />
    <h2 class="text-2xl">Results</h2>
    <br />
    <p>
      While Lab003's newsletter signup may look simple, looks can be deceiving!
      Go ahead, try entering invalid, blank, or valid emails. Features include:
    </p>
    <br />
    <ul class="list-disc list-inside text-xl px-8">
      <li>
        Email validation using <strong>Vee-Validate's</strong> convenient
        <strong>Form</strong> and <strong>Field</strong> components

        <p class="text-base pl-6 mt-4 mb-8">
          Vee-Validate is a great example of a small NPM package for Vue that is
          easy to install and simplifies validating form data. The Form and
          Field components provide you with a customized @submit prop that
          automatically provides you with the form's input values. Having these
          values magically provided to your submit handler function allows you
          to get to work immediately on your validation logic and wiring up your
          UI.
        </p>
      </li>
      <li>
        Error handling for both blank submissions and invalid email addresses
        <p class="text-base pl-6 mt-4 mb-8">
          Good error handling is especially crucial for a good user experience!
        </p>
      </li>
      <li>
        Usage of Modal UI component from TailwindUI
        <p class="text-base pl-6 mt-4 mb-8">
          This saved me a lot of work, even though I had to strip a lot of the
          component away to suit my needs. There are modal-specific Tailwind
          classes working in tandem that would have taken me a while to learn
          how to put together myself.
        </p>
      </li>
      <li>
        Usage of DaisyUI to speed up visual development
        <p class="text-base pl-6 mt-4 mb-8">
          I didn't use much of DaisyUI except for the button, but I also used
          DaisyUI's built-in semantic color system. The next step would be to
          customize the color palette; for now, I just used the stock colors
          plus a splash of Tailwind's colors that meshed well.
        </p>
      </li>
      <li>
        Usage of vueUse's onClickOutside to add click-outside-to-close
        functionality
        <p class="text-base pl-6 mt-4 mb-8">
          It was incredibly easy to wire up and add this functionality in the
          TailwindUI modal-based Modal component.
        </p>
      </li>
    </ul>

    <h2 class="text-2xl">Summary</h2>
    <br />
    <p>
      I am really enjoying my Vue 3 stack right now. You can use my template
      too, if you want! Create and name a project folder. In a command prompt,
      in that folder, you can type "degit Danny-Devs/Vuesque", type "npm
      install" to download and install all the dependencies, and voila! You have
      an elegant and powerful tech stack at your disposal. You can check out my
      Vuesque template on github
      <a
        class="font-bold text-bg-primary cursor-pointer"
        target="_blank"
        href="https://github.com/Danny-Devs/vuesque"
        >here</a
      >.
    </p>
    <br />
    <p>I invite you to build cool things with me! Until next time, adios...</p>
    <!-- writeup -->
  </div>
</template>

<style scoped></style>
