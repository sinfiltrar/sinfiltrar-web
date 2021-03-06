export const state = () => ({
	latest: [],
	searchResults: [],
	current: null,
	currentList: null,
})

export const mutations = {
	setLatest(state, releases) {
		state.latest = releases
	},
	setCurrent(state, current) {
		state.current = current
	},
	setCurrentList(state, currentList) {
		state.currentList = currentList
	},
	setSearch(state, searchResults) {
		state.searchResults = searchResults
	},
}

export const actions = {
	getLatest({ commit }) {
		return this.$axios.get('/docs/').then((res) => {
			commit('setLatest', res.data.results)
		})
	},
	getRelease({ commit }, slug) {
		return this.$axios.get(`/docs/${slug}`).then((res) => {
			commit('setCurrent', res.data)
		})
	},
	getListByIssuer({ commit }, issuerSlug) {
		return this.$axios.get(`/docs/?issuer=${issuerSlug}`).then((res) => {
			commit('setCurrentList', res.data.results)
		})
	},
	search({ commit }, searchQuery) {
		return this.$axios.get(`/docs/?q=${searchQuery}`).then((res) => {
			commit('setSearch', res.data)
		})
	},
}
