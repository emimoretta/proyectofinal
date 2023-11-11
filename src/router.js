import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import TwitsPanel from './components/TwitsPanel.vue';
import DashBoard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/registrar', component: HomePage },
  { path: '/iniciar-sesion', component: HomePage },
  { path: '/twits-panel', component: TwitsPanel},
  { path: '/dash-board', name: 'dash-board', component: DashBoard, props: true },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next('/iniciar-sesion');
  } else {
    next();
  }
});

export default router;