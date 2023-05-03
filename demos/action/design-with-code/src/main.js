import Vue from 'vue'
import VueRouter from 'vue-router'
import './components/registerAll'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

Vue.config.productionTip = false

new Vue({ router, render: (h) => h(App) }).$mount('#app')
