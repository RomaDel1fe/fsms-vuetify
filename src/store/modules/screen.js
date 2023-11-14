// store/modules/screen.js

const state = {
  isMobile: false
};

const mutations = {
  SET_IS_MOBILE(state, isMobile) {
    state.isMobile = isMobile;
  }
};

const actions = {
  updateIsMobile({ commit }, isMobile) {
    commit('SET_IS_MOBILE', isMobile);
  }
};

const getters = {
  isMobile: state => state.isMobile
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
