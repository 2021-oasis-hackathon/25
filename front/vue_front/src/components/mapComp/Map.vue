<template>
  <div id="map"> </div>
  <button @click="normal" >기본</button>
  <button @click="satellite" >위성</button>
  <button @click="hybrid" >기본+위성</button>
  <button @click="terrain" >지형</button>

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
            //mapBox.setMapTypeId(naver.maps.MapTypeId.HYBRID);
            this.map=new naver.maps.Map(mapBox,{
                 center: new naver.maps.LatLng(37.3595704, 127.105399),
                 zoom: 15,
            });
        }, 
        normal() {
            this.map.setMapTypeId(naver.maps.MapTypeId.NORMAL);
       }, 
        satellite(){
            this.map.setMapTypeId(naver.maps.MapTypeId.SATELLITE);
        },
        hybrid(){
            this.map.setMapTypeId(naver.maps.MapTypeId.HYBRID);
        },
        terrain(){
            this.map.setMapTypeId(naver.maps.MapTypeId.TERRAIN); 
        },
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
    width: 90%;
    height: 400px;
    margin: 0 5%; 
}
</style>