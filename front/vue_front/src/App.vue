<template> 
  
  <div>
    <TopBar class="top-bar bar"/> 
    <div class="content">
      <router-view/>
    </div>
    <BottomBar class="bottom-bar bar"/>
  </div>
</template>
<script>
import TopBar from "./components/layout/TopBar.vue"
import BottomBar from "./components/layout/BottomBar.vue"

export default {
  name : "App", 
  components : {
    TopBar,
    BottomBar,
  },
  head: {
    title: "asdf",
  }

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
.top-bar{
  width: 100%;
  position:fixed;
  align-items: stretch;
  top:0px;
}
.bottom-bar{
  
  width:100%;
  position: fixed;
  bottom:0px;
}
.content{
  margin: 68px 0px 46px;
}
.bar{
  z-index: 10000;
}
</style>
