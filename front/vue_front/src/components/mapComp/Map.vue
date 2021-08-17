<template>
  <div id="map"> </div>
  <button @click="normal" >기본</button>
  <button @click="satellite" >위성</button>
  <button @click="hybrid" >기본+위성</button>
  <button @click="terrain" >지형</button>
  

</template>


<script>
import {  mapState} from 'vuex'

let lc = null;
export default {
    data(){
        return {
            map: null,
            marker: null,
            user_location: "NONONONO", 
        }
    },
    computed: {
        ...mapState({
            currentPos : state=>state.marker.currentPos,
            mapId : state=>state.init,
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
            var x=position.coords.latitude;
            var y=position.coords.longitude;
            var user_location = new naver.maps.LatLng(x, y);

            this.$store.commit('setUserPos', user_location);
            this.map.setCenter(this.currentPos); 
            this.map.setZoom(17);

            this.marker=new naver.maps.Marker({
                position: this.currentPos,
                map: this.map,
            })
        },
        onErrorGeo(){
            console.log("fail Geo");
        },
        getCurrentGeo() {
            navigator.geolocation.getCurrentPosition(this.onSuccessGeo, this.onErrorGeo)
        }
    },
    created(){
            if(!(window.naver)){
            const naverMap=document.createElement("script");
            naverMap.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="+this.mapId;
            naverMap.onload = () => {this.initMap(); console.log("naver_Map_onload");}
            document.head.appendChild(naverMap);
            console.log("asdf");
        }
    },
    mounted() {
        if(window.naver){
            this.initMap();
        }
        window.onload= () => {
            if(navigator.geolocation) {
                this.getCurrentGeo();
            }
        }
        lc= setInterval(this.getCurrentGeo, 5000); 
    },
    unmounted() {
        console.log("언 ㅁ아ㅜㄴ 티ㅡㄷ");
        clearInterval(lc);
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