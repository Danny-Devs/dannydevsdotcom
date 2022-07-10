<script setup></script>

<template>
  <div class="container mx-auto px-10 py-8">
    <!-- header -->

    <div class="flex justify-center">
      <div>
        <h1 class="text-2xl">Lab 004</h1>
        <p>Date: 07.10.2022</p>
      </div>
      <div class="ml-8">
        <p class="font-bold text-xl">
          Using UUID to Spit Out Unique User IDs For You
        </p>
        <p class="mt-1">Better yet, use vue-uuid!</p>
      </div>
    </div>
    <!-- header -->

    <!-- lesson -->
    <br />
    <p>
      Dynamically iterating over lists in Vue requires that you provide a unique
      value for each item's "key" attribute. Using the "index" value provided by
      Vue for v-for is not really best practice. One best practice would be to
      use
      <a
        class="font-bold text-bg-primary cursor-pointer"
        href="https://www.npmjs.com/package/uuid"
        target="_blank"
        >uuid</a
      >, an npm package that ensures that your ids are totally unique.
    </p>
    <br />
    <p>
      I googled "vue uuid" to see if anyone had created something cool on top of
      uuid for Vue, and voila, I found
      <a
        class="font-bold text-bg-primary cursor-pointer"
        href="https://github.com/VitorLuizC/vue-uuid"
        target="_blank"
        >vue-uuid</a
      >! Vue-uuid is pretty small at 12.6kb unpackaged, so it shouldn't add a
      lot of bloat. Besides, needing unique ids (or unique hashes, for that
      matter) is something so common that I even decided to add vue-uuid to my
      Vue 3 blank starter template,
      <a
        class="font-bold text-bg-primary cursor-pointer"
        href="https://github.com/Danny-Devs/vuesque"
        target="_blank"
        >Vuesque</a
      >.
    </p>
    <br />
    <p>Here are some example of the unique user ids that UUID spits out:</p>
    <br />
    <div class="text-center">
      <p class="text-lg font-semibold">{{ $uuid.v1() }}</p>
      <p class="text-lg font-semibold">{{ $uuid.v4() }}</p>
    </div>
    <br />
    <p class="px-6">
      Note: There are different kinds of uuids that you can create: v1, v3, v4,
      and v5, depending on your needs. The ids above are v1 (based on timestamp)
      and v4 (random), respectively. Creating a v3 uuid threw an error, so I
      avoided that one. v5 is for more advanced use cases. As you can see, the
      ids are based on advanced algorithms that practically ensures uniqueness.
    </p>
    <br />

    <p>Here are two more ids, V1 and V4 again, respectively:</p>
    <br />
    <div class="text-center">
      <p class="text-lg font-semibold">{{ $uuid.v1() }}</p>
      <p class="text-lg font-semibold">{{ $uuid.v4() }}</p>
    </div>
    <br />
    <p>Note that the timestamp-based V1 ids are identical! Guess why...</p>
    <br />
    <p>
      ...because their timestamps are identical, the uuid algorithms processed
      them identically, resulting in the <em>exact</em> same output id! This
      might exactly what you DON'T want to do. So, my recommendation would be to
      use uuid.v4 if you want a totally random id--this is an important 'gotcha'
      to avoid.
    </p>
    <br />
    <h2 class="text-2xl">Recap</h2>
    <br />
    <p>
      The next time you find yourself needing to add a unique id (or hash, more
      generally speaking) in your Vue project, I would recommend vue-uuid. There
      is an interesting step involved in configuring vue-uuid:
    </p>
    <br />
    <pre>
    import { createApp } from "vue";
    import withUUID from "vue-uuid";

    const app = withUUID(
      createApp({
        // ...
      }),
    );
  </pre
    >
    <p>
      I was used to the "app.use(router)" type of syntax when adding Vue Router
      and Pinia to a Vue 3 project, so wrapping createApp with withUUID felt
      strange to me. But I guess it's acting as a wrapper function that takes in
      the entire created app and adds its functionality that way. The .use
      syntax takes the created app and invokes a function within that app to
      integrate functionality.
    </p>
    <br />
    <p>
      What I have learned is to roll with it, then put the package through its
      paces and see what works and what doesn't. As we saw, the V3 uuid (which
      is based on namespace w/ MD5) is buggy, but again, we roll with it and
      accept its bugginess (for now, at least). We now have an easy way to bring
      in practically unique user ids into our project. Woohoo!
    </p>
    <br />
    <p class="text-2xl">
      Want to try out vue-uuid with Vuesque, my handy Vue 3 template?
    </p>
    <br />
    <p>
      Create and name a project folder. In a command prompt from that folder,
      type "degit Danny-Devs/Vuesque", then npm install all the dependencies,
      and voila, you have an elegant and powerful tech stack at your disposal.
      You can check out the Vuesque template
      <a
        class="font-bold text-bg-primary cursor-pointer"
        target="_blank"
        href="https://github.com/Danny-Devs/vuesque"
        >here</a
      >.
    </p>
    <br />
    <p>See you next time for more web dev awesomeness!</p>
  </div>
</template>

<style scoped></style>
