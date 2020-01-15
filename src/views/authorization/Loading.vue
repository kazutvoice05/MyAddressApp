<template>
  <v-container text-xs-center v-show="!$store.state.overlay">
    <v-overlay v-show="loading">
      <v-progress-circular indeterminate color="primary" />
    </v-overlay>
  </v-container>
</template>

<script>
/*eslint no-console: "off"*/
import { mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      loading: true,
    }
  },
  mounted () {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.$router.push({ name: 'address-list' });
      } 
      this.loading = false
    });
  },
  beforeDestroy () {
    this.unsubscribe();
  },
  methods: {
    ...mapActions(['setLoginUser', 'deleteLoginUser'])
  }
}
</script>