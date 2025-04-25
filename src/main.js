import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css' //bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //bootstrap js
import 'bootstrap-icons/font/bootstrap-icons.css' //bootstrap icons
import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css' //antdv css
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.mount('#app')
