<template>
  <div class="post edit">
      <h1>Редактирование {{postName}}</h1>
      <InputText 
        v-bind:inputClass="'titleEdit'"
        v-bind:inputLabel="'Заголовок'"
        v-bind:inputText="postName"
        v-on:change-textInput="changePostName"
      />
      <div class="bodyEdit">
        <label>Описание</label>
        <CKEditor 
          v-bind:postBody="postBody" 
          v-on:sendBody="changePostBody"
        />
      </div>
      <div class="buttonGroup">
        <button v-on:click="updatePost">Обновить</button>
        <button class="dangerButton" v-on:click="removePost">Удалить</button>
      </div>
      <Comments 
        v-bind:comments="comments" 
        v-bind:isEditable="true"
        v-on:delete-comment="deleteComment"
      />
  </div>
</template>

<script>
  import InputText from '@/components/UI/InputText'
  import CKEditor from '@/components/CKEditor'
  import Comments from '@/components/PostComments/Comments'
  import Post from '../lib/PostClass'

  export default {
    data(){
      return {
        postName: '',
        postBody: '',
        comments: []
      }
    },
    components:{
      InputText,
      CKEditor,
      Comments
    },
    beforeMount(){
      const post = Post.getPost(this.$route.params.id)
      this.postName = post.title
      this.postBody = post.body
      this.comments = post.comments
    },
    methods:{
      changePostName(name){
        this.postName = name
      },
      changePostBody(text){
        this.postBody = text
      },
      deleteComment(commentId){        
        const newComments = Post.removeComment(this.$route.params.id, commentId)
        this.comments = newComments
      },
      updatePost(){
        const newPost = Post.updatePost(this.$route.params.id, this.postName, this.postBody)
        this.postName = newPost.title
        this.postBody = newPost.body
      },
      removePost(){
        Post.removePost(this.$route.params.id)
        this.$router.push('/')
      }
    }
  }
</script>