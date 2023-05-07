<!-- <template>
  <div>
    <HeaderComponent />
      <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  // name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>


margin-top: 60px; -->
<!-- text-align: center; -->

<template>
  <div>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
  </div>
</template>


<script>

  import HeaderComponent from '@/components/Header'
  import FooterComponent from '@/components/Footer'

  export default {
  name: 'App',

    components: {
      HeaderComponent,
      FooterComponent
    }

  }
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style> -->