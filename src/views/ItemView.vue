<template>
  <article id="movie-detail">
    <template v-if="movie">
      <div class="row relative">
        <div class="col-sm-12">
          <div class="backdrop" :style="`background-image: url('http://image.tmdb.org/t/p/w1280${movie.backdrop_path}');`"></div>
        </div>
        <div class="absolute">
          <div class="col-sm-8 col-sm-push-2">
            <div class="row">
              <div class="col-sm-5">
                <img class="img-responsive" v-if="poster" :alt="movie.title" :src="poster" /> 
                <img class="img-responsive" v-else :alt="movie.title" :src="'http://placehold.it/500x750?text=missing image'" /> 
              </div>
              <div class="col-sm-6">
                <div class="content">
                  <h1 class="title">
                    {{ movie.title }}
                  </h1>
                  <p class="tagline">
                    {{ movie.tagline }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row description">
        <div class="col-sm-8 col-sm-push-2">
          <div class="row">
            <div class="col-sm-7 col-sm-push-5">
              <div class="content">
                <p> {{ movie.overview }} </p>
                <div v-if="hasVideos">
                  <h2 class="section"> Trailer </h2>
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${trailer.key}`" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
                <h2 class="section"> Runtime </h2>
                <p> {{ movie.runtime }} mins</p>
                <h2 class="section"> Genres </h2>
                <ul class="genres">
                  <li v-for="genre in movie.genres" :key="genre.id"> {{ genre.name }} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h2> No movie were found </h2>
      <pre>
        {{ currentId }}
        {{ movie }}
      </pre>
    </template>
  </article>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    
    computed: {

      ...mapGetters([
        'movie'
      ]),

      hasVideos () {
        return this.movie.videos ? this.movie.videos.results.length : false
      },

      trailer () {
        return this.movie.videos.results[0]
      },

      poster () {
        if (this.movie.poster_path) {
          return `http://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
        } else {
          return false
        }
      }

    },

    methods: {
      ...mapActions([
        'fetchMovieItem',
      ]),
    },

    asyncData ({ store, route: { params: { id }} }) {
      return store.dispatch('fetchMovieItem', { id })
    }

  }
</script>

<style lang="stylus" scoped>

p
  font-size: 18px
  line-height: 28px

.relative
  position: relative

.absolute
  position: absolute
  top: 80px
  left: 0
  right: 0

.description
  margin-top: 40px
  margin-bottom: 40px

.backdrop
  position: relative
  top: 0
  left: 0
  width: 100%
  height: 350px
  background-position: center center
  background-size: cover

  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    z-index: 0
    width: 100%
    height: 100%
    background: rgba(#000, 0.8)

// .poster
//   position: absolute
//   bottom: -80px
//   left: 80px

.content
  text-align: left

.title
  position: relative
  color: #E50914
  font-size: 30px
  font-weight: 700

// .overview
//   font-size: 18px
//   line-height: 1.9

.year
  position: absolute
  top: 10px
  margin-left: 15px
  font-size: 16px
  font-weight: 400

.section
  color: #E50914
  font-size: 18px
  font-weight: 700
  margin-top: 1.5em

.genres
  li
    display: inline-block

    &::before
      content: ", "
    
    &:first-of-type::before
      content: ""

</style>