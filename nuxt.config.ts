// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	srcDir: 'src/',
	dir: {
		public: 'public',
	},

	devServer: {
		host: '0.0.0.0',
		port: 3090,
	},

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover',
			title: 'Repaid',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},

	plugins: [{ src: '~/plugins/aos.client.ts', mode: 'client', ssr: false }],

	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},

	modules: ['nuxt-icons'],

	css: ['~/assets/styles/common.scss', '~/assets/styles/reset.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				additionalData: '@import "@/assets/styles/default.scss";',
			},
		},
		optimizeDeps: {
			exclude: ['*.ts', '*.vue'],
		},
	},

	build: {
		analyze: true,
	},
})
