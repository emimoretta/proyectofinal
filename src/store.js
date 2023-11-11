import { createStore } from 'vuex';

const store = createStore({
  state: {
    usuario: null, // Aquí almacenarás la información del usuario
    sesionActiva: false, // Un indicador de si el usuario tiene una sesión activa
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setSesionActiva(state, valor) {
      state.sesionActiva = valor;
    },
  },
  actions: {
    iniciarSesion({ commit }, usuario) {
      // Lógica para iniciar sesión (por ejemplo, enviar datos al servidor)
      commit('setUsuario', usuario);
      commit('setSesionActiva', true);
    },
    cerrarSesion({ commit }) {
      // Lógica para cerrar sesión
      commit('setUsuario', null);
      commit('setSesionActiva', false);
    },
  },
  getters: {
    usuario: (state) => state.usuario,
    sesionActiva: (state) => state.sesionActiva,
  },
});

export default store;