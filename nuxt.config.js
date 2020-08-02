
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'XAI Land',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'}
    ],
    script: [
      { type: 'text/javascript', src: 'https://sgisapi.kostat.go.kr/OpenAPI3/auth/javascriptAuth?consumer_key=e6ead69b494f4bc294e9' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'static/main.css',
    'bulma/css/bulma.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
  ],

  //PWA
  manifest: {
    name: 'XAI Land App',
    short_name: 'XAI Land PWA',
    lang: 'en',
    display: 'standalone',
  },
  workbox: {
  runtimeCaching: [
    {
      urlPattern: 'https://fonts.googleapis.com/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern:  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: 'https://fonts.gstatic.com/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: 'https://cdn.snipcart.com/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    }
  ]
  },
  toast: {
    position: 'top-center',
    // register: [ // Register custom toasts
    //   {
    //     name: 'my-error',
    //     message: 'Oops...Something went wrong',
    //     options: {
    //       type: 'error'
    //     }
    //   }
    // ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://54.180.88.152:8000/'
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/auth/jwt', method: 'get', propertyName: 'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
  //       },
  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //       // autoFetchUser: true
  //     }
  //   }
  // },
  /*
  ** Loading bar
  */
  loading: {
    color: '#80D98A',
    height: '2px'
  },
  /*
  ** Build configuration
  */
 build: {
  extend(config, ctx) {
    if (ctx.isDev) {
      config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
    }
  }
}
}
