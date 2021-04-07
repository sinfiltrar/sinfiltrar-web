<template>
	<div>
		<p v-if="$fetchState.pending" class="d-flex align-items-center">
			<b-spinner small class="mr-1" label="Cargando..."></b-spinner>
			Cargando...
		</p>
		<div v-if="issuer" class="content">
			<div class="info d-flex mb-4">
				<h2 class="">{{ issuer.name }}</h2>
			</div>
		</div>
		<DocsList :docs="docs"></DocsList>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	async fetch() {
		await this.$store.dispatch('issuers/getOne', this.$route.params.slug)
		await this.$store.dispatch(
			'releases/getListByIssuer',
			this.$route.params.slug
		)
	},
	data() {
		return {}
	},
	computed: {
		issuer() {
			return this.$store.state.issuers.current
		},
		docs() {
			return this.$store.state.releases.currentList
		},
	},
})
</script>

<style lang="scss" scoped>
h3 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
}

.info {
	font-size: 18px;
}

.content {
	max-width: 50rem;
	img {
		max-width: 100%;
		max-height: 100%;
	}
}
</style>
