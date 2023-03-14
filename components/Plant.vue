<template>
  <div class="w-full px-2 xs:mb-6 md:mb-12 article-card">
    <NuxtLink
      :to="`/blog/plant/${plant.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
      <img
        v-if="plant.img"
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        :src="plant.img"
      />
      <div class="flex flex-col m-4">
        <h4 class="font-semibold">植物：{{ plant.name }}</h4>
        <p>{{ plant.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      required: true
    }
  }
}
</script>
