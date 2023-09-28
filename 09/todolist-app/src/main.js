import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt";

const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.emitter = emitter   // mount 이전에 설정되어야 함.
app.mount('#app')
// createApp(App).mount('#app') // 위의 코드와 동일

