import './assets/index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {
    faArrowLeftLong,
    faArrowRightLong,
    faBuilding,
    faCode,
    faHouseChimney,
    faLaptop,
    faPhone
} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(
    faArrowRightLong,
    faArrowLeftLong,
    faHouseChimney,
    faLaptop,
    faBuilding,
    faPhone,
    faCode
)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')