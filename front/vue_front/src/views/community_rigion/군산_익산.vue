<template>
    <div>
        <h1>광주페이지</h1>
        <button @click='poserServe' class="buttonaa">test!!</button>
        <div class = "aa">
        <h2> {{ title}} </h2>
        <h2 > {{content}} </h2>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: "title",
            content: "content",
        }
    },
    methods: {
        postServe() {
            axios.get("locallhost:8000/posts/gwangju/1", {
        }).then(
            res =>{
            this.title = res.data.title;
            this.content =res.data.content;
        }).catch(err=>{
            console.log(err)
        })
        },
        
        
    },
    watch: {

    },
}
</script>

<style>
.buttonaa{
    margin-top: 300px; 
}
.aa{
    margin-top: 100px;
}
</style>