import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/community/군산_익산',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/군산_익산.vue')
  },
  {
    path: '/community/김제_전주_완주',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/김제_전주_완주.vue')
  },
  {
    path: '/community/나주_광주_화순_담양',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/나주_광주_화순_담양.vue')
  },
  {
    path: '/community/무안_영암',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/무안_영암.vue')
  },
  {
    path: '/community/부안_고창',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/부안_고창.vue')
  },
  {
    path: '/community/순창_남원_곡성_구례',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/순창_남원_곡성_구례.vue')
  },
  {
    path: '/community/순천_광양_여수',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/순천_광양_여수.vue')
  },
  {
    path: '/community/완도_장흥_보성_고흥',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/완도_장흥_보성_고흥.vue')
  },
  {
    path: '/community/정읍_장성_임실',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/정읍_장성_임실.vue')
  },
  {
    path: '/community/진도_해남_강진',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/진도_해남_강진.vue')
  },
  {
    path: '/community/진안_장수_무주',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/진안_장수_무주.vue')
  },


  {
    path: '/map',
    name:  'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path:  '/plan',
    name:  'plan',
    component: () => import('../views/Plan.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
