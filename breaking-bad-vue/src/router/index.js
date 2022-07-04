import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterDetails from "../views/CharacterDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/character/:id",
    props: true,
    name: "CharacterDetails",
    component: CharacterDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
