export const state = () => ({
  latest: [],
  current: undefined,
})

export const mutations = {
  setLatest(state, releases) {
    state.latest = releases;
  },
  setCurrent(state, current) {
    state.current = current;
  },
}

const sampleReleases = [
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

export const actions = {
  getLatest({ commit }) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         commit('setLatest', new Array(4).fill(sampleReleases).flat())
         resolve()
      }, 500)
    })

    /*
    return axios.get('http://my-api/stars').then(res => {
      // transform res.data
      commit('setLatest', res.data)
    })
    */
  },
  getRelease({ commit }, slug) {
    return new Promise((resolve, reject) => {
       commit('setCurrent', undefined)
       setTimeout(() => {
         commit('setCurrent', sampleReleases[0])
         resolve()
      }, 500)
    })

    /*
    return axios.get('http://my-api/stars').then(res => {
      // transform res.data
      commit('setLatest', res.data)
    })
    */
  },
}

