<template>
 <div>
        <div :class="{'form-bg-on':fade}" @scroll="fadeOut"> </div>
            <div class="top">
                <router-link to="/">
                    <img src="@/assets/logo.png" class="logo" />
                </router-link>
            <form action="">
                <input class="form-control" type="text" style="text-align:center" value="어디로 갈까" aria-label="readonly input example">
                <button type="submit" class="btn btn-primary">검색하기</button>
            </form>
            </div>
        
        <div id="container">
    </div>

 </div> 
</template>

<script>

export default {
    
    name: 'BottomBar',
    data() {
        return {
            fade: true,
            show: true,
        }
    }, 
    methods : {
        fadeOut() {
            console.log(this.scrollTop());
        }, 
    }
}
</script>

<style scoped>
form{
    display: flex;
    width: 100%;
}
.top{
    text-align: center;
    align-items: center;
    display: flex;
    align-items: stretch;
    margin: 10px 25px 10px 10px;
}
.fom-control{
    padding: 0px;
}
input{
    border-radius: 20px;
    margin-right: 15px;
}
button{
    border-radius: 20px;
}
.form-bg-on{
    width: 100%;
    height: 82px;
    position: fixed;
    background: grey;
    z-index: -1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter{
    opacity:  0;
}
.logo{
    width: 45px;
    height: 45px ;
    background: white;
    display: flex;
    margin: 10px 7px 10px 5px;
    border-radius: 30px;
}

</style>