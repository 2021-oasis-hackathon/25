<template>
    <div></div>
    <div id="map"> </div> 
    <div>
        <div class="upBtn">
            <w-button class="ma1" color="primary" outline sm @click="normal">기본</w-button>
            <w-button class="ma1" color="primary" outline sm @click="terrain">지형</w-button>
            <w-button class="ma1 mr6" bg-color="primary"  @click="getCurrentGeo">현재 위치 🔘</w-button>    
        </div>

        <div class="makers">
        <w-button class="ma1 mr6" bg-color="secondary" round @click="createMarker">마커 추가 🔘</w-button>
        <w-button class="ma1 mr6" bg-color="secondary" round @click="holdMarker">마커 저장 🔘</w-button>
        </div>
    </div>
        

    <w-flex wrap basis-zero :gap="3" class="listBoX">
        <div class="grow">
            <p class="title3 mb4">Default</p>
            <w-list
                v-model="selection1"
                :items="listItems1"
                checklist
                color="green">
            </w-list>
        </div>
    </w-flex>
    <div class = "bot"></div>
</template>


<script>
import {  mapState} from 'vuex'
var mapOptions={
    scaleControl: true,
    logoControl: false,
    mapDataControl: false,
    zoomControl: true,
    zoom: 15,
}


export default {
    data(){
        return {
            listItems1: [
                { label: this.marker1 , value: 1 },
                { label: this.marker2 , value: 2 },
                { label: this.marker3 , value: 3 },
                { label: this.marker4 , value: 4 },
                { label: this.marker5 , value: 4 },
            ],
            map: null,
            user_marker: null,
            point: null,
            marker1 : 0,
            marker2 : 0,
            marker3 : 0,
            marker4 : 0,
            marker5 : 0,
        }
    },
    computed: {
        ...mapState({
            currentPos : state=>state.marker.currentPos,
            mapId : state=>state.init,
            markers : state => state.marker.markers,
        }), 
        //...mapGetters(marker, {
            //    "setCurrentPos",
        //})
    },
    methods:{
        initMap() {
            const mapBox=document.getElementById("map");
            this.map=new naver.maps.Map(mapBox,mapOptions);
        }, 
        normal() {
            this.map.setMapTypeId(naver.maps.MapTypeId.NORMAL);
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
            if(this.user_marker != null){
                this.user_marker.position= this.currentPos;
                return;
            }
            this.user_marker=new naver.maps.Marker({
                position: this.currentPos,
                map: this.map,
                title :"현재 위치!"
            });
            this.point=new naver.maps.Marker({
                position: this.currentPos,
                map: this.map,
            });
        },
        onErrorGeo(){
            console.log("fail Geo");
        },
        getCurrentGeo() {
            navigator.geolocation.getCurrentPosition(this.onSuccessGeo, this.onErrorGeo)
        },
       
        holdMarker(){
            this.markers[this.markers.length-1]._listeners[0].eventName=null;
        },
        show() {
            console.log(   this.markers[this.markers.length-1]);
        },
        createMarker(){
            naver.maps.Event.addListener(this.map, 'click', function(e) {
            this.marker1=new naver.maps.Marker({
                position : e.latlng,
                map: this.map,
                img: {
                    url: '../assets/마커1.png',
                },
            }) 
            });
        }
    },
    mounted() {
        if(window.naver){
            this.initMap(); 
            this.getCurrentGeo();
        } else if(!(window.naver)){
            var naverMap=document.createElement("script");
            naverMap.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="+this.mapId;
            document.head.appendChild(naverMap);
            console.log("asdf");
            naverMap.onload = () => {this.initMap();this.getCurrentGeo(); console.log("naver_Map_onload");}
        }
        
        naver.maps.Event.addListener(map, 'click', function(e) {
            marker.setPosition(e.coord);
        });
    },
    unmounted() {
        console.log("언마운티드");
    },
    
}
</script>
<style scoped>
#map{
    width: 90%;
    height: 400px;
    margin: 0 5%; 
}
.wrapper{
    margin-left:5%;
    margin-right:5%; 
}
.listBoX{
    margin-top : 50px;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10%;
}
#map{
    margin-top : 10%;
}
.markers{
    display: flex;
    justify-content:end;
}
.upBtn{
    justify-content: space-between;
}
</style>