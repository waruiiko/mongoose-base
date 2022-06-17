<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div>
        <!-- {{ $filter.foo() }} -->aid:
        <input type="text" v-model="this.aid" />
      </div>
      <div>
        title:
        <input type="text" v-model="this.title" />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'
export default {
  data() {
    return {
      aid: '',
      title: ''
    }
  },
  setup() {
    onMounted(() => {
      const internalInstance = getCurrentInstance()
      const proxy = internalInstance?.appContext.config.globalProperties
      // console.log(proxy?.$filter.bar())
      // console.log(proxy?.$filter)
      proxy?.$filter.foo().get('/get')
        .then(function (response) {
          // 处理成功情况
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

  mounted() {
    // console.log("mounted")

    // const axios = require('axios')
    // 向给定ID的用户发起请求
    // this.$http.get('/get')
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log('gg')
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // 总是会执行
    //   });
  },
  methods: {
    save() {
      const internalInstance = getCurrentInstance()
      const proxy = internalInstance?.appContext.config.globalProperties
      // console.log(proxy?.$filter)
      proxy?.$filter.foo().get('/get')
        .then(function (response) {
          // 处理成功情况
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
      // this.$http.post('/ca', this.model)
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
