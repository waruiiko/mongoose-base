import axios from "axios";

// const http = axios.create({
//     baseURL: 'http://127.0.0.1:3000'
// });



const http = axios.create({
    baseURL: 'http://127.0.0.1:3000',
});

// http({
//     url:'/get'
// })

export default http