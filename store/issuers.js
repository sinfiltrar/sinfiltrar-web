export const state = () => ({
  all: [],
  current: null,
})

export const mutations = {
  setAll(state, issuers) {
    state.all = issuers
  },
  setOne(state, issuer) {
    console.log('set issuer to ', issuer)
    state.current = issuer
  },
}

export const actions = {
  getAll({ commit }) {
    return this.$axios.get('/issuers/').then((res) => {
      commit('setAll', res.data.results)
    })
  },
  getOne({ commit }, slug) {
    return this.$axios.get(`/issuers/${slug}`).then((res) => {
      console.log('issuer', res.data)
      commit('setOne', res.data)
    })
  },
}
