<script setup></script>

<template>
  <div class="container mx-auto flex justify-between px-10 py-4 bg-red-200">
    <!-- logotype area -->
    <router-link to="/"><div class="text-2xl">Danny Devs</div></router-link>

    <!-- navigation -->
    <ul class="flex">
      <li class="pr-12">
        <router-link to="/lab">
          <a class="hover:cursor-pointer hover:text-white text-2xl">Lab</a>
        </router-link>
      </li>

      <li class="pr-12">
        <a class="hover:cursor-pointer hover:text-white text-2xl">About</a>
      </li>
      <li>
        <a class="hover:cursor-pointer hover:text-white text-2xl">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
