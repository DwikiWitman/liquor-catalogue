import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import drinksdata from './drinks.js'
import descriptiondata from './description.js'

export const state = () => ({
  cataloguedata: [],
  productdata: [],
  productdetaildata: {},
  cart: []
})

export const getters = {
  cartTotal: (state) => {
    if (!state.cart.length) {
      return 0
    }
    return state.cart.reduce((total, nextItem) => total + +nextItem.total, 0)
  },
  cartItemCount: (state) => {
    if (!state.cart.length) {
      return 0
    }
    return state.cart.reduce((totalQuantity, nextItem) => totalQuantity + +nextItem.quantity, 0)
  }
}

export const mutations = {
  updateCatalogueData: (state, data) => {
    state.cataloguedata = data
  },
  updateProductData: (state, data) => {
    state.productdata = data
  },
  updateProductDetailData: (state, data) => {
    state.productdetaildata = data
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4()
    state.cart.push(formOutput)
  }
}

export const actions = {
  async getCatalogueData ({
    state,
    commit
  }) {
    try {
      // fetch catalogue data
      await fetch(
        'http://thecocktaildb.com/api/json/v1/1/list.php?c=list', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then((data) => {
          const catalogues = []
          for (const catalogue of data.drinks) {
            catalogues.push(catalogue.strCategory)
          }
          // console.log(catalogues)
          commit('updateCatalogueData', catalogues)
        })
    } catch (err) {
      console.log(err)
    }
  },

  async getProductData ({
    state,
    commit
  }, selectedCatalogue) {
    let drinks = []
    await axios.get('http://thecocktaildb.com/api/json/v1/1/filter.php?c=' + selectedCatalogue)
      .then((response) => {
        for (const drink of response.data.drinks) {
          drinks.push(drink)
        }
      })
      .catch((err) => {
        drinks = [...drinksdata]
        console.log(err)
      })
    const drinkscomplete = []
    for (const drink of drinks) {
      const drinkdesc = {
        ...drink,
        description: descriptiondata[Math.floor(Math.random() * descriptiondata.length, descriptiondata.length)]
      }
      drinkscomplete.push(drinkdesc)
    }
    commit('updateProductData', drinkscomplete)
    console.log(drinkscomplete)
  },

  async getProductDetailData ({
    state,
    commit
  }, productId) {
    // fetch product detail data
    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + productId)
      .then((response) => {
        const productdetail = response.data.drinks[0]
        console.log(productdetail)
        commit('updateProductDetailData', productdetail)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
