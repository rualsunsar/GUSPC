export default {
  server: {
    port: 3002 // 指定端口号
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '绿意UnderSun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '绿意UnderSun,绿意,植物养护,室内植物,户外植物,盆栽植物,植物种植,植物生长环境,光照,水分,温度,植物品种介绍,特点,栽培方法,植物疾病防治,花卉养护,绿植,养植物的技巧知识' },
      { hid: 'description', name: 'description', content: '绿意UnderSun,绿意,以植物陶冶情操，杰志武修身养性，用植物点缀生活，从基本入手，家庭生活植物养成攻略。' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/axios'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name','plant.name']
  },
  // axios: {
  //   prefix: '/api/',
  //   proxy: true
  // },
  // proxy: {
  //   '/api/': {
  //     target: 'http://124.222.91.249:8002/',
  //     pathRewrite: {
  //       '^/api/': ''
  //     }
  //   }
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
