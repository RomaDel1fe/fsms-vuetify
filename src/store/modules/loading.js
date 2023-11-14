const state = {
  isLoading: false,
  progress: 0
};

const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_PROGRESS(state, payload) {
    state.progress = payload;
  }
};

const actions = {
  startLoading({ commit }) {
    console.log("Starting loading");
    commit('SET_LOADING', true);
  },
  stopLoading({ commit }) {
    console.log("Stopping loading");
    commit('SET_LOADING', false);
    commit('SET_PROGRESS', 0);
  },
  updateProgress({ commit }, progress) {
    commit('SET_PROGRESS', progress);
  }
};

export default {
  state,
  mutations,
  actions
};
