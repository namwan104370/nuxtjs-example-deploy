<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-console -->
<template>
  <div class="container">
    <div>
      <NuxtLogo/>
      <h1>Hello Index Page.</h1>
      <a href="/about">Go to About Page</a> <br>
      <nuxt-link :to="`/users`"> Go to Users Page</nuxt-link>
      <nuxt-link :to="`/photos`"> Go to Photos Page</nuxt-link>

      <h1 class="title">{{ title }}</h1>

      <div class="links">
        <button @click="logout">Logout</button>
      </div>
      
    </div>
  </div>
  

</template>

<script>

export default {

  data() {
    return {
      title: 'hello-nuxt-app', 
    }
  },
   methods: {
    async logout(e) {
      await this.$auth.logout() 
      this.$router.push('/login')
    },
  }
}
</script>
<style>
.container{
  text-align: center;
}

</style>
