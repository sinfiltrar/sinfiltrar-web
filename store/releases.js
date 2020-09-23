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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setLatest', new Array(4).fill(sampleReleases).flat())
        resolve()
      }, 500)
    })

    /*
    return axios.get('http://my-api/stars').then(res => {
    // transform res.data
      commit('setLatest', res.data)
    })
    */
  },
  getRelease({ commit }, slug) {
    return new Promise((resolve, reject) => {
      commit('setCurrent', undefined)
      setTimeout(() => {
        commit('setCurrent', sampleReleases.find(r => r.slug === slug))
        resolve()
      }, 500)
    })

    /*
    return axios.get('http://my-api/stars').then(res => {
    // transform res.data
      commit('setLatest', res.data)
    })
    */
  },
}

