import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const token = localStorage.getItem('token');

if (token) {
    // Decodificar el token y establecer el estado de autenticación en Vuex
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    store.commit('setSesionActiva', true);
    store.commit('setUsuario', decodedToken.userId);
  }

const app = createApp(App);

app.use(router).use(store);
app.mount('#app');