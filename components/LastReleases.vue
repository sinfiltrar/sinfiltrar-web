<template>
    <div>
        <h3 class="mb-3">
            Últimos comunicados
        </h3>
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
                        <b-icon-arrow-up></b-icon-arrow-up>
                </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        let releases = [
            {
                title: 'El Presidente participará del lanzamiento de la producción argentina de motocicletas Royal Enfield',
                org: 'Secretaría de Comunicación y Prensa',
                content: 'El presidente Alberto Fernández participará hoy, desde las 11:30, del lanzamiento...',
                date: 'dom., 6 sept. 2020 a las 8:54',
                media: [
                    {
                        type: 'image',
                        filename: 'image.jpg',
                    },
                    {
                        type: 'image',
                        filename: 'image2.jpg',
                    },
                ],
            }, {
                title: 'AEROLINEAS ARGENTINAS PRESENTÓ SU AVIÓN CON DISEÑO RETRO',
                org: 'Aerolineas Argentinas S.A.',
                content: '7 de septiembre de 2020 – Con motivo de los festejos de su cumpleaños número 70, Aerolíneas Argentinas presentó su avión con diseño y colores retro en un nuevo video institucional. ...',
                date: 'lun., 7 sept. 2020 a las 10:20',
                media: [
                    {
                        type: 'video',
                        filename: 'video.mp4',
                    },
                ],
            },
        ]
        return {
            releases: new Array(4).fill(releases).flat(),
            orgs: [
                {
                    name: 'Secretaría de Comunicación y Prensa',

                },
            ],
        }
    },
})
</script>

<style lang="scss" scoped>
.release {
    text-align: 'left';
}
</style>
