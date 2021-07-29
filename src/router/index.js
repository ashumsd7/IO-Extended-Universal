import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from "../views/Team.vue";     
import Event from "../views/Events.vue";      
import SpeakersDetail from "../views/SpeakersDetail.vue";      


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/speaker-detail/:id",
    name: "SpeakersDetail",
    component: SpeakersDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
