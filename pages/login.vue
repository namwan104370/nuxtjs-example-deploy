<template>
  <div>
    <form @submit="onSubmit">
        <input v-model="email" type="text"  />
        <input v-model="password" type="password" />

        <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
    data() {
        return {
            email:"",
            password:"",
        }
    },
    methods: {
    async onSubmit(e) {
        e.preventDefault();

        const payload = {
            data: {
                email: this.email,
                password: this.password
            }
        }
        try {
            await this.$auth.loginWith('local',payload)
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }
}
}
</script>

<style>

</style>