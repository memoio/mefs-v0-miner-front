module.exports = {
  head: {
    title: '矿池',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'test' },
    ],
    link: [
      { rel: 'icon', href: 'img/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/index.css'},
    ],
    script: [
      {src: 'js/index.js'},
    ],
  },
  build: {
    // vendor: [
    //   '@/assets/js/index.js'
    // ],
    // extend(config, { isDev, isClient }){
    //   if (isDev && isClient) {
    //     console.log(config.module.rules)
    //   }
    // },
  },
  css: [
    // '@/assets/scss/index.scss'
  ],
  router: {
    base: '/orePool/'
  }
}

