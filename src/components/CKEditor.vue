<template>
  <ckeditor :editor="editor" v-model="editorData" v-on:blur="getBody"></ckeditor>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    props:{
      postBody: String
    },
    data() {
      return {
          editor: ClassicEditor,
          editorData: this.postBody
      }
    },
    methods:{
      getBody(){
        this.$emit('sendBody', this.editorData)
      }
    },
    watch:{
      postBody(newVal){
        this.editorData = newVal
      }
    }
  }
</script>