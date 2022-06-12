// import axios from 'axios'

// const service = axios.create({
//   baseURL: '/api',
//   timeout: 5000,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'token': 'your_token',
//     'X-Requested-With': 'XMLHttpRequest',
//   }
// });

// service.interceptors.request.use(
//   (config) => {
//     console.log(config);
//     return config
//   },
//   (error) => {
//     console.log(error)
//     return Promise.reject(error);
//   }
// )

// service.interceptors.response.use(
//   (response) => {
//     console.log(response)
//     const dataAxios = response.data
//     const code = dataAxios.reset
//     console.log(code)
//     return dataAxios
//   },
//   (error) => {
//     console.log(error)
//     return Promise.reject(error)
//   }

// )

// export default service