<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <input type="text" v-model="this.aid" />
    </div>
    <div>
      <input type="text" v-model="this.title"/>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
  </div>
</template>

<script>
// import axios from 'axios'
const axios = require('axios')
export default {
  data() {
    return {
      aid: null,
      title: ''
    }
  },

  mounted() {
    console.log("mounted")
    // const axios = require('axios')
    // 向给定ID的用户发起请求
    axios.get('http://localhost:3000/find')
      .then(function (response) {
        // 处理成功情况
        console.log(response.data);
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
  },
  methods: {
    save() {
      console.log('done')
      // axios.post('http://localhost:3000/create', {
      //   aid: this.aid,
      //   title: this.title
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
}
</script>
