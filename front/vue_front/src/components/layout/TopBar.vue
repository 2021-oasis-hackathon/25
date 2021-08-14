<template>
 <div>
    <!--    <div :class="{'form-bg-on':fade, 'form-bg-on':!fade}" > </div>  -->
            <div class="top">
                <router-link to="/">
                    <img src="@/assets/logo.png" class="logo" />
                </router-link>
            <form action="">
                <input class="form-control" type="text" style="text-align:center" value="어디로 갈까" aria-label="readonly input example">
                <button type="submit" class="btn btn-primary">검색</button>
            </form>
            </div>       
 </div> 
</template>

<script>

export default {
    
    name: 'BottomBar',
    data() {
        return {
            fade: true,
        }
    }, 
    methods : {
        fadeOut:function() {
            console.log("1");
        }
    },
    mounted() {
        document.addEventListener('wheelEvent', this.fadeOut)
    },
    unmounted() {
    },
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
    margin: 0px 0px 10px 0px;
    height: 65px;
    box-shadow: 10px 5px 5px rgb(20, 8, 8);
    background: rgba(76, 26, 28, 0.8);
    
}
.fom-control{
    padding: 0px;
}
input{
    border-radius: 20px;
    margin-right: 14px;
    margin-bottom: 10px;
    margin-top: 10px;
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
.logo{
    width: 45px;
    height: 45px ;
    background: white;
    display: flex;
    margin: 10px 7px 10px 5px;
    border-radius: 30px;
}
.btn{
    margin-right:5px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    font-size: 1em;
    font:icon;
    background: rgb(222, 225, 230);
}
.asdf{
    position:absolute;
    top: 30%;
    left: 50%;
}
</style>