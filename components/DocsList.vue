<template>
  <div>
    <b-card-group columns class="text-left">
      <b-card
        :title="doc.title"
        :header="doc.issuer ? doc.issuer.name : ''"
        :key="index"
        @click="$router.push({name: 'comunicados-slug', params: {slug: doc.slug}})"
        class="doc"
        v-for="(doc, index) in docs"
      >
        <b-card-text>
          {{ doc.short_text }}
        </b-card-text>
        <div class="media" v-if="doc.media">
          <div :class="'media-' + media.type" v-for="media in doc.media">
          </div>
        </div>
        <template v-slot:footer>
          <nuxt-link :to="{name: 'comunicados-slug', params: {slug: doc.slug}}" class="card-link">Leer más</nuxt-link>
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
