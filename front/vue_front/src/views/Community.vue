<template>
    <div>
        <div class="content">
            <router-link to="/군산_익산">
                <img src="../assets/1.jpg" >
            </router-link>
            <router-link to="/김제_전주_완주">
                <img src="../assets/2.jpg" >
            </router-link>
            <router-link to="/진안_장수_무주">
                <img src="../assets/3.jpg" > 
            </router-link>
            <br>
            <router-link to="/부안_고창">
                <img src="../assets/11.jpg" alt="">
            </router-link>
            <router-link to="/정읍_장성_임실">
                <img src="../assets/22.jpg" alt="">
            </router-link>
            <br>
            <router-link to="/무안_영암">
                <img src="../assets/333.jpg" alt="">
            </router-link>
            <router-link to="/나주_광주_화순_담양">
                <img src="../assets/111.jpg" alt="">
            </router-link>
            <router-link to="/순창_남원_곡성_구례">
                <img src="../assets/222.jpg" alt="">
            </router-link>
            <br>
            <router-link to="/진도_해남_강진">
                <img src="../assets/1111.jpg" alt="">
            </router-link>
            <router-link to="/완도_장흥_보성_고흥">
                <img src="../assets/2222.jpg" alt="">
            </router-link>
            <router-link to="/순천_광양_여수">
                <img src="../assets/3333.jpg" alt="">
            </router-link>

            <br>
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

</script >


<style scoped>
img{
    height: 20%;
    width: 20%;
    transition: 1s;
    margin: 2%px;
}
img:hover{
    transition: 1s;
    transform: scale(1.3);
}
</style>