import Vue from 'vue'
import types from './types'

export default {

  [types.SET_MOVIE_LIST] (state, list) {
    state.movieList = list
  },

  [types.SET_MOVIE_ITEM] (state, item) {
    // // new in list
    // if (!state.movieItemList.filter(m => m.id == item.id).length) {
    //   // push in list
    //   state.movieItemList = [...state.movieItemList, item]
    // }
    state.movie = item
  },

  [types.SET_LIST_TYPE] (state, type) {
    state.listType = type
  },

  [types.SET_CURRENT_PAGE] (state, page) {
    state.page = page
  },

  [types.SET_TOTAL_PAGES] (state, totPages) {
    state.totalPages = totPages
  },

}
