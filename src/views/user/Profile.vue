<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Profile</h1>
      </v-flex>
      
      <v-flex xs12 mt-5>
        <p>Name: {{ user_name }}</p> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user_name: ""
    }
  },
  created: function () {
    if (this.$store.state.login_user) {
      this.user_name=this.$store.state.login_user.displayName;
    } else {
      this.$router.push({ name: 'home' });
    }
  },
}
</script>
