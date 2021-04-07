<template>
	<div>
		<b-card-group columns class="text-left">
			<b-card
				v-for="(doc, index) in docs"
				:key="index"
				:title="doc.title"
				:header="doc.issuer ? doc.issuer.name : ''"
				class="doc"
				@click="
					$router.push({
						name: 'comunicados-slug',
						params: { slug: doc.slug },
					})
				"
			>
				<b-card-text>
					{{ doc.short_text }}
				</b-card-text>
				<div v-if="doc.media" class="media">
					<div
						v-for="media in doc.media"
						:class="'media-' + media.type"
					></div>
				</div>
				<template v-slot:footer>
					<nuxt-link
						:to="{
							name: 'comunicados-slug',
							params: { slug: doc.slug },
						}"
						class="card-link"
						>Leer más</nuxt-link
					>
				</template>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	props: ['docs'],
})
</script>
