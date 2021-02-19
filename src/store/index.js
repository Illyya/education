import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfCities: [],
  },
  mutations: {
    mutListOfCities(state, dataListOfCities) {
      state.listOfCities = dataListOfCities
    }
  },
  actions: {
    loadListOfCities({ commit }) {
      const url = "https://60254fac36244d001797bfe8.mockapi.io/api/v1/city";

      fetch(url)
        .then((response) => response.json())
        .then((data) => commit('mutListOfCities', data));
    }
  },
  modules: {
  }
})
