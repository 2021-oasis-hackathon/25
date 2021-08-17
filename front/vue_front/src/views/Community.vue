<template>
    <div>
        <div class="content">
            <a src="">여수</a>
            <router-link to="군산_익산">군산_익산</router-link>
            <router-link to="김제_전주_완주">김제_전주_완주</router-link>
            <router-link to="나주_광주_화순_담양">나주_광주_화순_담양</router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <a src="">aaa</a>

            <a src="">adsf</a>
            <a src="">asdf</a>
            <a src="">123123</a>
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