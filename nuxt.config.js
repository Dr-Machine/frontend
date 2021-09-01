export default {
	mode: 'universal',

	head: {
		title: 'Dr. Machine',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	loading: { color: '#00D1B2' },

	css: [
		'slick-carousel/slick/slick.css',
		'slick-carousel/slick/slick-theme.css'
	],

	plugins: [
		{ src: '~/plugins/slick', mode: 'client' }
	],

	buildModules: [
		'@nuxtjs/tailwindcss'
	],

	modules: ['nuxt-svg-loader'],
	purgeCSS: {
		whitelist: ['hidden'],
		whitelistPatterns: [/md:w-[1-6]/]
	},

	build: {
		extend(config, ctx) {
			loaders: {
				file: {
					esModule: false
				}
			}
		}
	},

	server: {
		port: 5000
	}
}
