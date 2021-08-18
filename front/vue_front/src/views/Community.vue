<template>
        <div class="content">

                <img src="../assets/익산.png" class="img"
                style="top: 116px;
                    left: 150px;
                    height: 52px;
                    z-index: 10"
                onclick="location.href='http://127.0.0.1:8000/community/10/'">

                <img src="../assets/영광.png " class="img"
                style="top: 245px;
                    left: 109px;
                    height: 86px;"
                onclick="location.href='http://127.0.0.1:8000/community/5/'">
            
                <img src="../assets/전주.png" class="img"
                style="top: 129px;
                    left: 177px;
                    height: 92px;"
                onclick="location.href='http://127.0.0.1:8000/community/11/'">
     
                <img src="../assets/무주.png" class="img"
                style="top: 149px;
                    left: 268px;
                    height: 106px;"
                onclick="location.href='http://127.0.0.1:8000/community/12/'"> 

                <img src="../assets/부안.png" class="img"
                style="top: 184px;
                    left: 133px;
                    height: 86px;"
                onclick="location.href='http://127.0.0.1:8000/community/6/'">

                <img src="../assets/정읍.png" class="img" 
                style="top: 194px;
                    left: 151px;
                    height: 100px;"
                onclick="location.href='http://127.0.0.1:8000/community/7/'">
         
                <img src="../assets/무안.png" class="img"
                style="left: 54px;
                        top: 305px;
                        height: 116px;"
                onclick="location.href='http://127.0.0.1:8000/community/2/'">
      
                <img src="../assets/광주.png"  class="img"
                style="left:140px;top:250px" z-index="10"
                onclick="location.href='http://127.0.0.1:8000/community/1'">
                <img src="../assets/곡성.png" class="img"
                style="left: 194px;
                        top: 232px;
                        height: 98px;"
                onclick="location.href='http://127.0.0.1:8000/community/9/'">
           
     
                <img src="../assets/해남.png" class="img"
                style="top: 368px;
                        left: 32px;
                        height: 108px;"
                onclick="location.href='http://127.0.0.1:8000/community/3/'">
           
                <img src="../assets/완도.png" class="img"
                style="top: 344px;
                    left: 143px;
                    height: 131px;"
                onclick="location.href='http://127.0.0.1:8000/community/4/'">
        
                <img src="../assets/순천6.png" class="img"
                style="top: 314px;
                        left: 241px;
                        height: 155px;"
                onclick="location.href='http://127.0.0.1:8000/community/8/'">
          
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
    display: flex;
    align-items: center; 
    justify-content: center;
}
.img{
    
    position:absolute;
}
 
</style>