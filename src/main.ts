import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/gobal.scss'

createApp(App).use(element).use(store).use(router).mount('#app')
