<template>
	<div class="d-flex flex-column h-100">
		<header :class="{ slim: scrolled }">
			<div class="container">
				<h1 class="title">
					<nuxt-link to="/">sinfiltr.ar</nuxt-link>
					<small>(beta)</small>
				</h1>
				<h2 class="subtitle">
					Todas las noticias de los organismos oficiales en un sólo
					lugar
				</h2>
			</div>
		</header>
		<main :class="{ container: true, pad: !scrolled }">
			<Nuxt />
		</main>
		<footer>
			<div class="container d-flex">
				<div class="footer-logo mr-auto">&copy; 2020 sinfiltr.ar</div>
				<div class="footer-nav d-flex">
					<a href="mailto:info@sinfiltr.ar"> Contacto </a>
					<a href="https://github.com/sinfiltrar/">
						Ver en
						<img src="~/assets/img/Github_Logo.png" />
					</a>
				</div>
			</div>
		</footer>
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
	created() {
		window.addEventListener('scroll', this.handleScroll)
		window.addEventListener('resize', this.handleScroll)
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('resize', this.handleScroll)
	},
	methods: {
		handleScroll(event: any) {
			if (window.innerWidth < 576) {
				this.scrolled = false
			} else {
				this.scrolled =
					document.body.scrollTop > 80 ||
					document.documentElement.scrollTop > 80
			}
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

html,
body,
#__nuxt,
#__layout {
	height: 100%;
}

body {
	font-family: 'Open Sans', sans-serif;
}

main {
	transition: 0.8s;
	padding-top: 9rem;
	flex: 1 0 auto;
	&.pad {
		padding-top: 18rem;
	}
}

.title {
	font-family: 'Dosis', sans-serif;
	display: block;
	font-weight: 200;
	font-size: 100px;
	letter-spacing: 1px;
	transition: 0.4s;

	a {
		color: #fff;
		text-decoration: none;
		transition: 0.4s;
		display: inline-block;

		&::after {
			content: '';
			width: 0;
			height: 3px;
			display: block;
			background: #fff;
			transition: 300ms;
		}

		&:hover::after {
			width: 100%;
		}
	}
}

.title small {
	font-family: 'Open Sans', sans-serif;
	font-weight: 400;
	font-size: 36px;
	color: #6abef7;
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
	background-color: #209cee;
	transition: 0.4s;
	padding-top: 3rem;

	&.slim {
		padding-top: 1rem;
		padding-bottom: 1rem;
		.title {
			font-size: 36px;
			small {
				font-size: 16px;
				margin-left: 0;
			}
			a::after {
				height: 1px;
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

@media (min-width: 576px) {
	header {
		overflow: hidden;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 99;
		padding-bottom: 1rem;

		&.slim {
			padding-top: 1rem;
			padding-bottom: 1rem;
			.title {
				font-size: 36px;
				small {
					font-size: 16px;
					margin-left: -20px;
				}
			}
		}
	}
}
@media (max-width: 575.98px) {
	header {
		.title {
			padding-bottom: 2rem;
			line-height: 0.4;
		}
	}
	main {
		padding-top: 2rem;
		&.pad {
			padding-top: 2rem;
		}
	}
}

footer {
	flex-shrink: 0;
	background-color: #f3f3f4;
	line-height: 3rem;
	.footer-nav {
		font-size: 14px;
		a {
			color: #333;
			margin-left: 2rem;
			text-decoration: none;
		}
	}
	.footer-logo {
		font-family: 'Dosis', sans-serif;
		font-weight: 200;
	}
	img {
		height: 1.5rem;
		margin-top: -3px;
	}
}

.spinner-border-sm {
	border-width: 0.08em;
}
</style>
