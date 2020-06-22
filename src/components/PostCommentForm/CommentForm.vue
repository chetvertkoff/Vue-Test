<template>
  <div class="comment_form">
    <h2>Оставить комментарий</h2>
    <InputText 
      v-bind:inputClass="'input'"
      v-bind:inputLabel="'Ваше имя'"
      v-bind:inputText="name"
      v-bind:inputPlaceHolder="'Имя'"
      v-on:change-textInput="getName"
    />
    <TextArea 
      v-bind:textPlaceHolder="'Введите текст'"
      v-bind:textTextArea="commentText"
      v-bind:className="'textarea'"
      v-on:change-textArea="getText"
    />
    <button v-on:click="sendComment">Отправить</button>
  </div>
</template>

<script>
  import InputText from '@/components/UI/InputText'
  import TextArea from '@/components/UI/TextArea'
  import Post from '../../lib/PostClass'

  export default {
    props:{
      id: Number
    },
    data(){
      return{
        name: '',
        commentText: ''
      }
    },
    components:{
      InputText,
      TextArea
    },
    methods:{
      getName(name){
        this.name = name 
      },
      getText(text){
        this.commentText = text
      },
      sendComment(){
        if(this.name && this.commentText){
          const newComments = Post.addComment(this.id, this.name, this.commentText).comments
          this.$emit('update-comments', newComments)
          this.name = ''
          this.commentText = ''
        }
      }
    }
  }
</script>