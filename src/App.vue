<template>
  <div id="app">
    <navbar />
    <transition name="slide-down" mode="out-in">
      <router-view class="container relative"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {

  name: 'app',

  components: {
    Navbar
  }
  
}
</script>

<style lang="stylus">
* { box-sizing: border-box }

body
  background: #000;
  margin: 0
  padding: 0
  overflow-x: hidden

#app
  font-family: 'Arimo', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #fff

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block

a
  &, &:focus, &:active, &:visited
    color: #E50914
    text-decoration: none

  &:hover
    text-decoration: none
    color: #fff

  &.router-link-active
    color: #fff

.container
  transition: all .5s cubic-bezier(0.23, 1, 0.32, 1)
  transition-property: transform, opacity
  
.slide-down-enter
  opacity 0
  transform translate(0, 30px)

.slide-down-leave-active
  opacity 0
  transform translate(0, -30px)
</style>
