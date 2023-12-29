import {faApple} from '@fortawesome/free-brands-svg-icons';
import './assets/index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core';

import SimpleVueValidator from "simple-vue3-validator";
import Vue3Autocounter from "vue3-autocounter";




import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {
    faArrowLeftLong,
    faArrowRightLong,
    faBuilding,
    faCode,
    faHouseChimney,
    faLaptop,
    faMobile,
    faPenNib,
    faPeopleGroup,
    faPhone,
    faVial,
    faLocationDot,
    faEnvelope,
    faClock
} from '@fortawesome/free-solid-svg-icons';







/* add icons to the library */
library.add(
    faArrowRightLong,
    faArrowLeftLong,
    faHouseChimney,
    faLaptop,
    faBuilding,
    faPhone,
    faCode,
    faMobile,
    faPenNib,
    faVial,
    faApple,
    faPeopleGroup,
    faLocationDot,    
    faEnvelope,
    faClock
)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).component('vue3-autocounter', Vue3Autocounter)

app.use(createPinia())
app.use(router)
app.use(SimpleVueValidator)

app.mount('#app')