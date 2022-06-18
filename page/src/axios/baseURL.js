import axios from "axios";

const service = axios.create({
    baseURL: 'http://127.0.0.1:3000/api',
    timeout: 5000  //访问超时的时间
});
export default service