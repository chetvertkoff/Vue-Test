<template>
  <li class="comment_item">
    <i 
      v-on:click="$emit('delete-comment', comment.id)"
      v-if="isEditable" 
      class="fa fa-trash-o deleteComment"></i>
    <h4>{{comment.author}}</h4>
    <p>{{comment.text}}</p>
  </li>
</template>

<script>
  export default {
    props:{
      comment: Object,
      isEditable: Boolean
    }
  }
</script>