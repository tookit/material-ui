import {
  fetchProducts,
  fetchQuote,
  fetchProductCategories,
  fetchCategoryTree,
  getProductCategoryById,
  getProductById,
  updateProduct,
  updateProductCategory,
  fetchImagesByProductId
} from '@/api/service'
const state = {
  categories: []
}
const getters = {
  getProductCategories: (state) => {
    return state.categories
  }
}
const actions = {
  fetchProducts({ commit }, query) {
    return fetchProducts(query).then((resp) => {
      return resp
    })
  },

  fetchQuote({ commit }, query) {
    return fetchQuote(query).then((resp) => {
      return resp
    })
  },
  fetchProductCategories({ commit }, query) {
    return fetchProductCategories(query).then((resp) => {
      return resp
    })
  },

  fetchProductCategoryTree({ commit }) {
    return fetchCategoryTree().then((resp) => {
      commit('SET_PRODUCT_CATEGORY', resp)
      return resp
    })
  },

  fetchImageByProductId({ commit }, id) {
    return fetchImagesByProductId(id).then((resp) => {
      return resp
    })
  },
  getProductById({ commit }, id) {
    return getProductById(id).then((resp) => {
      return resp
    })
  },

  getProductCategoryById({ commit }, id) {
    return getProductCategoryById(id).then((resp) => {
      return resp
    })
  },
  updateProduct({ commit }, { id, data }) {
    console.log(id, data)
    return updateProduct(id, data).then((resp) => {
      window.ELEPHANT.$emit('SHOW_SNACKBAR', {
        show: true,
        text: 'Product updated.',
        color: 'success'
      })
      return resp
    })
  },
  updateProductCategory({ commit }, { id, data }) {
    return updateProductCategory(id, data).then((resp) => {
      window.ELEPHANT.$emit('SHOW_SNACKBAR', {
        show: true,
        text: 'Category updated.',
        color: 'success'
      })
      return resp
    })
  }
}
const mutations = {
  SET_PRODUCT_CATEGORY(state, { data }) {
    state.categories = data
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
