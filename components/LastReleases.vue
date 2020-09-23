<template>
    <div>
        <h3 class="mb-3">
            Últimos comunicados
        </h3>
        <p class="d-flex align-items-center" v-if="$fetchState.pending">
            <b-spinner small class="mr-1" label="Loading..."></b-spinner>
            Cargando...
        </p>
        <b-card-group columns class="text-left">
            <b-card
                :title="release.title"
                :header="release.org"
                class="release"
                v-for="release in releases"
                >
                <b-card-text>
                    {{ release.content }}
                </b-card-text>
                <div class="media" v-if="release.media">
                    <div :class="'media-' + media.type" v-for="media in release.media">
                    </div>
                </div>
                <template v-slot:footer>
                    <b-link href="#" class="card-link">Leer más</b-link>
                </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            orgs: [
                {
                    name: 'Secretaría de Comunicación y Prensa',

                },
            ],
        }
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
