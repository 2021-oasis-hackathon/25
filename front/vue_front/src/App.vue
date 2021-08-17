<template>

<w-app>
  <!-- All your app content goes here. -->
        <router-view class="one-page"/>
      <BottomBar class="bottom-bar bar" />

</w-app>


</template>

<script>
import BottomBar from "./components/layout/BottomBar.vue"

export default {

  name: 'App',

  data: () => ({
    //
  }),
  components : {
    BottomBar,
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.main-img{
  width: 100%;
  z-index: -1;
}
.bottom-bar{
  
  width:100%;
  position: fixed;
  bottom:0px;
}
.content{
  margin: 68px 0px 60px;
}
.bar{
  z-index: 10000;
}
.one-page{
  margin-bottom: 65px;
}
</style>