<template>
  <div class="col-md-3 col-sm-6 col-6 mt-5">
    <div class="container-img m-auto">
      <img class="hero-img" :src="img" alt="" />
      <div class="caption">
        <div
          class="
            d-flex
            py-2
            flex-row
          
            justify-content-center
            align-items-center
          "
        >
          <span  v-if="twitter">  <a :href="twitter"><img class="img-fluid media-imgs "  src="https://image.flaticon.com/icons/png/512/145/145812.png" alt=""></a> </span>
             <span class="ml-3"  v-if="github">  <a :href="github"><img class="img-fluid media-imgs"  src="https://image.flaticon.com/icons/png/512/733/733553.png" alt=""></a> </span>
             <span class="ml-3" v-if="linkdin">  <a :href="linkdin"><img class="img-fluid media-imgs"  src="https://image.flaticon.com/icons/png/512/179/179330.png" alt=""></a> </span>
        </div>
      </div>
    </div>

    <div class="member-about mt-2">
      <h3 class="name text-center">{{ name }}</h3>
      <h6 class="position text-center">{{ position }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "position", "twitter", "github", "linkdin"],
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap");
.container-img {
  width: 180px;
  height: 180px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}
.hero-img{
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.media-imgs{
    width: 30px;
    height: 30px;
}
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  /* background: black; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  transform: translateY(100%);
  transition: all 0.5s;
  background: rgb(0, 0, 0);
  font-weight: bolder;
  cursor: pointer;
}

.container-img:hover .caption {
  transform: translateY(-3%);
  
}
.container-img:hover img {
  transform: translateY(-10%);
  /* opacity: .5; */
  
}
.container-img:hover{
    box-shadow: 3px -5px 27px 3px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 3px -5px 27px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px -5px 27px 3px rgba(0,0,0,0.75);
}
.member-about {
  font-family: "Roboto Slab", serif;
  text-shadow: 4px 4px 3px rgba(184, 187, 175, 0.77);
}
.member-about h3 {
  color: rgb(248, 96, 121);
}
.member-about h4 {
  opacity: 0.7;
}
span{
    margin-left: 10px;
}
span:hover{
     box-shadow: 3px -5px 27px 3px rgba(240, 237, 104, 0.75);
-webkit-box-shadow: 3px -5px 27px 3px rgba(240, 237, 104, 0.75);
-moz-box-shadow: 3px -5px 27px 3px rgba(240, 237, 104, 0.75);
border-radius: 50%;
animation: animateLogo .3s forwards ease-in;
   
}
span a{
    text-decoration: none;
    color: wheat;
    font-weight: normal;
    text-transform: capitalize;
}

@keyframes animateLogo {
    0%{
        transform: scale(.8)
    }
     100%{
        transform:  scale(1.2)
    }
}
</style>
