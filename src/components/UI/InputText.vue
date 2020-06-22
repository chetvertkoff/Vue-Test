<template>
  <div :class="inputClass">
    <label>{{inputLabel}}</label>
    <input 
      type="text"
      v-model.trim="text"
      v-on:change="changeText"
      v-bind:placeholder="inputPlaceHolder"
    >
  </div>
</template>

<script>
  export default {
    props:{
      inputClass: String,
      inputLabel: String,
      inputText: String,
      inputPlaceHolder: String
    },
    data(){
     return{
       text: this.inputText
     }
    },
    methods:{
      changeText(){
        this.$emit('change-textInput', this.text)
      }
    },
    watch:{
      inputText: function(val){
        this.text = val
      }
    }
  }
</script>



