<template>
  <div class="w-full px-2 xs:mb-6 md:mb-12 article-card">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
    >
      <img
        v-if="author.img"
        class="object-cover"
        style="width:100px;height: 100px;border-radius: 50%;flex-shrink: 0;"
        :src="author.img"
      />
      <div class="flex flex-col m-4">
        <h4 class="font-semibold">作者：{{ author.name }}</h4>
        <p>{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
