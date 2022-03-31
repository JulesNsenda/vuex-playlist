<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "ProductList",
  computed: {
    products() {
      return store.getters.availableProducts;
    }
  },

  created() {
    store.dispatch('fetchProducts');
  }
}
</script>

<style scoped>

</style>
