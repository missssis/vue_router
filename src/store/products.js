import shop from "../api/shop";

// initial state
const state = {
  all: []
};

// getters
const getters = {};

const mutations = {
  setAll(state, products) {
    state.all = products;
  },
  deleteProductInventory(state, id) {
    const pruduct = state.all.find(product => product.id === id);
    console.log("------------"+id)
    console.log(pruduct)
    pruduct.inventory--;
  }
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setAll", products);
    });
  },
  deleteProductInventory2({ commit },id){
    commit("deleteProductInventory",id)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
