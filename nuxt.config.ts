// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores']
  },
  devtools: { enabled: true },
  css: ['~/assets/style/fonts.css', '~/assets/style/global.css'],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  modules: [
    'nuxt-windicss',
    'vue3-carousel-nuxt',
    'vue-yandex-maps/nuxt',
    '@invictus.codes/nuxt-vuetify',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@vee-validate/nuxt'
  ],
  vuetify: {
    moduleOptions: {
      treeshaking: true
    }
  },
  yandexMaps: {
    apikey: '00efa97b-583d-4611-aa38-6b74d510bc7e'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'https://online.mosgortur.ru'
    }
  },
  plugins: ['~/plugins/click-outside.js', '~/plugins/thtml.ts'],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon/android-icon-192x192.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/favicon/apple-icon-57x57.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/favicon/apple-icon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/favicon/apple-icon-60x60.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/favicon/apple-icon-76x76.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/favicon/apple-icon-114x114.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/favicon/apple-icon-120x120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/favicon/apple-icon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/favicon/apple-icon-152x152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-icon-180x180.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-icon-180x180.png'
        },
        { rel: 'manifest', href: '/favicon/manifest.json' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        {
          name: 'msapplication-TileImage',
          content: '/favicon/ms-icon-144x144.png'
        },
        { name: 'theme-color', content: '#ffffff' }
      ],
      title: 'Поиск туров'
    }
  }
})
