<template>
  <div class="home">
    <img src="@/assets/main.jpg" class='main-img'>
      <ul>
        <li>
          <h1>날씨</h1>
          <div class="empty-box"></div>
          <hr>
        </li>
        <li class="plan">
          <h1>Plan</h1> 
          <div class="cards">
           <div class="card" style="width: 18rem;">
            <img src="../assets/food1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">김치찌게 맛집</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div> 
            <div class="card" style="width: 18rem;">
            <img src="../assets/food2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">김치찌게 맛집</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="card" style="width: 18rem;">
            <img src="../assets/food3.png" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">김치찌게 맛집</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
        </li>
        <hr>
        <h1>Travel</h1>
        <li class = "travel">
          <article>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/food1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/food2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/food3.png" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </article>
        </li>
        <hr>
      <h1>Food</h1>
      <div class="empty-box"></div>
        <li class ="food">
          <article>
            <section></section>  
            <section></section>  
            <section></section>  
          </article>
        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: { 
  }
}
</script>
<style scoped>
ul{
  list-style: none;
}
h1 {
   margin: 30px; 
}
.cards{
  overflow:auto;
  display: flex;
  margin: 30px 0px;
}
.empty-box{
  border: 3px solid black;
  height: 400px;
  margin: 0px  0px  100px 0px;
}
</style>

