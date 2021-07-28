<template>
  <div class="container-fluid team-page">
    <div class="container">
      <div class="row">
        <div class="col team-page_heading text-center p-3">
          <h2 class="p-2 fw-bold">Meet IO Team</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <team-member
        v-for="data in teams"
        :key="data.id"
        :twitter="data.twitter"
        :linkdin="data.linkdin"
        :github="data.github"
        :img="data.img"
        :name="data.name"
        :position="data.position"
      />
    </div>
  </div>
</template>

<script>
import TeamMember from "../components/reusable/TeamMember.vue";
import teamData from "../data/teamData";
export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      teams: teamData,
    };
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