<template>
    <div class="container">
        <v-row>
            <v-col><h1>Photos</h1></v-col>
            <v-col><nuxt-link :to="`/`">Home</nuxt-link></v-col>
        </v-row>

            <div class="photos">
                <nuxt-link v-for="photo in photos" :key="photo.id" :to="`/photos/${photo.id}`" >
                    <!-- <img :src="photo.download_url" alt="photo" class="photo-item"> -->
                    
                    <p>{{ photo.id }}. {{ photo.author }}</p>
                </nuxt-link>
            </div>
        
    </div>
  </template>
  
  <script>
  export default {
      async asyncData({ $axios }) {
        const photos =  await $axios.$get(`/v2/list`)
      
        return { photos }
      }
  }
  </script>
  
  <style>
  .container {
    padding: 1em;
    width: 1220px;
    margin: 0 auto;
  }
  .photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1em;
    text-align: center;
  }
  .photo-item {
    width: 100%;
    height: 256px;
    object-fit: cover;
  }
  </style>