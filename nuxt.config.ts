// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ["~/assets/sass/app.sass"],
	pages: true,
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			titleTemplate: "%sMontyhub",
			htmlAttrs: {
				lang: "en",
			}, 
			// link: [
			// 	{
			// 		rel: "icon",
			// 		type: "image/png",
			// 		href: "https://eaula.vercel.app/images/favicon-64x64.png",
			// 	},
			// 	{
			// 		rel: "icon",
			// 		type: "image/png",
			// 		href: "https://eaula.vercel.app/images/favicon-32x32.png",
			// 	},
			// 	{
			// 		rel: "icon",
			// 		type: "image/png",
			// 		href: "https://eaula.vercel.app/images/favicon-16x16.png",
			// 	},
			// 	{
			// 		rel: "apple-touch-icon",
			// 		type: "image/png",
			// 		href: "https://eaula.vercel.app/images/apple-touch-icon-180x180.png",
			// 	},
			// 	{
			// 		rel: "mask-icon",
			// 		href: "https://eaula.vercel.app/images/icons/mask-icon.svg",
			// 		color: "#32393C",
			// 	},
			// 	{
			// 		rel: "icon",
			// 		sizes: "192x192",
			// 		href: "https://eaula.vercel.app/images/android-chrome-192x192.png",
			// 	},
			// 	{
			// 		rel: "icon",
			// 		sizes: "512x512",
			// 		href: "https://eaula.vercel.app/images/android-chrome-512x512.png",
			// 	},
			// ],
			meta: [
				{ name: "theme-color", content: "#AEB4BD" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "author", content: "Montyhub" },
				{ name: "og:site_name", content: "Montyhub" },
				{ name: "og:image:alt", content: "Montyhub" },
				{ name: "og:image:width", content: "1200" },
				{ name: "og:image:height", content: "630" },
				{ name: "mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
				{ name: "robots", content: "index, follow" },
			],
		}
	},
	image: {
		provider: "twicpics",
	},
	fonts: {
		families: [
			{ name: 'Inter', weights: ['400 900'] }
		]
	},
	modules: [ 
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxtjs/tailwindcss',
		"@nuxtjs/google-fonts"
	]
})