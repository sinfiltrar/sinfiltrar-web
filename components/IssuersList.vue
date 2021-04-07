<template>
	<div>
		<h3 class="mb-3">Organismos</h3>
		<p v-if="$fetchState.pending" class="d-flex align-items-center">
			<b-spinner small class="mr-1" label="Cargando..."></b-spinner>
			Cargando...
		</p>
		<ul v-for="(issuer, index) in issuers">
			<li>
				<nuxt-link
					:to="{
						name: 'organismos-slug',
						params: { slug: issuer.slug },
					}"
					>{{ issuer.name }}</nuxt-link
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	async fetch() {
		await this.$store.dispatch('issuers/getAll')
	},
	data() {
		return {}
	},
	computed: {
		issuers() {
			return this.$store.state.issuers.all
		},
	},
})
</script>

<style lang="scss" scoped>
ul {
	padding-left: 0;
	list-style: none;
}
</style>
