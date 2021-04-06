<template>
    <div>
        <h3 class="mb-3">
            Últimos comunicados
        </h3>
        <p class="d-flex align-items-center" v-if="$fetchState.pending">
            <b-spinner small class="mr-1" label="Cargando..."></b-spinner>
            Cargando...
        </p>
        <DocsList :docs="releases"></DocsList>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {}
    },
    async fetch() {
        await this.$store.dispatch('releases/getLatest')
    },
    computed: {
        releases () {
            return this.$store.state.releases.latest
        }
    },
})
</script>

<style lang="scss">
.card-header {
    background: none;
    border-bottom: none;
    padding-bottom: 0;
    color: #666;
}
.card-text {
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.card-body {
    padding-bottom: 0;
}
.card-footer {
    background: none;
    border-top: none;
    padding-top: 0;
}
</style>
