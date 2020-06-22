<template>
  <div>
    <h1>Главная</h1>
    <ul v-if="postCount">
      <PostItem 
        v-for="post of posts" 
        :key="post.id"
        :post="post"
      />
    </ul>
    <p v-else>Записей пока нет</p>
  </div>
</template>

<script>
  import PostItem from '@/components/PostsMain/PostItem'
  import Post from '../lib/PostClass'
  
  export default {
    data(){
      return {
        posts: [],
        postLen: 5,
        postCount: 0
      }
    },
    mounted(){
      const posts = Post.getPosts(['title', 'preview', 'id', 'commentCount'], this.postLen)
      this.posts = posts.data
      this.postCount = posts.count
      window.addEventListener('scroll', this.handleScroll)      
    },
    beforeDestroy(){
      window.removeEventListener('scroll', this.handleScroll)
    },
    components:{
      PostItem
    },
    methods:{
      handleScroll(){
        if(this.postLen > this.postCount) return
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) 
         || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) 
         || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight+50) >= scrollHeight

        if(scrolledToBottom){
          this.postLen+=2
          this.posts.push(...Post.loadPosts(this.postLen, 2))     
        }  
      }
    }
  }
</script>