import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import InicioSesion from './components/InicioSesion.vue';
import TwitsPanel from './components/TwitsPanel.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/inicio-sesion', component: InicioSesion },
  { path: '/twits-panel', component: TwitsPanel}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;