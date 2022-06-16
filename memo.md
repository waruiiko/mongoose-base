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

## Step 4
## Step 5
## Step 6