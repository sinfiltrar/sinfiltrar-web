<template>
  <div>
     <header :class="{slim: scrolled}">
         <div class="container">
             <h1 class="title">sinfiltr.ar <small>(beta)</small></h1>
             <h2 class="subtitle">
                 Todas las noticias de los organismos oficiales en un sólo lugar
             </h2>
         </div>
     </header>
     <main :class="{container: true, pad: !scrolled}">
         <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
      return {
          scrolled: false,
      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event: any) {
      this.scrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
    },
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
   font-family: 'Open Sans', sans-serif;
}

main {
  min-height: 100vh;

  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */

    transition: 0.8s;
    padding-top: 9rem;
    &.pad {
        padding-top: 18rem;
    }
}

.title {
  font-family: 'Dosis', sans-serif;
  display: block;
  font-weight: 200;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
  transition: 0.4s;
}

.title small {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 36px;
  margin-left: -20px;
  color: #6ABEF7;
  transition: 0.4s;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 25px;
  color: #35495e;
  word-spacing: 5px;
  padding-bottom: 15px;
  transition: 0.4s;
}

/* sticky header with transitions */

header {
    background-color: #209CEE;
    overflow: hidden;
    transition: 0.4s;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    padding-top: 3rem;
    padding-bottom: 1rem;

    &.slim {
        padding-top: 1rem;
        padding-bottom: 1rem;
        .title {
            font-size: 36px;
            small {
                font-size: 16px;
                margin-left: 0;
            }
        }
        .subtitle {
            opacity: 0;
            height: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
}

@media (max-width: 575.98px) {
    header {
        position: relative;
        .title {
            padding-bottom: 2rem;
            line-height: 0.4;
            small {
                margin-left: 0;
            }
        }
    }
    main {
        padding-top: 2rem;
        &.pad {
            padding-top: 2rem;
        }
    }
}

</style>
