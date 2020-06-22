<template>
  <ul>
    <MenuItem 
      v-for="(menuItem, i) of menuItems" 
      v-bind:key="i"
      v-bind:menuItem="menuItem"
    />
  </ul>
</template>

<script >
  import MenuItem from '@/components/Aside/MenuItem'
  export default{
    data(){
      return{
        menuItems:[
          {
              label: 'Главная',
              url: '/',
              icon: 'fa-home'
          },
          {
              label: 'Новая запись',
              url: '/create',
              icon: 'fa-file-text'
          }
        ]
      }
    },
    components:{
      MenuItem
    }
  }
</script>

