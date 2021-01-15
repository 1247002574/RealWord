<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link 
                class="nav-link"
                :class="{
                  active:tab==='your_feed'
                }"
                exact
                :to="{
                  name:'home',
                  query:{
                    tab:'your_feed',
                  }
                }" 
              >
                Your Feed
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
                class="nav-link"
                :class="{
                  active:tab==='global_feed'
                }"
                exact
                :to="{
                  name:'home',
                }"
              >
                Global Feed
              </nuxt-link>
            </li>
            <li class="nav-item" v-if="$route.query.tag">
              <nuxt-link 
                class="nav-link"
                :class="{
                  active:tab === 'tag'
                }"
                exact
                :to="{
                  name:'home',
                  query:{
                    tab:'tag',
                    tag:tag
                  }
                }"
              >
                #{{tag}}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slag">
          <div class="article-meta">
            <nuxt-link :to="{
              name:'profile',
              params:{
                username:article.author.username
              }
            }">
              <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link :to="{
              name:'profile',
              params:{
                username:article.author.username
              }
            }" class="author">
                {{article.author.username}}
              </nuxt-link>
              <span class="date">{{article.createdAt | date('MMM DD,YYYY')}}</span>
            </div>
            <button 
              class="btn btn-outline-primary btn-sm pull-xs-right" 
              :class="{
                active:article.favorited
              }"
              @click="onFavArticle(article)"
            >
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{
            name:'article',
            params:{
              slug:article.slug
            }
          }" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <!-- 分页列表 -->
        <nav>
          <ul class="pahination">
            <li class="page-item" 
            :class="{
              active:item===page
            }"
            v-for="item in getPages" 
            :key="item">
              <nuxt-link :to="{
                name:'home',
                query:{
                  tab:tab,
                  tag:$route.query.tag,
                  page:item
                }
              }" class="page-link">
                {{item}}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- 分页列表 -->
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link 
            :to="{
              name:'home',
              query:{
                tab:'tag',
                tag:item
              }
            }"
            v-for="item in tags"
            :key="item"
            class="tag-pill tag-default"
            >{{item}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import {getArticles,getYourFeedArticles,deleteFavorite,addFavorite} from '@/api/article'
import {getTags} from '@/api/tag'
import {mapState} from 'vuex'

export default {
  name:'HomeIndex',
  async asyncData({query}){
    const limit = 20
    const page = +query.page || 1
    const tag = query.tag
    const tab = query.tab || 'global_feed'
    const loadArticles = query.tab==='your_feed' ?  getYourFeedArticles :getArticles
    const [ articleRes, tagRes ] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      getTags()
    ])
    const {articles,articlesCount} = articleRes.data
    const {tags} =tagRes.data
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    }
  },
  watchQuery:['page','tag', 'tab'],
  computed:{
    ...mapState(['user']),
    getPages(){
      return Math.ceil(this.articlesCount/this.limit)
    }
  },
  methods:{
    async onFavArticle(article){
      console.log(article);
      if(article.favorited){
        await deleteFavorite(article.slug)
        article.favcount--
        article.favorited = false
      }else{
        await addFavorite(article.slug)
        article.favcount++
        article.favorited = true
      }
    }
  }

}
</script>

<style scoped lang="stylus">
</style>
