<template>
    <div class="top-cotent">
    <h6 style="color:black; margin-bottom:3px">오른 이런곳은 어때?</h6>
    <div class="boder">
<vueper-slides :dragging-distance="50" fixed-height="400px" >
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :parallax="1" 
    style="border-radius: 10px;"/>
</vueper-slides >

    </div>
    </div>
    <div class="bottom-content"></div>
    <h6 style="color:black; margin:23px 0px 5px 15px"> 
      <img src="../assets/recommand.png" class="img-plan"/>
      ___을 위한 추천 계획표
    </h6>
    <div class="pb">
<div class="plan-box" style="margin-bottom: 65px;">
  <div class="plan-item">
    <div class="plan-head"> <h3>첫째 날</h3></div>
    <div class="plan-body">
      <div class="text-head">{{planBox1.head}}</div>
      <div class="text-body">
        <ol>
          <li  v-for="(d, i) in planBox1.goal" :key="i"  style="font-size:4px;">{{i+1}}. {{d}}</li>
        </ol>
      </div> 
    </div>
  </div>
  <div class="plan-item">
    <div class="plan-head"><h3>둘째 날</h3></div>
    <div class="plan-body">
      <div class="text-head">{{planBox2.head}}</div>
      <div class="text-body">
        <ol>
          <li  v-for="(d, i) in planBox2.goal" :key="i"  style="font-size:4px;">{{i+1}}. {{d}}</li>
        </ol>
      </div>
    </div>

  </div>
  <div class="plan-item">
    <div class="plan-head"><h3>셋째 날</h3></div>
    <div class="plan-body">
      <div class="text-head">{{planBox3.head}}</div>
      <div class="text-body">
        <ol>
          <li  v-for="(d, i) in planBox1.goal" :key="i"  style="font-size:4px;">{{i+1}}. {{d}}</li>
        </ol>
      </div> 
    </div>
  </div>
</div>
    </div>

<!--
<vueper-slides class="recomand" fractions progress 
  :visible-slides="3"
  :slide-ratio="1 / 3"
  :dragging-distance="120"
   fixed-height="500px">
  <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
</vueper-slides>
-->

<!-- 
<h1 class="plan"> 앞으로의 여정</h1>
vue-cal style="height: 250px" />
-->
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
/*import VueCal from 'vue-cal'*/
import 'vue-cal/dist/vuecal.css'

export default {
  data: () => ({
  slides: [
  {
    image: require('@/assets/p1.png'),
  },
  {
    image: require('@/assets/p2.png'),
  },
  ],
  planBox1:{
    head:"순창",
    goal:[
      "순창장류박물관",
      "강천산국립공원",
      "카페베르자르담",
    ],
  },
  planBox2:{
    head:"섬진",
    goal:[
      "섬진강기차마을",
      "카페010DORA",
      "압록유원지",
    ],
  },
  planBox3:{
    head:"남원",
    goal:[
      "남원광한루",
      "명문제과",
      "맛집세집",
    ],
  },
}),
  name: 'Home',
  
   components: 
     { VueperSlides, VueperSlide /*,VueCal*/},
};
</script>
<style scoped>
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
}
.recomand{
  color: red;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  padding: 30px
}
.road{
  margin-top : 50px;
  margin-bottom : 35px;
}
.plan{
  margin-top:50px;
  margin-bottom:50px;
}
.my6 {
  margin-top:50px;
}
.photo-zone{
  height: 500px;
}
h6{
  margin-top: 3%;
  text-align: start;
}
.top-cotent{
  margin-top:16px;
  margin-left:5%;
  margin-right:5%;
}
.boder{
  border: 3px solid #AEC7FF; 
  border-radius: 10px;
  padding: 3px;
}
.bottom-content{
  
}
.img-plan{
  vertical-align: bottom;
  height: 2em;
  width: 2em; 
}
.plan-box{
  height: 300px;
  width: 90%;
  border : 3px black solid;
  display: flex;
  border-radius: 10px;
  justify-content: space-evenly;
}
.pb{
  display: flex;
  justify-content: center;
}
.plan-item{
  padding:5% 0;
  width: 25%;
}
.plan-head{
  height: 15%;
  margin-bottom: 20%;
  border-radius: 10px;
  background:#D8E8FF;
} 
.plan-body{
  margin: 0 0 10% 0;
  height: 76%;
  border-radius: 10px;
  background:#D8E8FF;

}
.text-head{
  height: 20%;
  font-size: 1.5em;
  font-weight: bold;
  color:#B1CAF9;

}
.text-body{
  height: 60%;
  margin-top: 10%;
  word-break:break-all;
}

li{
  list-style-type:none;
}
</style>