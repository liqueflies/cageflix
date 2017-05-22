import ListView from './ListView.vue'

export default function renderList (type) {
  return {
    name: `${type}-movies`,
    // this will be called during SSR to pre-fetch data into the store!
    asyncData ({ store }) {
      return store.dispatch('fetchMovieList', { type, to: store.state.route.params.page })
    },
    render (h) {
      return h(ListView, {
        props: { type }
      })
    }
  }
}