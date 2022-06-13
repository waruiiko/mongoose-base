import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './http'

// createApp(App).prototype.$http = http;
const app = createApp(App);
app.config.globalProperties.$http=http;

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
