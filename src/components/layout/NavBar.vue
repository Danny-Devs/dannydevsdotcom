<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isShowing = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
  isShowing.value = !isShowing.value
}

onClickOutside(dropdown, toggleDropdown)

const ensureClosed = () => {
  isShowing.value === true ? (isShowing.value = false) : null
}
</script>

<template>
  <div class="container mx-auto flex justify-between px-10 py-4 bg-red-200">
    <!-- logotype area -->
    <router-link to="/"><div class="text-2xl">Danny Devs</div></router-link>

    <!-- navigation -->
    <ul class="flex relative">
      <li class="pr-12">
        <router-link to="/blog">
          <a
            class="hover:cursor-pointer hover:text-white text-2xl"
            @mouseover="ensureClosed"
            >Blog</a
          >
        </router-link>
      </li>
      <li class="pr-12 relative">
        <router-link to="/lab">
          <a
            class="hover:cursor-pointer hover:text-white text-2xl"
            @mouseover="toggleDropdown"
            >Lab</a
          >
        </router-link>

        <!-- dropdown menu -->
        <div
          ref="dropdown"
          v-if="isShowing"
          class="flex flex-col absolute top-10 p-2 bg-white rounded-md shadow-lg w-36"
          @mouseleave="toggleDropdown"
        >
          <router-link to="/lab001">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown"
            >
              Lab 001
            </div>
          </router-link>
          <router-link to="/lab002">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown"
            >
              Lab 002
            </div>
          </router-link>
          <router-link to="/lab003">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown"
            >
              Lab 003
            </div>
          </router-link>
        </div>
        <!-- dropdown menu -->
      </li>

      <li class="pr-12">
        <router-link to="/about">
          <a
            @mouseover="ensureClosed"
            class="hover:cursor-pointer hover:text-white text-2xl"
            >About</a
          >
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <a
            @mouseover="ensureClosed"
            class="hover:cursor-pointer hover:text-white text-2xl"
            >Contact</a
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
