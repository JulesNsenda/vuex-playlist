<template>
  <div>
    <h1>Shopping cart</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price  | currency}} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency}} </p>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  computed: {
    products() {
      return this.$store.getters.cartProducts
    },
    total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>

</style>
