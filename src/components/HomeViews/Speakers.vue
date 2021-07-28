<template>

  <div class="container">
    <div  v-if="!getSpeakersData" class="">
   <div  class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<h3 class="text-center">Loading Speakers...</h3>
</div>

    <div v-else class="row d-flex justify-content-center align-items-center">
      <team-member
        v-for="data in getSpeakersData"
        :key="data.id"
        :twitter="data.twitter"
        :linkdin="data.linkdin"
        :github="data.github"
        :img="data.profilePicture"
        :name="data.fullName"
        :position="data.tagLine"
      />
    </div>
  </div>
</template>

<script>
import TeamMember from "../reusable/TeamMember.vue";
// import speakerData from "../../data/speakerData";
export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      // speakers: this.getSpeakersData,
    };
  },

  computed:{
    getSpeakersData(){
      return this.$store.getters.getSpeakersWall
    }
  },
  created() {
    this.$store.dispatch('getSpeakersListAction')
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap");
.team-page {
  background: black;
  color: white;
}
.team-page_heading {
  transform: skew(-10deg);
}
.team-page_heading h2 {
  color: rgb(0, 0, 0);
  background: rgb(201, 170, 36);
  max-width: 230px;
  font-family: "Karla", sans-serif;
  text-shadow: 4px 4px 3px rgba(129, 139, 89, 0.77);
}
</style>