import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './axios/api'
const app = createApp(App);
app.config.globalProperties.$ssd = api
// let http =()=>{
//     console.log('http://127.0.0.1:3000')
//     return 'success';
// }
// const http = axios.create({
//     baseURL: 'http://127.0.0.1:3000',
// });
// app.config.globalProperties.$http=()=>{
//     console.log('http://127.0.0.1:3000');
// }
// app.config.globalProperties.$http=http;
// app.config.globalProperties.$http=http;
// app.config.globalProperties.$filter = {
//     foo() {
//           return http
//         // return axios.create({
//         //     baseURL: 'http://127.0.0.1:3000',
//         // });
//     },
//     bar() {
//         const baseURL= 'http://127.0.0.1:3000'
//         return baseURL
//     }
// }

app.use(store).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(VueAxios, axios).mount('#app')
