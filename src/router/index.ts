import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Leistungen from "../pages/Leistungen.vue"
import UeberUns from "../pages/UeberUns.vue"
import Referenzen from "../pages/Referenzen.vue"
import Kontakt from "../pages/Kontakt.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/leistungen", component: Leistungen },
  { path: "/ueber-uns", component: UeberUns },
  { path: "/referenzen", component: Referenzen },
  { path: "/kontakt", component: Kontakt },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if user uses back/forward, restore saved position
    if (savedPosition) {
      return savedPosition
    }
    // otherwise scroll to top
    return { top: 0 }
  },
})
