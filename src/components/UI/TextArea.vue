<template>
<div>
  <textarea
    v-bind:placeholder="textPlaceHolder"
    v-bind:class="className"
    v-on:change="getText"
    v-model.trim="text"
  ></textarea>
</div>
</template>

<script>
  export default {
    props:{
      textPlaceHolder: String,
      textTextArea: String,
      className: String
    },
    data(){
      return {
        text: this.textTextArea
      }
    },
    methods:{
      getText(){
        this.$emit('change-textArea', this.text)
      }
    },
    watch:{
      textTextArea: function(val){
        this.text = val
      }
    }
  }
</script>