import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
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
      //API Calls to fetch the product:: Make call
      // run the setProducts mutations
    },
  },

  mutations: {
    //Responsible for updating the state
    setProducts(state, products) {
      //update product
      state.products = products;
    }
  }


})

export default store;
