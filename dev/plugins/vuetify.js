import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi',
  }
})

const opts = {}

export default new Vuetify(opts)