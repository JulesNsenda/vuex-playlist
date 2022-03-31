import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

new Vuex.Store({
  state: {
    //Store the data here
    products: []
  },

  getters: {
    //Have all computed properties here
    productCount() {

    }
  },

  actions: {
    //Here you keep all your methods
    fetchProducts() {
      //API Calls to fetch the product
    },

    mutations: {
      //Responsible for updating the state
      setProducts() {

      }
    }
  }

})
