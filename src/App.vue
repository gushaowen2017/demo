<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <gsw-pay
      v-model="show"
      ref="pays"
      @close="close"
      @forget="forget"
      @input-end="inputEnd"/>

    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: '', //

    }
  },
  methods:{
    close(){},
    forget(){},
    inputEnd(){},
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
