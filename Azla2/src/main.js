import { createApp } from 'vue'
import { createPinia, setMapStoreSuffix } from 'pinia'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
setMapStoreSuffix('')
setMapStoreSuffix('_store')
app.mount('#app')
