
<template>
    <v-layout row>
      <v-flex xs6 offset-xs3>
        <div style="border-radius: 5px;" class="white elevation-2">
          <v-toolbar style="border-radius: 5px;" flat dense class="red darken-4" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <form>
              <v-text-field
                label="Email"
                placeholder="Email"
                outline
                v-model="email"
                type="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                placeholder="Password"
                outline
                v-model="password"
                type="password"
              ></v-text-field>
              <div class="error" v-html="error"></div>
              <v-btn class="green" @click="register" dark>Register</v-btn>
              </form>
            </div>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

</style>
