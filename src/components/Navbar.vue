<template>
  <header id="site-header">
    <router-link to="/">
      <h1>
        <img id="site-logo" src="../assets/logo.png" alt="logo" />
      </h1>
    </router-link>
    <nav id="site-nav">
      <ul>
        <li class="nav-item">
          <router-link to="/top-rated">Top rated</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/popular">Popular</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/newest">Newest</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="stylus">
#site-header
  width: 100%
  height: 72px
  background-color: transparent
  display: flex
  white-space: nowrap
  padding: 0 40px
  align-items: center

#site-logo
  height: 34px

#site-nav
  margin: 0 30px
  ul
    padding: 0
    margin: 0

.nav-item
  margin: 0 10px
  a
    font-size: 15px
    font-weight: 700
</style>