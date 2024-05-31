import './assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router).mount('#app')
