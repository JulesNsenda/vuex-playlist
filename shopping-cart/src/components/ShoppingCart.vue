<template>
  <div>
    <h1>Shopping cart</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price }} - {{ product.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  computed:{
    products(){
      return this.$store.getters.cartProducts
    }
  }
}
</script>

<style scoped>

</style>
