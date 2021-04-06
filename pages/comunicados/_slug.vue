<template>
  <div>
    <p v-if="$fetchState.pending" class="d-flex align-items-center">
      <b-spinner small class="mr-1" label="Cargando..."></b-spinner>
      Cargando...
    </p>
    <div v-if="release" class="content m-auto">
      <div class="info d-flex mb-4">
        <div class="mr-auto">
          {{
            release.issuer
              ? release.issuer.name
              : '(aún no asignado a un organismo)'
          }}
        </div>
        <div>
          {{ release.issued_at }}
        </div>
      </div>
      <h3 class="mb-3">
        {{ release.title }}
      </h3>
      <div
        v-html="$md.render(turndownService.turndown(release.body_html))"
      ></div>
      <hr />
      <em>Hasta aquí, el comunicado de {{ release.issuer.name }}</em>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const TurndownService = require('turndown').default

export default Vue.extend({
  async fetch() {
    await this.$store.dispatch('releases/getRelease', this.$route.params.slug)
  },
  data() {
    return {
      turndownService: new TurndownService(),
    }
  },
  computed: {
    release() {
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
