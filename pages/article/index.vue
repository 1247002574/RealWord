<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{article.title}}</h1>
      <ArticleMeta :article="article"/>
     

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
    </div>

    <hr />

    <div class="article-actions">
     <ArticleMeta :article="article"/>
    </div>

    <div class="row">
      <ArticleComment :article="article"/>
    </div>

  </div>

</div>
</template>

<script>
import {getArticle} from '@/api/article'
import ArticleMeta from './components/article-meta'
import ArticleComment from './components/article-comment'
import MarkDownIt from 'markdown-it'

export default {
  name:'article',
  async asyncData({params}){
    const {data} = await getArticle(params.slug)
    const md = new MarkDownIt()
    const {article} = data
    article.body = md.render(article.body)
    return {
      article
    }
  },
  components:{
    ArticleMeta,
    ArticleComment
  },
  head () {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
