const state = {
  defaultLogin: "admin",
  defaultPassword: "12345",
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true"
};

const getters = {
  isLoggedIn: state => state.isLoggedIn
};

const actions = {
  async login({ commit, dispatch }, { login, password }) {
    dispatch('startLoading', null, { root: true });

    // Симулюємо затримку, наприклад, 1 секунда
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (login === state.defaultLogin && password === state.defaultPassword) {
      commit('setLogin', true);
      localStorage.setItem("isLoggedIn", "true");
      dispatch('stopLoading', null, { root: true });
      return true;
    } else {
      commit('setLogin', false);
      localStorage.removeItem("isLoggedIn");
      dispatch('stopLoading', null, { root: true });
      return false;
    }
  },
};

const mutations = {
  setLogin(state, status) {
    state.isLoggedIn = status;
    localStorage.setItem('isLoggedIn', status);
  },
  SET_LOGGED_IN_STATUS(state, status) {
    state.isLoggedIn = status;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
