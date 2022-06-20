import service from './baseURL' // 引入刚刚创建的域名文件
const base = '/api';// 解决跨域问题
const api = {
    get(params) {
        return service.get(`/`, { params: params })
    },
    find(params) {
        return service.get(`/find`, { params: params })
        // const raw = await HotSpot.find({ title: 'hello create!!' })
        // res.send(raw)
    },
    // post方法
    getLogin(params) {
        return service.post(`${base}/login`, { params: params })
    },
    create(params) {
        return service.get(`/create`, { params: params })
    },
    // get方法
    getUsersList(params) {
        return service.get(`${base}/users`, { params: params })
    },
    // put方法
    getCar(id, state) {
        return service.put(`${base}/users/${id}/state/${state}`)
    },
    // 如需传参数可以这样
    getPeople(id, state, params) {
        return service.put(`${base}/users/${id}/state/${state}`, { params: params })
    },
};
export default api