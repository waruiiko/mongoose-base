npm install mongoose express nodemon

username: m220student
password: m220password

mongodb+srv://m220student:<password>@mflix.tsiey.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://m220student:m220password@mflix.tsiey.mongodb.net/?retryWrites=true&w=majority
___


# setup()中使用全局变量globalProperties

## Step 1
write plugin:http.js
```javascript
import axios from "axios";
//使用axios.create创建实例
const http = axios.create({
    baseURL: 'http://127.0.0.1:3000',
});

export default http
```

## Step 2
main.js中
```javascript
import http from './http'   //引入插件
app.config.globalProperties.$filter = {
    //此处app.config.globalProperties注册全局变量，这里与vue2中不同，无法使用$http,因此使用$filter或者其他未在全局注册的单词
    foo() { //创建一个函数，直接返回插件
          return http
    },
    bar() {
        console.log("我是bar")
        return "我是bar"
    }
}
```
## Step 3
vue组件中
```javascript
import { getCurrentInstance,onMounted} from 'vue'
export default {
  setup() {
        onMounted(() => {
            //获得实例
          const internalInstance = getCurrentInstance() 
            //proxy为main.js中注册的变量
          const proxy = internalInstance?.appContext.config.globalProperties
            //proxy?.$filter.foo()=http
            //http是插件导出的、由axios.create创建出来的实例
            //发起get请求
          proxy?.$filter.foo().get('/get')
          .then(function (response) {
            // 处理成功情况
            console.log('gg')
            console.log(response);
          })
          .catch(function (error) {
            // 处理错误情况
            console.log(error);
          })
          .then(function () {
            // 总是会执行
          });
    });
  },
}
```
## Step 4
在后端server中，有4个关键的文件
1.'./index.js'
    入口文件，创建监听端口、跨域引用、插件引用等
2.'./routes/admin/index.js'
    创建路由
3.'./plugins/db.js'
    连接数据库
4.'./model/HotSpot.js'
    创建模型（Schema）


-----------------
# 前端vue,如何使用axios实现接口的封装与调用
1，安装axios：在项目的控制栏里使用命令 npm install axios 安装axios

2，在src文件下新建一个axios文件

3，在axios文件下创建baseURL.js文件用于管理接口域名、创建api.js用于配置每个接口

4，在baseURL.js文件里面配置我们的域名：
```javascript
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://192.168.1.133:8080/api/',  //请求的地址
    timeout: 5000  //访问超时的时间
});

export default service;
```
5，在api.js文件里面配置我们的每一个接口：
```javascript
import axios from './baseURL' // 引入刚刚创建的域名文件
const base = '/api';// 解决跨域问题
const api = {
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
```
6，使用接口（第一种方法）：

在需要使用接口的组件里：
```javascript

import {要引入的方法名字} from ../axios/api.js

methods:{

        方法名({

        name：'张三',//向接口里面传递的数据，如果没有则不写

        age:'30',//向接口里面传递的数据，如果没有则不写

})

                 .then(res=>{ //成功的操作 })

                .catch(err=>{ //报错的操作});

}

```
7，使用接口（第二种方法）：

7.1在main.js文件里面

```javascript
import api from './axios/api.js'  //引入api.js文件
Vue.prototype.$api = api  // 将api文件挂载到vue实例上，这样就可以不用每一个组件里都引用接口文件
```

7.2在需要使用的组件里：
```javascript

methods:{

        this.$api.方法名()

                .then(res=>{ //成功的操作 })

                .catch(err=>{ //报错的操作});

}
————————————————
版权声明：本文为CSDN博主「向小江」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_43680785/article/details/123873017
```
