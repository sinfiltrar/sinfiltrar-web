<template>
    <div>
        <p class="d-flex align-items-center" v-if="$fetchState.pending">
            <b-spinner small class="mr-1" label="Cargando..."></b-spinner>
            Cargando...
        </p>
        <div class="content">
            <div class="info d-flex mb-4">
                <h2 class="">{{ issuer.name }}</h2>
            </div>
        </div>
        <DocsList v-bind:docs="docs"></DocsList>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
        }
    },
    async fetch() {
        await this.$store.dispatch('issuers/getOne', this.$route.params['slug'])
        await this.$store.dispatch('releases/getListByIssuer', this.$route.params['slug'])
    },
    computed: {
      issuer () {
        return this.$store.state.issuers.current
      },
      docs () {
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
