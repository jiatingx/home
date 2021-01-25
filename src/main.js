import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { install } from '@icon-park/vue-next/es/all'
const app = createApp(App)
install(app, 'i') // use custom prefix 'i', eg: icon is People, name is i-people.

import Vant from 'vant'
import 'vant/lib/index.less'

import axios from 'axios'
import VueAxios from 'vue-axios'

//全局过滤器
app.config.globalProperties.$filters = {}

app
  .use(Vant)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount('#app')
