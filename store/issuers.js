export const state = () => ({
  all: [],
})

export const mutations = {
  setAll(state, issuers) {
    state.all = issuers;
  },
}

export const actions = {
  getAll({ commit }) {
    return this.$axios.get('/issuers/').then(res => {
      commit('setAll', res.data)
    })
  },
}

