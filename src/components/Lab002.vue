<script setup></script>

<template>
  <div class="container mx-auto px-10 py-8 text-lg">
    <div class="flex justify-center">
      <div>
        <h1>Lab 002</h1>
        <p>07.01.2022</p>
      </div>
      <div class="ml-8">
        <p class="text-5xl">Bringing Sexy Back: Forms in Vue 3</p>
        <p class="text-right text-sm mt-1">
          a web essay on modern web experience design, by DannyDevs @_@
        </p>
      </div>
    </div>

    <h2 class="mt-8 text-2xl">
      We need to get good at forms, because they are the best way to gather data
      from internet users.
    </h2>
    <br />
    <p>
      In this lab, we'll explore creating, using, and validating forms in Vue 3.
      Ready to get started? Let's go!
    </p>
    <br />
    <p>
      We are going to create a dropdown select list, a few text fields, a radio
      input element, and a couple of checkboxes.
    </p>
    <br />
    <SimpleForm />
  </div>
</template>

<style scoped></style>
