import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'
import withUUID from 'vue-uuid'

const app = withUUID(createApp(App))

app.use(createPinia())
app.use(router)

app.mount('#app')
