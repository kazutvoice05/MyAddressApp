import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: [],
    login_user: null
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer;
    },
    addAddress (state, { id, address }) {
      address.id = id;
      state.addresses.push(address);
    },
    updateAddress (state, { id, address }) {
      const index = state.addresses.findIndex(address => address.id === id);

      state.addresses[index] = address
    },
    deleteAddress (state, { id }) {
      const index = state.addresses.findIndex(address => address.id === id);

      state.addresses.splice(index, 1)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser');
    },
    logout() {
      firebase.auth().signOut();
    },
    async fetchAddresses ({ getters, commit }) {
      const addresses = await firebase.firestore().collection(`users/${getters.uid}/addresses`).get();
      addresses.forEach((address) => {
        commit('addAddress', { id: address.id, address: address.data()} );
      });
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu');
    },
    async addAddress ({ getters, commit }, address) {
      if (getters.uid) {
        const doc = await firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address);
        commit('addAddress', { id: doc.id, address });
      }
    },
    async updateAddress ({ getters, commit }, { id, address }) {
      if (getters.uid) {
        const doc = await firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address);
        commit('updateAddress', { id: doc.id, address: doc });
      }
    },
    async deleteAddress ({ getters, commit }, { id }) {
      if (getters.uid) {
        await firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).delete();
        commit('deleteAddress', { id });
      }
    },
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getAddressById: state => id => state.addresses.find(address => address.id === id),
  },
  modules: {
  }
})
