import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

/* State shape
{
  listType: null,
  totalPages: 1,
  movieList: [],
  movieItemList: [],
  currentItem: null
}
*/


export function createStore () {
  const state = {
    listType: null,
    totalPages: 1,
    movieList: [],
    movie: null
    // movieItemList: []
    // currentItem: null
  }
  
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}
