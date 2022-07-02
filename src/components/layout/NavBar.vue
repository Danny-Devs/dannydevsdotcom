<script setup>
import { ref, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isShowingBlog = ref(false)
const isShowingLab = ref(false)
const dropdownBlog = ref(null)
const dropdownLab = ref(null)

const toggleDropdown = dropdownName => {
  if (dropdownName === 'blog') {
    isShowingBlog.value = !isShowingBlog.value
    isShowingLab.value = false
  } else if (dropdownName === 'lab') {
    isShowingLab.value = !isShowingLab.value
    isShowingBlog.value = false
  } else if (dropdownName === 'both') {
    isShowingBlog.value = false
    isShowingLab.value = false
  }
}

onClickOutside(dropdownBlog, () => toggleDropdown('blog'))
onClickOutside(dropdownLab, () => toggleDropdown('lab'))
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
            @mouseover="toggleDropdown('blog')"
            >Blog</a
          >
        </router-link>

        <!-- dropdown menu -->
        <div
          ref="dropdownBlog"
          v-if="isShowingBlog"
          class="flex flex-col absolute top-10 p-2 bg-white rounded-md shadow-lg w-36"
          @mouseleave="toggleDropdown('blog')"
        >
          <router-link to="/blog001">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown('blog')"
            >
              Blog 001
            </div>
          </router-link>
          <router-link to="/blog002">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown('blog')"
            >
              Blog 002
            </div>
          </router-link>
        </div>
        <!-- dropdown menu -->
      </li>
      <li class="pr-12 relative">
        <router-link to="/lab">
          <a
            class="hover:cursor-pointer hover:text-white text-2xl"
            @mouseover="toggleDropdown('lab')"
            >Lab</a
          >
        </router-link>

        <!-- dropdown menu -->
        <div
          ref="dropdownLab"
          v-if="isShowingLab"
          class="flex flex-col absolute top-10 p-2 bg-white rounded-md shadow-lg w-36"
          @mouseleave="toggleDropdown('lab')"
        >
          <router-link to="/lab001">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown('lab')"
            >
              Lab 001
            </div>
          </router-link>
          <router-link to="/lab002">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown('lab')"
            >
              Lab 002
            </div>
          </router-link>
          <router-link to="/lab003">
            <div
              class="text-lg hover:bg-red-200 px-4 py-2"
              @click="toggleDropdown('lab')"
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
            @mouseover="toggleDropdown('both')"
            class="hover:cursor-pointer hover:text-white text-2xl"
            >About</a
          >
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <a
            @mouseover="toggleDropdown('both')"
            class="hover:cursor-pointer hover:text-white text-2xl"
            >Contact</a
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
