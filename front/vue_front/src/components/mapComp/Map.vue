<template>
  <div id="map"> </div>
  <button @click="normal" >기본</button>
  <button @click="satellite" >위성</button>
  <button @click="hybrid" >기본+위성</button>
  <button @click="terrain" >지형</button>
  <h1>{{user_location}}</h1>
  <h1>{{currentPos}}</h1>
</template>

<script>
import {  mapState} from 'vuex'
export default {
    data(){
        return {
            map: null,
            marker: null,
            x: null, 
            y: null,
            user_location: null, 
        }
    },
    computed: {
        ...mapState({
            currentPos : state=>state.marker.currentPos,
        }), 
        //...mapGetters(marker, {
        //    "setCurrentPos",
        //})
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
        onSuccessGeo(position){
            this.x=position.coords.latitude;
            this.y=position.coords.longitude;
            this.user_location = new naver.maps.LatLng(this.x, this.y);
            this.map.setCenter(this.user_location); 
            this.map.setZoom(17);
            console.log("bebe");
            this.$store.commit('Pos', "this.pos123ition");
            console.log("afafaf");
            this.marker=new naver.maps.Marker({
                position: location,
                map: this.map,
            })
        },
        onErrorGeo(){
            console.log("FAILA")
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
        }
        window.onload= () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.onSuccessGeo, this.onErrorGeo)
            }
        }
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