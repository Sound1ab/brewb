import Data from '@/assets/data/data.json';

const state = {
  data: {},
};

const actions = {
	loadLocalData ({commit}) {
		commit('LOAD_LOCAL_DATA', Data);
	}
};

const mutations = {
  LOAD_LOCAL_DATA (state, payload) {
    state.data = payload;
  },
};

export default {
  state,
  mutations,
  actions
}
