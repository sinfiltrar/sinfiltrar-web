<template>
	<div class="search-results">
		<p>
			Encontramos <strong>{{ docs.count }}</strong> comunicados con
			"<strong>{{ $route.query.q }}</strong
			>".
		</p>
		<DocsList :docs="docs.results"></DocsList>
	</div>
</template>

<script>
export default {
	name: 'Search',
	async fetch() {
		console.log('fetching DATAAAA', this.$route.query.q)
		await this.$store.dispatch('releases/search', this.$route.query.q)
	},
	data() {
		return {
			key: this.$route.path,
		}
	},
	computed: {
		docs() {
			return this.$store.state.releases.searchResults
		},
	},
	watch: {
		'$route.query': '$fetch',
	},
	mounted() {},
}
</script>

<style scoped>
.search-results {
	color: #000;
}
</style>
