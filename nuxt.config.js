const env = require('dotenv').config()

export default {
  target: 'static',
  env: env.parsed,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyBodyB',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/router'},
    { src: '~/plugins/contentful.js' },
    { src: '~/plugins/i18n.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-BE'
      },
      {
        code: 'en',
        iso: 'en-US'
      }
    ],
    defaultLocale: 'en',
    silentTranslationWarn: true,
    parsePages: false,
    pages: {
      'langues': {
        en: '/languages',
        fr: '/langues'
      }
    },
    vueI18n: {
      fallbackLocale: 'en',
      skipSettingLocaleOnNavigate: true,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
