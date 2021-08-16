<template>
  <div>
<vueper-slides :dragging-distance="50">
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
  :dragging-distance="70">
  <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
</vueper-slides>

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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
  
   components: { VueperSlides, VueperSlide },
};
</script>
<style>
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: #ff5252;
}
.recomand{
  color: red;
  
}
.road{
  margin-top : 50px;
  margin-bottom : 35px;
}
</style>