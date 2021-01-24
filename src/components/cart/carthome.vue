<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>姓名: {{ $store.state.userInfo.username }}</p>
    <hr />
    <h2>产品</h2>
    <ProductList />
    <hr />
    <cartlist/>
    <hr />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import cartlist from "./components/cartlist";

export default {
  name: "cart",
  components: { ProductList , cartlist },
  
};
</script>

<style></style>
