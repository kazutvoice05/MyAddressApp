<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>My Address App</h1>
        <p>This app is available when you login to your google account</p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color="info" @click="login">
          Login with your Google account
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  methods: {
    ...mapActions(['login'])
  }
}
</script>
