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