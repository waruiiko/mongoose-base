import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import http from './http'
const app = createApp(App);

let http =()=>{
    console.log('http://127.0.0.1:3000')
    return 'success';
}
// const http = axios.create({
//     baseURL: 'http://127.0.0.1:3000',
// });
app.config.globalProperties.$http=http;
// app.config.globalProperties.$http=http;
app.use(store).use(router).use(VueAxios,axios).mount('#app')
