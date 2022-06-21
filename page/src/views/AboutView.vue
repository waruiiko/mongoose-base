<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div>
        {{ name }}
        <!-- {{ $filter.foo() }} -->aid:
        <input type="text" v-model="this.aid" />
        {{ aid }}
      </div>
      <div>
        title:
        <input type="text" v-model="this.title" />
        {{ title }}
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
      <button type="submit" class="btn btn-primary" @click.prevent="getProxy">getProxy</button>
      <button type="submit" class="btn btn-primary" @click.prevent="getAPI">getAPI</button>
      <button type="submit" class="btn btn-primary" @click.prevent="create">create</button>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
// import useGetGlobalProperties from '../hooks/useGlobal'
export default {
  data() {
    return {
      aid: '',
      title: '',
      ssd: 'gg'
      // name:'xiaoming'
    }
  },
  setup() {
    function getProxy() {
      const internalInstance = getCurrentInstance()
      const proxy = internalInstance?.appContext.config.globalProperties
      return console.log(proxy)
    }


    function save() {
      getProxy()
    }

    // console.log(proxy?.$filter.foo())
    onMounted(() => {
      getProxy()
      // console.log(proxy?.$filter)
      //   const internalInstance = getCurrentInstance()
      //   const proxy = internalInstance?.appContext.config.globalProperties
      //   console.log(proxy?.$filter.bar())
      //   // console.log(proxy?.$filter)
      //   // proxy?.$filter.foo().get('/get')
      //   //   .then(function (response) {
      //   //     // 处理成功情况
      //   //     console.log(response);
      //   //   })
      //   //   .catch(function (error) {
      //   //     // 处理错误情况
      //   //     console.log(error);
      //   //   })
      //   //   .then(function () {
      //   //     // 总是会执行
      // });

    });
    const name = ref('小明')
    const age = ref(18)
    function plusOne() {
      age.value++ //想改变值或获取值 必须.value
    }
    return { //必须返回 模板中才能使用
      name, age, plusOne, save, getProxy
    }

  },

  mounted() {
    // this.getProxy().$ssd.get().then(function (response) {
    //   const myrssd= response.data
    //   return myrssd
    // })
    // console.log(
    //   this.getProxy().$ssd.create()
    //     .then(function (response) {
    //       // 处理成功情况
    //       console.log(response);
    //     })
    // )
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
    getAPI() {
      let data = {
        'title':this.title
      }
      this.$api.find(data)
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
      // console.log(this.$api);
      // console.log(this.$filter);
    },
    create() {
      let data = {
        'title':this.title
      }
      this.$api.create(data)
        .then(function (response) {
          // 处理成功情况
          console.log(data);
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
      // console.log(this.$api);
      // console.log(this.$filter);
    }
    // getProxy() {

    //   const globalProperties = useGetGlobalProperties()
    //   return globalProperties
    // console.log(globalProperties)
    // console.log(instance)
    // const internalInstance = getCurrentInstance()
    // const proxy = internalInstance?.appContext.config.globalProperties
    // // return console.log(proxy?.$filter.bar())
    // return proxy
    // },
    // save() {
    // this.getProxy()
    // console.log(this.myrssd)
    // console.log(this.getProxy().$ssd.create()
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log(response);
    //   })
    // )
    // const internalInstance = getCurrentInstance()
    // const proxy = internalInstance?.appContext.config.globalProperties
    // // console.log(proxy?.$filter)
    // proxy?.$filter.foo().get('/get')
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // 总是会执行
    //   });
    // this.$http.post('/ca', this.model)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
  }
}
</script>
