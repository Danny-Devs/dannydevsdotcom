<script setup></script>

<template>
  <div class="container mx-auto py-4">
    <span>June 28, 2022</span>
    <h1 class="text-center text-lg mb-2">When in doubt, just make stuff.</h1>
    <hr />
    <p class="mt-3 text-sm mb-4">Blog Post 0001</p>
    <p>
      In this blog article I wanted to talk about <strong>CSS Grid</strong>.
      Nowadays, most folks know how easy and powerful CSS flexbox is. But CSS
      Grid has a lot of capabilities that flexbox simply does not have. So what
      is this grid?
    </p>

    <p>
      The grid tag enables you to align elements into columns and rows. It can
      do much more complicated things than that as well.
    </p>

    <p>
      <a href="https://www.tailwindcss.com">Tailwind CSS</a> is a very popular
      atomic/utility CSS framework. It simplifies using grid, so we'll focus on
      that today. It's excellent for prototyping and moving fast.
    </p>

    <div class="grid md:grid-cols-4 grid-cols-2 gap-4 my-10">
      <div class="bg-red-400 text-center text-white p-1">01</div>
      <div class="bg-red-400 text-center text-white p-1">02</div>
      <div class="bg-red-400 text-center text-white p-1">03</div>
      <div class="bg-red-400 text-center text-white p-1">04</div>
      <div class="bg-red-400 text-center text-white p-1">05</div>
      <div class="bg-red-400 text-center text-white p-1">06</div>
      <div class="bg-red-400 text-center text-white p-1">07</div>
      <div class="bg-red-400 text-center text-white p-1">08</div>
      <div class="bg-red-400 text-center text-white p-1">09</div>
      <div class="bg-red-400 text-center text-white p-1">10</div>
    </div>

    <p>
      At medium size and up, Tailwind will show 4 columns. Below medium size,
      Tailwind will automagically show 2 columns. This is done by using the
      prefix "md:" as in "md:grid-cols-4". This prefix tells Tailwind how to
      behave at medium size and up. The unprefixed "grid-cols-2" will take
      effect below the medium size. This allows Tailwind to fairly easily
      address most responsive design needs.
    </p>

    <p>
      Besides regular rows and columns, grid is know for its ability to divide
      its cells into more complex patterns. Let's take a look at just 4 cells.
    </p>

    <div class="grid grid-cols-3 gap-4 my-10">
      <div
        class="col-span-2 bg-fuchsia-400 text-center text-white py-4 rounded-md"
      >
        01
      </div>
      <div
        class="row-span-2 bg-fuchsia-400 text-center text-white py-4 rounded-md"
      >
        02
      </div>
      <div class="bg-fuchsia-400 text-center text-white py-4 rounded-md">
        03
      </div>
      <div class="bg-fuchsia-400 text-center text-white py-4 rounded-md">
        04
      </div>
    </div>

    <p>
      Having played around a bit with grid in Tailwind, I find it not too bad at
      all. I'm having a little trouble visualizing on a web page because I'm not
      sure which parts would scroll and which wouldn't. I guess it would be
      quite easy to create an old-school 5-cell template: navbar at top, left
      sidebar, right sidebar, main content area, and footer. That would be quite
      easy to setup, and just allow the content area to scroll. The footer would
      have to always be kept at the bottom somehow.
    </p>

    <p>
      Having just visited few webpages, I can see grid being used to encapsulate
      certain areas of a webpage that would benefit from the alignment and
      subshaping capabilities it provides. However, the grid is rarely the
      outermost element; it usually operates within a container element, and can
      also be stacked on top of other grids to provide one area with one grid's
      particular row/column/cell shapes, and then another grid could follow with
      a totally different configuration. The sites I looked at simply had some
      blank areas where content did not extend to; one site animated content to
      slide towards blank areas--I found this to be fairly slick and
      attention-grabbing.
    </p>

    <p>
      On that note, stay tuned for the next blog post, where I will take you on
      a journey through the vueUse utility component library!
    </p>
  </div>
</template>
