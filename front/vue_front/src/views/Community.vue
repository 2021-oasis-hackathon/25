<template>
    <div>
        <div class="content">
            <router-link to="/군산_익산">군산_익산</router-link>
            <router-link to="/김제_전주_완주">김제_전주_완주</router-link>
            <router-link to="/나주_광주_화순_담양">나주_광주_화순_담양</router-link>
            <router-link to="/무안_영암">무안_영암</router-link>
            <router-link to="/부안_고창">부안_고창</router-link>
            <router-link to="/순창_남원_곡성_구례">순창_남원_곡성_구례</router-link>
            <router-link to="/순천_광양_여수">순천_광양_여수</router-link>
            <router-link to="/완도_장흥_보성_고흥">완도_장흥_보성_고흥</router-link>
            <router-link to="/정읍_장성_임실">정읍_장성_임실</router-link>
            <router-link to="/진도_해남_강진">진도_해남_강진</router-link>
            <router-link to="/진안_장수_무주">진안_장수_무주</router-link>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post : null,
        }
    },
    methods: {

        postTest(){
            axios.post("https://reqres.in/api/register", {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }).then(
            res =>{
            this.post = res.data.token;
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        },


    },
    watch: {

    },
}

</script>


<style scoped>
.table{
    
}
</style>