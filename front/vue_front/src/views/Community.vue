<template>
    <div>
        <div class="content">
            <table class="table">
                <tr>
                    <td>{{post}}</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
            </table>
            <button @click='postTest'></button>
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
    watch: {

    },
    }
}
</script>


<style scoped>
.table{
    
}
</style>