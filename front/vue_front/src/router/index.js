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
    path: '/군산_익산',
    name: '군산_익산', 
    component: () => import('../views/community_rigion/군산_익산.vue')
  },
  {
    path: '/김제_전주_완주',
    name: '김제_전주_완주',
    component: () => import('../views/community_rigion/김제_전주_완주.vue')
  },
  {
    path: '/나주_광주_화순_담양',
    name: '나주_광주_화순_담양',
    component: () => import('../views/community_rigion/나주_광주_화순_담양.vue')
  },
  {
    path: '/무안_영암',
    name: '무안_영암',
    component: () => import('../views/community_rigion/무안_영암.vue')
  },
  {
    path: '/부안_고창',
    name: '부안_고창',
    component: () => import('../views/community_rigion/부안_고창.vue')
  },
  {
    path: '/순창_남원_곡성_구례',
    name: '순창_남원_곡성_구례',
    component: () => import('../views/community_rigion/순창_남원_곡성_구례.vue')
  },
  {
    path: '/순천_광양_여수',
    name: '순천_광양_여수',
    component: () => import('../views/community_rigion/순천_광양_여수.vue')
  },
  {
    path: '/완도_장흥_보성_고흥',
    name: '완도_장흥_보성_고흥',
    component: () => import('../views/community_rigion/완도_장흥_보성_고흥.vue')
  },
  {
    path: '/정읍_장성_임실',
    name: '정읍_장성_임실',
    component: () => import('../views/community_rigion/정읍_장성_임실.vue')
  },
  {
    path: '/진도_해남_강진',
    name: '진도_해남_강진',
    component: () => import('../views/community_rigion/진도_해남_강진.vue')
  },
  {
    path: '/진안_장수_무주',
    name: '진안_장수_무',
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
