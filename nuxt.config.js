export default {
  mode: 'universal',
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxtjs2',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content' , '@nuxtjs/axios' , '@nuxtjs/auth'
  ],
  axios: {
    baseURL:'http://localhost:12345/api',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url:'login',
            propertyName: 'token'
          },
          user: {
            method: 'get',
            url: 'me',
            propertyName: 'user'
          },
          logout: false,
        }
      }
    },
    redirect: {
      login : '/login'
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, {isDev, isClient}) {
      config.node = {
        fs: "empty"
      }
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  

}
