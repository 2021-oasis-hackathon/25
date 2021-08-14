<template>
  <div id="map"> </div>
</template>

<script>
export default {
    data(){
        return {
            map: null,
        }
    },
    computed() {

    },
    methods:{
        initMap() {
            const mapBox=document.getElementById("map");
            this.map=new naver.maps.Map(mapBox);
        }    
    },
    created(){
            if(!(window.naver)){
            const naverMap=document.createElement("script");
            naverMap.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=9ppcmu4ekd"
            naverMap.onload = () => {this.initMap(); console.log("naver_Map_onload");}
            document.head.appendChild(naverMap);
            console.log("컴포넌트 create");
        }
    },

    mounted() {
        if(window.naver){
            this.initMap();
            console.log("intitmap");
        }
        console.log("컴포넌트 mounted")
    },
    unmounted() {
        console.log("컴포넌트 unmounted")
        if(window.naver){
            console.log("123123123123")
        }
    },
}
</script>

<style>
#map{
    width: 400px;
    height: 400px;
}
</style>