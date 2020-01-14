<template>
  <v-app v-cloak>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">Log Out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav/>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view v-show="!$store.state.overlay" />
        <v-overlay v-show="$store.state.overlay">
          <v-progress-circular indeterminate color="primary" />
        </v-overlay>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SiteNav'
export default {
  name: 'App',
  components: {
    SideNav,
  },
  created () {
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'showOverlay', 'hideOverlay'])
  },
};
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}

[v-cloak] {
    display: none;
}
</style>
