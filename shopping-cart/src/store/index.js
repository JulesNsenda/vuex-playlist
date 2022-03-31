import Vuex from 'vuex';
import Vue from 'vue';
import shop from "../api/shop";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //Store the data here
    products: [],
    cart: []
  },

  getters: {
    //Have all computed properties here
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },

    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return{
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
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

    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementProductInventory', product)
      }
    }
  },

  mutations: {
    //Responsible for updating the state
    setProducts(state, products) {
      //update product
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory(state, product) {
      product.inventory--
    },

  }


})

export default store;
