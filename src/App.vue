<template>
  <div id="app">
    <Header />
    <Aside />
    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Aside from '@/components/Aside/Aside'

  export default {
    components:{
      Header,
      Aside
    }
  }
</script>

