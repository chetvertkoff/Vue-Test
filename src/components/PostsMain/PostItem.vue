<template>
  <li class="post_item">
    <h2 class="title">
      <router-link v-bind:to="'/post/'+post.id">
        {{post.title}}
      </router-link>
    </h2>
    <div class="body" v-html="post.preview"></div>
    <div>
      <p class="comment_count">Кол-во комментарий: {{post.commentCount}}</p>
      <router-link 
        v-bind:to="'/post/'+post.id"
        class="go_full"
      >Перейти
      </router-link>
    </div>
  </li>
</template>

<script>
  export default {
    props:{
      post: Object
    }
  }
</script>