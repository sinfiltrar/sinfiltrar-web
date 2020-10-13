import { sampleReleases } from './releasesSamples'

export const state = () => ({
  latest: [],
  current: undefined,
})

export const mutations = {
  setLatest(state, releases) {
    state.latest = releases;
  },
  setCurrent(state, current) {
    state.current = current;
  },
}

export const actions = {
  getLatest({ commit }) {
    return this.$axios.get('latest').then(res => {
      commit('setLatest', res.data)
    })
  },
  getRelease({ commit }, slug) {
    return this.$axios.get(`releases/${slug}`).then(res => {
      commit('setCurrent', res.data)
    })
  },
}

