<template>
   <div class="col-xs-12 col-md-8 offset-md-2">

        <form class="card comment-form" @submit.prevent="myAddComment()">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="comment.body"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        
        <div class="card" v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            {{comment.body}}
          </div>
          <div class="card-footer">
            <nuxt-link :to="{
                name:'profile',
                params:{
                  username:comment.author.username
                }
              }" class="comment-author">
              <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>
            &nbsp;
            <nuxt-link :to="{
                name:'profile',
                params:{
                  username:comment.author.username
                }
              }" class="comment-author">{{comment.author.username}}</nuxt-link>
            <span class="date-posted">{{comment.createdAt | date('MMM DD,YYYY')}}</span>
          </div>
        </div>

        
      </div>

</template>

<script>
import {getComments,addComment} from '@/api/article'
export default {
  name:'comments',
  props:{
    article:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      comments:[],
      slug:this.article.slug,
      comment:{
        body:''
      }
    }
  },
  async mounted(){
    const {data} =  await getComments(this.slug)
    this.comments = data.comments
  },
  methods:{
    async myAddComment(){
      const res = await addComment({slug:this.slug,comment:this.comment})
      console.log(res);
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
