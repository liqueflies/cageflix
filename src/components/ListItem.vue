<template>
  <li class="col-xs-6 col-sm-4 col-md-3">
    <router-link class="poster" :to="'/item/' + item.id">
      <div>
        <img v-if="poster" class="image" :src="poster" :alt="item.title" />
        <img v-else class="image" :src="'http://placehold.it/185x278?text=missing image'" :alt="item.title" />
      </div>
      <h2 class="title">{{item.title}}</h2>
    </router-link>
  </li>
</template>

<script>

  export default {

    name: 'list-item',

    // serverCacheKey: function (props) {
    //   return props.item.title + '::' + props.item.id
    // },

    props: {
      item: Object
    },

    computed: {
      poster () {
        if (this.item.poster_path) {
          return `http://image.tmdb.org/t/p/w185/${this.item.poster_path}`
        } else {
          return false
        }
      }
    },

  }
</script>

<style lang="stylus" scoped>
.poster
  display: inline-block
  // .image
  //   max-width: 220px

  &:hover
    text-decoration: none

    .image
      transform: scale3d(1.2, 1.2, 1) perspective(1px)

    .title
      opacity: 1
      transform: translateY(25px)

.image
  max-width: 100%
  height: auto
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  will-change: transform
  // opacity: 0
  // transform: scale(0)
  transition: all .35s cubic-bezier(0.165, 0.84, 0.44, 1)
  transition-property: transform, opacity

// .image.is-loaded
//   opacity: 1
//   transform: scale(1)

.caption
  // padding-bottom: 8em
  
.title
  font-size: 16px
  font-weight: 700
  min-height: 4em
  color: white
  transition: all .35s cubic-bezier(0.165, 0.84, 0.44, 1)
  transition-property: transform
  will-change: transform
  // text-align: left

.overview
  font-size: 8px
</style>