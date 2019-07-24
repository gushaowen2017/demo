<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <gsw-pay
      v-model="show"
      ref="pays"
      @close="close"
      @forget="forget"
      @input-end="inputEnd"/>

    <div>
      <h4>标记</h4>
      <div class="badge-box">
        <gswBadge value="76">待签收</gswBadge>
      </div>
      <div class="badge-box">
        <gswBadge value="809">待签收</gswBadge>
      </div>
      <div class="badge-box">
        <gswBadge value="new">待签收</gswBadge>
      </div>
      <div class="badge-box">
        <gswBadge value="hot">待签收</gswBadge>
      </div>
      <div class="badge-box">
        <gswBadge value="809" :dot="true">待签收</gswBadge>
      </div>
    </div>
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
h4{text-align: center;}
.badge-box{color: #333;padding: 5px 10px;border: 1px solid #ddd;width: 100px;margin: 20px auto;text-align: center;}
</style>
