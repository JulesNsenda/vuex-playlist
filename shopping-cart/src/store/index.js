import Vuex from 'vuex';
import Vue from 'vue';
import shop from "../api/shop";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //Store the data here
    products: []
  },

  getters: {
    //Have all computed properties here
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    //Here you keep all your methods
    fetchProducts({commit}) {
      //API Calls to fetch the product:: Make call
      // run the setProducts mutations
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })

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
