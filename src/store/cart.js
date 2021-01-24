const state = {
  items: [],
  checkoutStatus: null,
};

// getters
const getters = {};

// actions
const actions = {
  addProductToCart({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "addProductToCart1",
        { id: product.id ,title:product.title,price:product.price},
        // { root: true }
      );
      // commit("product/deleteProductInventory",product.id)
    }
  },

};

// mutations
const mutations = {
  addProductToCart1(state,product){
    console.log("--------------")
    if(state.items.length > 0){
      for(var i=0;i<state.items.length;i++){
        if(product.id === state.items[i].id ){
          state.items[i].num++;
          // console.log(state.items+","+state.items.length)
          // console.log(state.items[i])
          return;
        }
      }
    }
      state.items.push({id:product.id,title:product.title,price:product.price,num:1})
      console.log(state.items+","+state.items.length)
      console.log(product)
    
    
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
