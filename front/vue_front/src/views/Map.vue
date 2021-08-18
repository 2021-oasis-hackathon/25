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
        <w-button class="ma1 mr6" bg-color="secondary" round @click="createMarker">마커 표시 🔘</w-button>
        <w-button class="ma1 mr6" bg-color="secondary" round @click="saveMarker">마커 저장(그리기) 🔘</w-button>
        </div>
    </div>
<w-table
  :headers="table.headers"
  :items="table.items"
  style="margin-bottom:60px">
</w-table>
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
var point=null; 
var polyline=null;
export default {
    data(){
        return {
            pathPoint:null,
            polyline:null,
            markerId:0,
            map: null,
            user_marker: null,
            point:null, 
            marker1 : "2",
            marker2 : 0,
            marker3 : 0,
            marker4 : 0,
            marker5 : 0,
            table: {
                headers: [
                    { label: 'ID', key: 'id' },
                    { label: 'x', key: 'x' },
                    { label: 'y', key: 'y' }
                ],
                items: [

                ]
            }
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
            this.polyline = new naver.maps.Polyline({
                map: this.map,
                path: [],
                strokeColor: '#5347AA',
                strokeWeight: 3
            });
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
                icon:'../assets/bot-map.png',
            });
            console.log(1)
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
            point=new naver.maps.Marker({
                position: this.currentPos,
                map: this.map,
            });
            console.log('asdf');

            
            
            
            polyline = new naver.maps.Polyline({
                map: this.map,
                path: [],
                strokeColor: '#5347AA',
                strokeWeight: 5,
            });



            naver.maps.Event.addListener(this.map, 'click', function(e) {
                point.setPosition(e.coord);



                
                console.log(e)
                console.log("pointb")

                console.log(point)
                console.log("pointa")


                 
            });
        },
        saveMarker(){
            var a=new naver.maps.Marker({
                position: point.position,
                map: this.map,
                animation: naver.maps.Animation.DROP,
                title: "asdfasdf", 
                URL:"../assets/마커5.png"
            });
            //var num = "1"
            //var infowindow = new naver.maps.InfoWindow({
           //     content: num, 
            //});


            this.$store.commit('addMarker',a); 
            this.marker1=a
            console.log(a)
            this.markerId+=1
            this.table.items.push({id:this.markerId, x:a.position.x,y:a.position.y});
            console.log(this.polyline)
            var path = this.polyline.getPath();
            console.log(path)
            console.log(a.coord+"aa");


            //infowindow.open(this.map,a );
            //console.log(infowindow)

            

            var path11 = polyline.getPath();
            path11.push(a.position);
            new naver.maps.Marker({
                map: this.map,
                position: a.position
            });




        },
    },
    mounted() {
        if(window.naver){
            this.initMap(); 
            this.getCurrentGeo();
        } else if(!(window.naver)){
            var naverMap=document.createElement("script");
            naverMap.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="+this.mapId;
            console.log("head");
            document.head.appendChild(naverMap);
            console.log("asdf");
            naverMap.onload = () => {this.initMap();this.getCurrentGeo(); console.log("naver_Map_onload");}
        }
        console.log(2);
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
    height: 470px;
}
.markers{
    display: flex;
    justify-content:end;
}
.upBtn{
    justify-content: space-between;
}
</style>