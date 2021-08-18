<template>
        <div class="content">

                <img src="../assets/익산.png" class="img"
                style="top: 116px;
                    left: 150px;
                    height: 52px;">

                <img src="../assets/영광.png " class="img"
                style="top: 245px;
                    left: 109px;
                    height: 86px;">
            
                <img src="../assets/전주.png" class="img"
                style="top: 129px;
                    left: 177px;
                    height: 92px;">
     
                <img src="../assets/무주.png" class="img"
                style="top: 149px;
                    left: 268px;
                    height: 106px;"> 

                <img src="../assets/부안.png" class="img"
                style="top: 184px;
                    left: 133px;
                    height: 86px;">

                <img src="../assets/정읍.png" class="img" 
                style="top: 194px;
                    left: 151px;
                    height: 100px;">
         
                <img src="../assets/무안.png" class="img"
                style="left: 54px;
                        top: 305px;
                        height: 116px;">
      
                <img src="../assets/광주.png"  class="img"
                style="left:140px;top:250px" z-index="10">
                <img src="../assets/곡성.png" class="img"
                style="left: 194px;
                        top: 232px;
                        height: 98px;">
           
     
                <img src="../assets/해남.png" class="img"
                style="top: 368px;
                        left: 32px;
                        height: 108px;">
           
                <img src="../assets/완도.png" class="img"
                tyle="top: 344px;
                    left: 143px;
                    height: 131px;">
        
                <img src="../assets/순천6.png" class="img"
                style="top: 314px;
                        left: 241px;
                        height: 155px;">
          
        </div>
</template>

<script>


export default {
    data() {
        return {
            post : null,
        }
    },
    methods: {


    },
    watch: {

    },
}

</script >


<style scoped>
img{
    height: 113px;
    transition: 1s;
    margin: 2%px;
}
img:hover{
    transition: 1s;
    transform: scale(1.3);
}
.content{
    margin: 100px;
    border:3px solid yellow;
    display: flex;
    align-items: center; 
    justify-content: center;
}
.img{
    
    position:absolute;
}
 
</style>