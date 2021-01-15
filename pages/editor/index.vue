<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="createArticle()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group" v-if="!slug">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="article.tagList"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="submit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle, getArticle, updateArticle } from '@/api/article'
import _ from 'lodash'
export default {
  //在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'nologin',
  name: 'editor',
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: '',
      },
      slug: null,
    }
  },
  async mounted() {
    const { params } = this.$route
    const { slug } = params || {}
    if (slug) {
      this.slug = slug
      const {
        data: { article },
      } = await getArticle(slug)
      const newArticle = _.pick(article, ['title', 'description', 'body'])
      this.article = newArticle
    }
  },
  methods: {
    async createArticle() {
      if (this.slug) {
        const {
          status,
          data: {
            article: { slug },
          },
        } = await updateArticle({
          slug: this.slug,
          article: this.article,
        })
        console.log(res)
      } else {
        this.article.tagList = this.article.tagList.split(',')
        const {
          status,
          data: {
            article: { slug },
          },
        } = await addArticle({ article: this.article })
      }
      if (status === 200) {
        this.$router.push(`/article/${slug}`)
      } else {
        alert('发布失败')
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
