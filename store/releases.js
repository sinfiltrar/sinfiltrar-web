
export const state = () => ({
  latest: [],
  current: undefined,
})

export const mutations = {
  setLatest(state, releases) {
    console.log('releases are', releases[2].issuer.name)
    state.latest = releases;
  },
  setCurrent(state, current) {
    state.current = current;
  },
}

export const actions = {
  getLatest({ commit }) {
    return this.$axios.get('/docs/').then(res => {
      commit('setLatest', res.data.results)
    })
  },
  getRelease({ commit }, slug) {
    return this.$axios.get(`/docs/${slug}`).then(res => {
      commit('setCurrent', res.data)
    })
  },
}

