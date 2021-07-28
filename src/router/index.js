import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from "../views/Team.vue";


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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
