<template>
    <div>
    <ul>
        <li v-for="product in items" :key="product.id">
        {{ product.title }} - {{ product.price }}  购买数量：{{product.num}}
        
        </li>
    </ul>
   总价格：{{ total }}
    </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
    total(){
        var sum = 0;
        for(var i = 0;i < this.items.length;i++){
            sum += this.items[i].price*this.items[i].num
        }
        return sum
    }
  },
  methods: {

  },

//   created() {
//     this.$store.dispatch("cart/getAllItems");
//   }
};
</script>
