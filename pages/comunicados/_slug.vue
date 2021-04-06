<template>
    <div>
        <p class="d-flex align-items-center" v-if="$fetchState.pending">
            <b-spinner small class="mr-1" label="Cargando..."></b-spinner>
            Cargando...
        </p>
        <div class="content m-auto" v-if="release">
          <div class="info d-flex mb-4">
            <div class="mr-auto">
              {{ release.issuer ? release.issuer.name : '(aún no asignado a un organismo)' }}
            </div>
            <div>
              {{ release.issued_at }}
            </div>
          </div>
          <h3 class="mb-3">
              {{ release.title }}
          </h3>
          <div v-html="$md.render(turndownService.turndown(release.body_html))"></div>
          <hr>
          <em>Hasta aquí, el comunicado de {{ release.issuer.name }}</em>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
let TurndownService = require('turndown').default

export default Vue.extend({
    data() {
        return {
           turndownService: new TurndownService(),
        }
    },
    async fetch() {
        await this.$store.dispatch('releases/getRelease', this.$route.params['slug'])
    },
    computed: {
        release () {
            return this.$store.state.releases.current
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
