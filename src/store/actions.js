import types from './types'
import { API_KEY, NICOLAS_ID, DISCOVER_BASE, MOVIE_BASE } from './constants'
import { request } from '../utils'

const DISCOVER_URL = `${DISCOVER_BASE}?api_key=${API_KEY}&with_cast=${NICOLAS_ID}`

export default {

  fetchMovieList: ({ dispatch }, { type, to = 1 }) => {
    let sortType = '&sort_by=';

    // check for sort param
    switch (type) {
      case 'top-rated':
        sortType += 'vote_count.desc'
        break

      case 'newest':
        sortType += 'release_date.desc'
        break

      case 'popular':
        sortType += 'popularity.desc'
    }

    return request(DISCOVER_URL + '&page=' + to + sortType)
      .then(payload => {
        dispatch('setMovieList', payload.results)
        dispatch('setTotalPages', payload.total_pages)
        dispatch('setListType', type)
      })
  },

  fetchMovieItem: ({ dispatch, getters }, { id }) => {
    // if (!getters.movieItemList.filter(m => m.id === id).length) {
    return request(`${MOVIE_BASE + id}?api_key=${API_KEY}&append_to_response=videos`)
      .then(payload => {
        // dispatch('setCurrentMovie', id)
        dispatch('setMovieItem', payload)
      })
    // }
  },

  setMovieList: ({ commit }, list) => {
    return commit(types.SET_MOVIE_LIST, list)
  },

  setMovieItem: ({ commit }, item) => {
    return commit(types.SET_MOVIE_ITEM, item)
  },

  // setCurrentMovie: ({ commit }, id) => {
  //   return commit(types.SET_CURRENT_MOVIE, id)
  // },

  setListType: ({ commit }, type) => {
    return commit(types.SET_LIST_TYPE, type)
  },

  setTotalPages: ({ commit }, totPages) => {
    return commit(types.SET_TOTAL_PAGES, totPages)
  },

}
