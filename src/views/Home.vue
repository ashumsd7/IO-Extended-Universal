<template>
  <div>
    <div class="container-fluid content-banner">
      <div class="row">
        <div
          class="
            col
            main-header
            bg-warning
            text-dark
            font-weight-bold
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
          style="height: 370px"
        >
          <!-- <h1>I/O</h1> -->
          <div class="row">
            <div id="logo" class="col-6 mx-4 my-2"></div>
            <div id="logo-slash"></div>
            <div id="logo2" class="col-6"></div>
          </div>
          <h2 id="tag2">Experience IO</h2>
          <h2 id="tag3">With your local communties</h2>
          <a href="https://forms.gle/PCJhTisg1p3S2Mdb6" target="_blank">
            <button
              class="bg-light register-btn p-2 mt-3 outline-none border-0"
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
      <div class="row d-lg-block design-banner-square"></div>
      <div class="row d-lg-block design-banner-circle"></div>
    </div>

    <AboutIO />

    <CelebrationOfTech />

  

    <div class="container mt-5" id="speaker">
      <div class="row mt-5">
        <div class="col m-auto box d-flex justify-content-center">
          <h1 class="mb-5">Speakers <span id="IO">Lineup </span></h1>
          <br />
        </div>
      </div>
    </div>
    <!-- <div v-if="!XX" style="justify-content: center">
      <h3 class="text-center mark">Announcing soon....</h3>
    </div> -->

    <Speakers />

    <CommunityCollab />

    <PartnerCommunity />
  </div>
</template>

<script>
import Events from "./Events.vue";
import CommunityCollab from "../components/HomeViews/CommunityCollab.vue";
import PartnerCommunity from "../components/HomeViews/PartnerCommunity.vue";
import Speakers from "../components/HomeViews/Speakers.vue";
import CelebrationOfTech from "../components/HomeViews/CelebrationOfTech.vue";
import AboutIO from "../components/HomeViews/AboutIO.vue";
export default {
  components: {
    Events,
    CommunityCollab,
    PartnerCommunity,
    Speakers,
    CelebrationOfTech,
    AboutIO,
  },
};
</script>
<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap");

#logo {
  width: 40px;
  height: 90px;
  background: black;
}
#logo-slash {
  width: 1px;
  height: 140px;
  background: black;
  transform: rotateY(84deg) rotateX(-20deg);
  transform-origin: left;
  margin-top: -10px;
}

#logo2 {
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 50%;
}
.content-banner {
  position: relative;
  overflow: hidden;
}
.design-banner-square {
  width: 200px;
  height: 200px;
  /* background: black; */
  border: 2px solid black;

  position: absolute;
  bottom: -20px;
  left: -20px;
}
.design-banner-circle {
  width: 300px;
  height: 300px;
  /* background: black; */
  border: 2px solid black;

  border-radius: 50%;
  position: absolute;
  top: -40%;
  right: -10%;
}

@media screen and (max-width: 750px) {
  .design-banner-square,
  .design-banner-circle {
    display: none;
  }
}

.main-header #tag1 {
  color: rgb(0, 0, 0);
  letter-spacing: 2px;
  font-family: "Noto Sans JP", sans-serif;
}
.register-btn {
  border-radius: 10px;
}
.main-header #tag2 {
  color: black;
  word-spacing: 3px;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
}
.main-header #tag3 {
  font-family: "Poppins", sans-serif;
}
/* _________MAIN_HEADER_END___________ */
</style>
