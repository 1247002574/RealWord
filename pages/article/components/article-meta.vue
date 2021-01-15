<template>
  <div class="page">
    <div class="article-meta">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        ><img :src="article.author.image"
      /></nuxt-link>
      <div class="info">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: article.author.username,
            },
          }"
          class="author"
        >
          {{ article.author.username }}
        </nuxt-link>
        <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
      </div>
      <template v-if="user.username === article.author.username">
        <button class="btn btn-sm btn-outline-secondary" @click="toEditor()">
          <i class="ion-edit"></i>
          &nbsp; Edit Article
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-trash-b"></i>
          &nbsp; Delete Article
          <span class="counter">({{ article.favoritesCount }})</span>
        </button>
      </template>
      <template v-else>
        <button
          class="btn btn-sm btn-outline-secondary"
          :class="{
            active: article.author.following,
          }"
        >
          <i class="ion-plus-round"></i>
          &nbsp; Follow Eric Simons
        </button>
        &nbsp;&nbsp;
        <button
          class="btn btn-sm btn-outline-primary"
          :class="{
            active: article.favorited,
          }"
        >
          <i class="ion-heart"></i>
          &nbsp; Favorite Post
          <span class="counter">({{ article.favoritesCount }})</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'articleFav',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    toEditor() {
      this.$router.push(`/editor/${this.article.slug}`)
    },
  },
}
</script>

<style scoped lang="stylus"></style>
