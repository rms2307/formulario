import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

const app  = createApp(App)

app.use(Maska)
app.config.globalProperties.$moment = moment

app.mount('#app')