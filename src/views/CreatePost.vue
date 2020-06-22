<template>
  <div class="post create">
    <h1>Создание новой записи</h1>
    <InputText 
      v-bind:inputClass="'titleEdit'"
      v-bind:inputLabel="'Заголовок'"
      v-bind:inputText="postTitle"
      v-on:change-textInput="getText"
    />
    <div class="bodyEdit">
      <label>Описание</label>
      <CKEditor 
        v-on:sendBody="getBody" 
        v-bind:postBody="postBody"
      />
    </div>
    <button v-on:click="create">Создать</button>
  </div>
</template>

<script>
  import CKEditor from '@/components/CKEditor'
  import InputText from '@/components/UI/InputText'
  import Post from '../lib/PostClass'

  export default {
    data(){
      return {
        postTitle:'',
        postBody:''
      }
    },
    components:{
      CKEditor,
      InputText
    },
    methods:{
      getBody(editorData){
        this.postBody = editorData
      },
      create(){

        if(this.postTitle && this.postBody){
          if(Post.createPost(this.postTitle, this.postBody)){
            this.$router.push('/')
          }
        }
      },
      getText(val){
        this.postTitle = val
      }
    }
  }
</script>