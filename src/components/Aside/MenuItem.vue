<template>
  <li class="menuItem">
    <router-link v-bind:to="menuItem.url" exact>
      <i v-bind:class="menuItem.icon" class="fa"></i>
      {{menuItem.label}}
    </router-link>
  </li>
</template>

<script>
  export default {
    props:{
      menuItem:Object
    }
  }
</script>