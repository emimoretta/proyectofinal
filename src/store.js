import { createStore } from 'vuex';

const store = createStore({
  state: {
    sesionActiva: false,
    usuario: '',
  },
  mutations: {
    setSesionActiva(state, valor) {
      state.sesionActiva = valor;
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    iniciarSesion({ commit }, { email }) {
      // Lógica para iniciar sesión (puedes hacer una solicitud HTTP aquí)
      // Supongamos que la autenticación es exitosa
      commit('setSesionActiva', true);
      commit('setUsuario', email);
    },
  },
  getters: {
    getSesionActiva: (state) => state.sesionActiva,
    getUsuario: (state) => state.usuario,
  },
});

export default store;