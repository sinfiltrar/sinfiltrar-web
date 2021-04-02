export const state = () => ({
  all: [],
})

export const mutations = {
  setAll(state, issuers) {
    state.all = issuers;
  },
  setOne(state, issuer) {
    state.current = issuer;
  }
}

export const actions = {
  getAll({ commit }) {
    return this.$axios.get('/issuers/').then(res => {
      commit('setAll', res.data.results)
    })
  },
  getOne({ commit }, slug) {
    return this.$axios.get(`/issuers/${slug}`).then(res => {
      commit('setOne', res.data.results)
    })
  },
}

