<template>
 <div >
     <nav>
        <w-divider color="white" class="ma0"></w-divider>
        <div class="bot-imgs">
            <router-link to="/" class="img-margin">
                <img src="../../assets/bot-home.png" class="bot-img" alt="">
            </router-link>

            <router-link to="/map" class="img-margin">
                <img src="../../assets/bot-map.png" class="bot-img">
            </router-link>

            <router-link to="/plan" class="img-margin">
                <img src="../../assets/bot-plan.png" class="bot-img">
            </router-link>

            <router-link to="/community" class="img-margin">
                <img src="../../assets/bot-com.png" class="bot-img">
            </router-link>

            <router-link to="/myPage" class="img-margin">
            <img src="../../assets/bot-myPage.png" class="bot-img">
            </router-link>
        </div>
    </nav>
 </div> 
</template>

<script scoped>
export default {
    name: 'BottomBar'
}
</script>

<style scoped>
.abcabc{
    z-index: 1994;
    background: whitesmoke;   
}
.bot-img{
    height: 60px;
    width: 60px;
}
.bot-imgs{
    background: white;
    
}
.bot{
    height:100% ;
    width: 100%px;
}

</style>