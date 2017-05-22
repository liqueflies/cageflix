<template>
  <div>
    <paginator :page="page" :totalPages="totalPages" :type="type" />
    <transition mode="out-in" :name="transition">
      <div class="movie-list" :key="currentPage">
        <ol class="row">
          <list-item v-for="item in movieList" :key="item.id" :item="item">
          </list-item>
        </ol>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import ListItem from '../components/ListItem.vue'
  import Paginator from '../components/Paginator.vue'

  let isFirstRender = true

  export default {

    name: 'list-view',

    data () {

      const data = {
        transition: null,
        currentPage: isFirstRender ? Number(this.$store.state.route.params.page) || 1 : -1,
        movieList: this.$store.getters.movieList
      }

      isFirstRender = false
      return data
    },

    props: {
      type: String
    },

    computed: {

      ...mapGetters([
        'totalPages'
      ]),

      page () {
        return Number(this.$store.state.route.params.page) || 1
      }

    },

    methods: {

      ...mapActions([
        'fetchMovieList',
      ]),

      loadItems (type, to, from = -1) {
        this.fetchMovieList({ type, to })
        .then(() => {
          this.transition = from === -1
            ? null
            : to > from ? 'slide-left' : 'slide-right'
          this.currentPage = to
          this.movieList = this.$store.getters.movieList
        });
      }
      
    },

    beforeMount () {
      if (this.$root._isMounted) {
        this.loadItems(this.type, this.page);
      }
    },

    watch: {

      page (to, from = -1) {
        this.loadItems(this.type, to, from);
      }
      
    },

    components: {
      ListItem,
      Paginator
    }

  }
</script>

<style lang="stylus" scoped>

.relative
  position: relative

.movie-list
  margin 30px 0
  width 100%
  transition: all .5s cubic-bezier(0.23, 1, 0.32, 1)
  transition-property: transform, opacity
  
.slide-left-enter, .slide-right-leave-active
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-active, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

</style>