<template>
    <div>
        <div class="div1">
        <img src="../assets/계획표.png" class="a">
        <img src="../assets/추가버튼.png" class="q">
        </div>
        <div class="qqq">
        <img src="../assets/계획표1.png" class="b aa">
        </div>
        <div class="qqq">
        <img src="../assets/계획표2.png" class="c aa">
        </div>
        <div class="qqq">
        <img src="../assets/계획표3.png" class="d aa">
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    watch: {

    },
}
</script>

<style scoped>
.a{
    width:34%;
    text-align: none;
    margin-left:5%
}
.div1{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.q{
    width:30%;   
}
.aa{
    width:92%;
    
    max-height: initial;
}
.qqq{
    max-height:300px;
    overflow: hidden;
}
</style>