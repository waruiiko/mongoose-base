import axios from './baseURL' // 引入刚刚创建的域名文件
const base = '/api';// 解决跨域问题
const api = {
    create(params) {
        return axios.get(`/create`, {params: params})
    },
    get(params) {
        return axios.get(`/get`, {params: params})
    },
    // post方法
    getLogin(params) {
        return axios.post(`${base}/login`, {params: params})
    },
    // get方法
    getUsersList(params) {
        return axios.get(`${base}/users`, {params: params})
    },
    // put方法
    getCar(id, state) {
        return axios.put(`${base}/users/${id}/state/${state}`)
    },
    // 如需传参数可以这样
    getPeople(id, state, params) {
        return axios.put(`${base}/users/${id}/state/${state}`, {params: params})
    },
};
export default api