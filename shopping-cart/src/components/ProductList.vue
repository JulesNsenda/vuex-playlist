<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price | currency}} - {{ product.inventory }}
        <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ProductList",
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  },

  created() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style scoped>

</style>
