import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Test from './components/test.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Test}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
