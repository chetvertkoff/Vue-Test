<template>
  <div class="post">
    <h1>{{post.title}}</h1>
    <router-link v-bind:to="'/edit/'+post.id" class="edit">Редактировать запись</router-link>
    <div class="body_detail" v-html="post.body"></div>
    <CommentForm 
      v-bind:id="+$route.params.id" 
      v-on:update-comments="updateComments"
    />
    <Comments v-bind:comments="comments" />
  </div>
</template>

<script>
  import Post from '../lib/PostClass'
  import CommentForm from '@/components/PostCommentForm/CommentForm'
  import Comments from '@/components/PostComments/Comments'

  export default {
    data(){
      return{
        post:{},
        comments: []
      }
    },
    mounted(){
      const post = Post.getPost(this.$route.params.id)
      this.post = post
      this.comments = post.comments
    },
    components:{
      CommentForm,
      Comments
    },
    methods:{
      updateComments(comments){
        this.comments = comments
      }
    }
  }
</script>
