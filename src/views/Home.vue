<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <i-home theme="filled" size="32" fill="#17bd08" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
