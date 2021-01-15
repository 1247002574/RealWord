<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>
              {{ user.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                    },
                  }"
                  class="nav-link"
                  :class="{
                    query: tab === 'my_articles',
                  }"
                  exact
                >
                  My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                    },
                    query: {
                      tab: 'fav_article',
                    },
                  }"
                  class="nav-link"
                  :class="{
                    query: tab === 'fav_article',
                  }"
                  exact
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
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
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.createdAt | date('MMM DD,YYYY')
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited,
                }"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.body }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
import { getUser } from '@/api/user'
import { mapState } from 'vuex'
export default {
  middleware: 'nologin',
  name: 'UserProfile',
  async asyncData({ query }) {
    const {
      data: { user },
    } = await getUser()
    const tab = query.tab || 'my_articles'
    const params = tab === 'my_articles' ? 'author' : 'favorited'
    console.log(this.user)
    const {
      data: { articles },
    } = await getArticles({ [params]: user.username })
    console.log(articles)
    return {
      articles,
      user,
      tab,
    }
  },
  watchQuery: ['tab'],
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style scoped lang="stylus"></style>
