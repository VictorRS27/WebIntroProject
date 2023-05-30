import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/ConfirmPurchase',
      name: 'ConfirmPurchase',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConfirmPurchaseView.vue')
    },
    {
      path: '/Events',
      name: 'Events',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventsView.vue')
    }
    ,
    {
      path: '/CreateProduct',
      name: 'CreateProduct',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateProductView.vue')
    }
    ,
    {
      path: '/CreateEvent',
      name: 'CreateEvent',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateEventView.vue')
    },
    {
      path: '/RegisterClient',
      name: 'RegisterClient',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterClientView.vue')
    }
    ,
    {
      path: '/RegisterAdmin',
      name: 'RegisterAdmin',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterAdminView.vue')
    }
    ,
    {
      path: '/AdminMenu',
      name: 'AdminMenu',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminMenuView.vue')
    }
    ,
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    }
    ,
    {
      path: '/Cart',
      name: 'Cart',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue')
    }
    ,
    {
      path: '/ProductPurchase',
      name: 'ProductPurchase',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductPurchaseView.vue')
    }
  ]
})

export default router
