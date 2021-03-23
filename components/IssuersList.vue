<template>
    <div>
        <h3 class="mb-3">
            Organismos Registrados
        </h3>
        <p class="d-flex align-items-center" v-if="$fetchState.pending">
            <b-spinner small class="mr-1" label="Cargando..."></b-spinner>
            Cargando...
        </p>
        <ul v-for="(issuer, index) in issuers">
          <li @click="$router.push({name: 'issuer-slug', params: {slug: issuer.slug}})">{{ issuer.name }}</li>
        </ul>
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
        await this.$store.dispatch('issuers/getAll')
    },
    computed: {
        issuers () {
            return this.$store.state.issuers.all
        }
    },
})

</script>

<style lang="scss" scoped>
  ul {
    padding-left: 0;
    list-style: none;
  }
</style>
