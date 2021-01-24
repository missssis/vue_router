<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }} 剩余数量： {{product.inventory}}
      <br />
      <button :disabled="!product.inventory" @click="addProfuctToCart(product)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    }
  },
  methods: {
    addProfuctToCart(product) {
        this.$store.dispatch("cart/addProductToCart", product);
        this.$store.dispatch("products/deleteProductInventory2", product.id);


    }
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
