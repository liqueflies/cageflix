<template>
  <div class="paginator">
    <router-link class="item" v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
    <a v-else class="disabled item">&lt; prev</a>
    <span class="item">{{ page }}/{{ totalPages }}</span>
    <router-link class="item" v-if="totalPages > page" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
    <a v-else class="disabled item">more &gt;</a>
  </div>
</template>

<script>
  export default {
    props: {
      page: Number,
      totalPages: Number,
      type: String
    }
  }
</script>

<style lang="stylus" scoped>
.paginator
  margin: 1em 0

.item
  padding: 10px
  font-size: 16px
  font-weight: 700

.link
  color: white

.link:hover, .link:active, .link:focus
  text-decoration: none

.router-link-active
  color: #e50914

.disabled
  color: #560000

.navigate
  font-size: 18px
  font-weight: 700
</style>