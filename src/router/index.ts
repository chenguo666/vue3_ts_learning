import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menu';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path === '/main') {
    console.log(firstMenu);
    return firstMenu.url;
  }
});

export default router;
