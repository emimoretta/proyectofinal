import { createRouter, createWebHistory } from 'vue-router';
import store from '../src/store';
import HomePage from './components/HomePage.vue';
import TwitsPanel from './components/TwitsPanel.vue';
import DashBoard from './components/Dashboard.vue';

const routes = [
  { path: '/', name:'home-page', component: HomePage },
  { path: '/registrar', component: HomePage },
  { path: '/iniciar-sesion', component: HomePage },
  { path: '/twits-panel', component: TwitsPanel},
  {
    path: '/dash-board',
    name: 'dash-board',
    component: DashBoard,
    meta: {
      requiresAuth: true,  // Agrega esta propiedad a las rutas que requieren autenticación
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



router.beforeEach((to, from, next) => {
  // Verificar la sesión utilizando Vuex
  const sesionActiva = store.getters.getSesionActiva;
  
  if (to.meta.requiresAuth && !sesionActiva) {
    // Si la ruta requiere autenticación y no hay sesión activa, redirigir al inicio de sesión
    next({ name: 'home-page' });
  } else {
    // Permitir el acceso a la ruta
    next();
  }
});



export default router;