import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/bootstrap-overrides.css'
import '@/assets/colors.css'
import '@/assets/typography.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
