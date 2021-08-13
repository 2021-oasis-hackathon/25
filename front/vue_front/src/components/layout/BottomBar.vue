<template>
 <div>
     <nav class="nav nav-pills flex-column flex-sm-row">
        <router-link class="flex-sm-fill text-sm-center nav-link" to="/cummunity">커뮤니티</router-link>
        <router-link class="flex-sm-fill text-sm-center nav-link" to="/food">맛집</router-link>
        <router-link class="flex-sm-fill text-sm-center nav-link" to="/map">지도</router-link>
        <router-link class="flex-sm-fill text-sm-center nav-link" to="/plan" >계획</router-link>
    </nav>
 </div> 
</template>

<script scoped>
export default {
    name: 'BottomBar'
}
</script>

<style>
nav{
    border: 3px solid black;
    background: skyblue;
    padding: 0px;
}
</style>