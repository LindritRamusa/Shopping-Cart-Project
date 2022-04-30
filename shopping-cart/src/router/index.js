import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartShopping from '../views/CartShopping.vue'

const routes = [
  {path: '/', name: 'Home', component: HomeView},
  {path: '/cart', name: 'CartShopping', component: CartShopping},  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
