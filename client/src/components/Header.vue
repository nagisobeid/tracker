
<template>
    <v-toolbar fixed class="green" dark>
        <v-toolbar-title class="mr-4">
          <span @click="toHome({name: '/'})">Tab Tracker</span>
          </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark>Browse</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="toLogin({name: 'login'})">
            Login
            </v-btn>
            <v-btn flat dark @click="toRegister({name: 'register'})">
            SignUp
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    toRegister (route) {
      this.$router.push(route.name)
    },
    toHome (route) {
      this.$router.push(route.name)
    },
    toLogin (route) {
      this.$router.push(route.name)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
