<template>
    <div class="container mt-5" id="community" >
      <div class="row mt-5">
        <div class="col box m-auto d-flex justify-content-center">
          <h1 class="heading mb-4">
            Community <span id="IO"> Collaboration </span>
          </h1>
        </div>
      </div>
      <div class="row mx-3 d-flex justify-content-around align-items-center">

        <div :key="data.id" v-for="data in communityCollab" class="col-3 d-flex justify-content-center align-items-center">
          <a :href="data.website">
            <img
              :src="data.img"
              width="150"
              class="img-fluid"
              alt=""/>
          </a>
        </div>
       
      </div>
    </div>
</template>

<script>
import communityCollab from '../../data/communityCollab'
    export default {
        data() {
            return {
                communityCollab:communityCollab
            }
        },
    }
</script>

<style  scoped>
a:hover{
       box-shadow: 3px -5px 27px 3px rgba(107, 107, 107, 0.75);
-webkit-box-shadow: 3px -5px 27px 3px rgba(126, 126, 126, 0.75);
-moz-box-shadow: 3px -5px 27px 3px rgba(141, 141, 141, 0.75);
border-radius: 50%;
    animation: animateLogo .3s forwards ease-in;
}
@keyframes animateLogo {
    0%{
        transform: scale(.7)
    }
     100%{
        transform:  scale(1.2)
    }
}
</style>