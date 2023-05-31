<template>
  <div>
    <h1>Photo Detail</h1>
    <nuxt-link :to="`/photos`">Back</nuxt-link>
    <img :src="photo.download_url" alt="Photo detail" class="image"/>
    <p>Author : {{ photo.author }}</p>
    <p>Info : {{ photo.url }}</p>


  </div>
</template>

<script>
export default {
    async asyncData({ $axios , params}) {
      const photo = await $axios.$get(`/id/${params.id}/info`)
    
      return { photo}
    }
}
</script>

<style>
.image {
  width: 300px;
}
</style>