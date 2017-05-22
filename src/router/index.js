import Vue from 'vue'
import Router from 'vue-router'

import ItemView from '../views/ItemView.vue'
import renderList from '../views/RenderList'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/top-rated/:page(\\d+)?', component: renderList('top-rated') },
      { path: '/popular/:page(\\d+)?', component: renderList('popular') },
      { path: '/newest/:page(\\d+)?', component: renderList('newest') },
      { path: '/', redirect: '/top-rated' }
    ]
  })
}