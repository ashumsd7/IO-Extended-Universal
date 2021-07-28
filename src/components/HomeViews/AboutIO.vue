<template>
    <div class="container" id="about">
      <div class="row my-1 m-auto">
        <div class="col my-3 box">
          <h1>Why <span>IO Extended ?</span></h1>
        </div>
      </div>
      <div class="row my-1 d-flex justify-content-around">
        <div class="col-md-5 m-2 p-3 community-div">
          <h2 class="mb-3 mt-2">Because Community matters</h2>
          <div class="row">
            <div class="col-lg-10">
              <p>
                Come together with community because alone we can do so little
                but together with community we can grow and reach to great
                heights.United with Community one can make a remarkable changes
                in their personal growth and also towards society!
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 m-2 p-2 growth-div">
          <h2 class="mb-3 mt-2">Because Growth matters</h2>
          <div class="row">
            <div class="col-lg-10">
              <p>
                Growth is a process not an event. Being more and more productive
                each day is growth.Grow remarkably and upscale your level of
                potential output with experience holders as every experience
                makes you grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row my-2 d-flex justify-content-around">
        <div class="col-md-8 m-2 p-3 you-matter-div">
          <h2 class="mt-2">Because YOU matter</h2>
          <p>
            You matter, You are important, You can evolve, You contribute in
            development. Get inspired by the speakers at I/O extended and start
            working on yourselves. You can affect the world fundamentally,
            technically and revolutionarily.
          </p>
        </div>
        <div class="col-md-2 m-1 p-3 calender-div text-center">
          <img src="../../assets/CalendarIcon.png" alt="" />
          <h2 class="mt-3">31st July 2021</h2>
          <h3>Saturday</h3>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.col {
  font-family: "Open Sans", sans-serif;
}
h1 span {
  font-weight: bolder;
}

.box h1 {
  font-family: "Poppins", sans-serif;
}
.community-div {
  background: #f88c84;
}
.community-div,
.growth-div,
.you-matter-div,
.calender-div {
  border-radius: 30px;
  font-family: "Poppins", sans-serif;
}

.community-div p,
.growth-div p {
  margin: 10px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}
.growth-div {
  background: #88cc94;
}
.you-matter-div {
  background: #ffbc04;
}
.calender-div {
  background: #3b8fff;
  color: wheat;
}
@media screen and (max-width: 750px) {
  .calender-div {
    max-width: 160px;
  }
}
</style>