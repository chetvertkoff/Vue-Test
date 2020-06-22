<template>
  <ul class="comments" v-if="comments.length">
    <CommentItem 
      v-for="comment of comments"
      v-bind:key="comment.id"
      v-bind:comment="comment"
      v-bind:isEditable="isEditable"
      v-on:delete-comment="deleteComment"
    />
  </ul>
  <p v-else>К данной записи пока нет комментариев</p>
</template>

<script>
  import CommentItem from '@/components/PostComments/CommentItem'
  import Post from '../../lib/PostClass'

  export default {
    props:{
      comments: Array,
      isEditable: Boolean
    },
    components:{
      CommentItem
    },
    methods:{
      deleteComment(commentId){
        this.$emit('delete-comment', commentId)
      }
    }
  }
</script>