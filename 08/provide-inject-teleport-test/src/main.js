import './assets/main.css'

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";


import {createApp} from 'vue'
import App from './App.vue'

library.add(
    far, fas
)

let app =createApp(App)
app.config.productionTip = false
// app.config.unwrapInjectedRef = true
app.component('font-awesome-icon', FontAwesomeIcon)
window.vm = app.mount('#app')
