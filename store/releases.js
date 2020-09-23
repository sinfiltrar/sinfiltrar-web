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
    shortText: 'El presidente Alberto Fernández participará hoy, desde las 11:30, del lanzamiento...',
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
    shortText: '7 de septiembre de 2020 – Con motivo de los festejos de su cumpleaños número 70, Aerolíneas Argentinas presentó su avión con diseño y colores retro en un nuevo video institucional. ...',
    date: 'lun., 7 sept. 2020 a las 10:20',
    media: [
      {
        type: 'video',
        filename: 'video.mp4',
      },
    ],
  }, {
    title: 'MEONI REABRIÓ LA RENOVADA ESTACIÓN DE BOULOGNE SUR MER Y ASEGURÓ: "ESTAMOS PONIENDO A LA ARGENTINA EN MARCHA"',
    org: 'Ministerio de Transporte',
    content: `
![](https://ci6.googleusercontent.com/proxy/l3y4vOgY1q76zwPGFzQM8WayUUC1oSWAdwMjV_ZMuEgxoCseMhg-Fzpm-MXWZBtSOyX3l9ov7OmSrGqaCOVGZAH38D0aVEiyd_K4ySeJrGF6M_xikgRiUv3rocHoCsxRIQ=s0-d-e1-ft#https://www.argentina.gob.ar/sites/default/files/headertransporte_prensa_0.png)

_Así lo afirmó el Ministro de Transporte de la Nación, Mario Meoni, junto al Intendente de San Isidro, Gustavo Posse, en la inauguración de la renovada estación Boulogne Sur Mer de la línea Belgrano Norte que brindará mayor seguridad, comodidad y experiencia de viaje a más de 9.000 pasajeros diarios. Las obras, que se llevaron adelante con una inversión del Estado nacional cercana a los 100 millones de pesos, abarcaron la elevación de andenes, la instalación de luminarias led, módulo SUBE, nuevo señalamiento, y nuevos refugios que generan una mejor accesibilidad a todos los usuarios._

**7 de septiembre de 2020**.- El Gobierno Nacional, a través del Ministerio de Transporte de la Nación, lleva adelante un plan integral de mejoramiento del sistema ferroviario en todo el país. En esa línea, el Ministro Meoni inauguró hoy la renovación de la estación Boulogne Sur Mer de la línea Belgrano Norte que beneficiaría a más de 9.000 pasajeros diarios. Del evento participaron el subsecretario de Transporte de la Provincia de Buenos Aires, Alejo Supply; el presidente de Trenes Argentinos Infraestructura, Ricardo Lissalde; el presidente de Trenes Argentinos Operaciones, Martín Marinucci; el director del Banco Provincia de Buenos Aires, Sebastián Galmarini; Damián Contreras, presidente de Trenes Argentinos Capital Humano; secretario General de La Fraternidad, Omar Maturano; y el secretario general de la Unión Ferroviaria (UF), Sergio Sasia.

Luego de dialogar con los trabajadores, Meoni afirmó que “esta es una obra muy significativa que tiene un impacto muy importante sobre la población. Lamentablemente tuvo las mismas complicaciones que muchas estaciones que empezaron a hacerse en 2018 y que por distintas razones se fueron paralizando. Cada estación, en cada localidad, nuclea la vida social, laboral, es donde hay actividad económica y se debe priorizar. Una estación de trenes debe ser segura, iluminada, con altavoces, con cámaras de videovigilancia que seguramente trabajarán en conjunto con el centro de monitoreo municipal”.

Además, agregó que “cada vez que inauguramos una obra, estamos mejorando la calidad de vida de la gente, dándole más seguridad y tranquilidad. Por eso, no importa si el que opera la vía es privado o es público. Nosotros estamos detrás de la idea de que cada argentino, de Buenos Aires y de todo el país, se sienta dentro del mapa de la Argentina y no excluido. Pensamos en cada vecino, en cada ciudadano que usa la estación del ferrocarril, el transporte público. Queremos mejorar la infraestructura de todas las estaciones de trenes a lo largo y ancho del Gran Buenos Aires: ya tenemos 50 entre programadas, en obra, comenzando a construirse, licitándose o proyectándolas. Estamos pensando en cómo brindar hoy, ahora y no dentro de 30 años, una mejor calidad de vida a los argentinos. En el marco de la pandemia, que impacta de manera negativa en muchos aspectos, hoy priorizamos el trabajo. Es el pedido de nuestro presidente Alberto Fernández, acelerar los procesos para poner en marcha todas estas obras y generar más trabajo. Y ese es nuestro objetivo. Estamos poniendo a la Argentina en marcha.”

Por su parte, el intendente de San Isidro, Gustavo Posse, declaró que "esta obra impacta en 200 mil habitantes del Gran Buenos Aires, y  agrega una importante inyección económica a la zona comercial de Boulogne. Era una obra muy esperada".

Las obras de renovación de la estación Boulogne Sur Mer eran esperadas por todos los vecinos y usuarios luego de que en 2018 la estación sufriera un desmoronamiento de un andén provisorio, causando heridas a varios pasajeros.

El Ministerio de Transporte de la Nación, conducido por Meoni, llevó adelante la elevación de andenes, la construcción de nuevos halls de andén, nuevos refugios, nueva boletería, instalación de luminarias led, nuevo módulo SUBE, mejoramiento de señalamiento y sistema de audio y cámaras que brindan mayor seguridad a los pasajeros.

**Transporte reactiva obras ferroviarias que generan nuevos empleos con inversiones del Estado Nacional**

En total, el Ministerio de Transporte de la Nación lleva adelante obras ferroviarias en 10 municipios de la Provincia de Buenos Aires: Pilar, Malvinas Argentinas, Escobar, Ezeiza, Presidente Perón, San Fernando, Cañuelas, Avellaneda, Quilmes y San Isidro.

La inversión del Estado Nacional es superior a los 5.500 millones de pesos y generan más de 6.000 nuevos empleos, impactando positivamente en mejorar las líneas de trenes Belgrano Norte, San Martín, Mitre y Roca.

A su vez en AMBA, el Gobierno nacional desarrolla la construcción de paradas seguras en 24 municipios, brindando mayor seguridad y comodidad a todos los argentinos y argentinas que utilizan diariamente el transporte público.

Hipólito Yrigoyen 250, piso 12 (C1064AAB) Ciudad de Buenos Aires, Argentina. 

[www.argentina.gob.ar/transporte](http://www.argentina.gob.ar/transporte)

  

  

[twitter](https://twitter.com/MindeTransporte)| [facebook](https://www.facebook.com/MinisterioDeTransporteDeLaNacionArgentina/)| [instagram](https://www.instagram.com/ministeriodetransporte/)
    `,
    shortText: `Así lo afirmó el Ministro de Transporte de la Nación, Mario Meoni, junto al Intendente de San Isidro, Gustavo Posse, en la inauguración de la renovada estación Boulogne Sur Mer de la línea Belgrano Norte que brindará mayor seguridad, comodidad y experiencia de viaje a más de 9.000 pasajeros diarios. Las obras, que se llevaron adelante con una inversión del Estado nacional cercana a los 100 millones de pesos, abarcaron la elevación de andenes, la instalación de luminarias led, módulo SUBE, nuevo señalamiento, y nuevos refugios que generan una mejor accesibilidad a todos los usuarios`,
    date: 'Mon, Sep 7, 6:21 PM',
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
        commit('setCurrent', sampleReleases[2])
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

