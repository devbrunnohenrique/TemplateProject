import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@/plugins/font-awesome'
import VueTheMask from 'vue-the-mask'

const pinia = createPinia()
const app = createApp(App)

app.use(VueTheMask)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
