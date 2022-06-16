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
import http from './http'
app.config.globalProperties.$filter = {
    foo() {
          return http
        // return axios.create({
        //     baseURL: 'http://127.0.0.1:3000',
        // });
    },
    bar() {
        const baseURL= 'http://127.0.0.1:3000'
        return baseURL
    }
}
```
## Step 2
## Step 2
## Step 2
## Step 2