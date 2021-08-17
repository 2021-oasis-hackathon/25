<template>
  <div>
<vueper-slides :dragging-distance="50" fixed-height="500px" >
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :parallax="1"
/>
</vueper-slides >
<h1 class='road'> 추천 경로</h1>
<vueper-slides class="recomand" fractions progress 
  :class="shadow"
  :visible-slides="3"
  :slide-ratio="1 / 3"
  :dragging-distance="70"
   fixed-height="500px">
  <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
</vueper-slides>


<w-divider class="my6 mx-3"></w-divider>


<h1 class="plan"> 앞으로의 여정</h1>
<vue-cal style="height: 250px" />




  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  data: () => ({
  slides: [
  {
    image: require('@/assets/main.jpg'),
   
  },
    {
    image: require('@/assets/main2.jpg'),
   
  },
    {
    image: require('@/assets/main3.jpg'),
   
  },  {
    image: require('@/assets/main4.jpg'),
  },
]
}),
  name: 'Home',
  
   components: 
     { VueperSlides, VueperSlide ,VueCal},
};
</script>
<style scoped>
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: #ff5252;
}
.recomand{
  color: red;
  width:100%;
  
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
</style>