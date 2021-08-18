<template>
        <div class="content">
            <a href="http://127.0.0.1:8000/community/10/">
                <img src="../assets/익산.png">
            </a>
            
            <a href="http://127.0.0.1:8000/community/11/">
                <img src="../assets/전주.png" >
            </a>
            <a href="http://127.0.0.1:8000/community/12/">
                <img src="../assets/무주.png" > 
            </a>
            <br>
            <a href="http://127.0.0.1:8000/community/6/">
                <img src="../assets/부안.png" alt="">
            </a>
            <a href to="http://127.0.0.1:8000/community/7/">
                <img src="../assets/정읍.png" alt="">
            </a>
            <br>
            <a href to="http://127.0.0.1:8000/community/2/">
                <img src="../assets/무안.png" alt="">
            </a>
            <a href="http://127.0.0.1:8000/community/1/">
                <img src="../assets/광주.png" alt="">
            </a>
            <a href to="http://127.0.0.1:8000/community/9/">
                <img src="../assets/곡성.png" alt="">
            </a>
            <br>
            <a href="http://127.0.0.1:8000/community/3/">
                <img src="../assets/해남.png" alt="">
            </a>
            <a href ="http://127.0.0.1:8000/community/4/">
                <img src="../assets/완도.png" alt="">
            </a>
            <a href="http://127.0.0.1:8000/community/8/">
                <img src="../assets/순천6.png" alt="">
            </a>
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
.content{
    border:3px solid black;
}
</style>