import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 100},
      {name: 'Shiny Start', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80},
    ]
  }, getters: {
    salesProducts: () => {
      return store.state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
    }
  },
  mutations: {
    reducePrice: state => {
      state.products.forEach(product => {
        product.price -= 1;
      })
    }
  }, actions: {
    reducePrice: context => {
      setTimeout(function () {
        context.commit('reducePrice')
      }, 2000)
    }
  }
})
