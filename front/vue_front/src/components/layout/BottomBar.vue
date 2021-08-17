<template>
 <div >
     <nav>
        <w-divider color="amber" class="ma0"></w-divider>
        <w-flex justify-center class="indigo-light5--bg pa0 bot-imgs">
            <router-link to="/">
                <img src="../../assets/bot-home.png" class="bot-img" alt="">
            </router-link>
            <w-divider class="mx6" vertical></w-divider>
            <router-link to="/plan">
                <img src="../../assets/bot-plan.png" class="bot-img">
            </router-link>
            <w-divider class="mx6" vertical ></w-divider>
            <router-link to="/map">
                <img src="../../assets/bot-map.png" class="bot-img">
            </router-link>
            <w-divider class="mx6" vertical></w-divider>
            <router-link to="/community">
                <img src="../../assets/bot-com.png" class="bot-img">
            </router-link>
            <w-divider class="mx6" vertical ></w-divider>
            <router-link to="/myPage.png">
            <img src="../../assets/bot-myPage.png" class="bot-img">
            </router-link>
        </w-flex>

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
    padding:0px;
    padding-left: 30px;
    padding-right: 30px;
}
.bot{
    height:100% ;
    width: 100%px;
}

</style>