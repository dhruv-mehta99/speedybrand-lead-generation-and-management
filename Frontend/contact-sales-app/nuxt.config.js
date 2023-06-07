import colors from 'vuetify/es5/util/colors'

const routes = [
  {
    url: '/contact-sales/',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2021-02-16'
  }
]

export default {
  generate: {
    routes: routes,
    fallback: '404.html',
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  env: {
    baseURL: 'http://localhost:8080'
  },

  dev: true,

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  head: { link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }] },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/common', '~/assets/styles'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/svg-sprite',
  ],

  gtm: {
    id: 'GTM-PN7TLPG',
    enabled: true
  },

  svgSprite: {
    input: '~/assets/svg/'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Poppins'
      }
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#161638',
          accent: '#00abf4',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
