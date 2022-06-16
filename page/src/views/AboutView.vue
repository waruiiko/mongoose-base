<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <!-- {{ $filter.foo() }} -->
      <input type="text" v-model="this.aid" />
    </div>
    <div>
      <input type="text" v-model="this.title" />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
  </div>
</template>

<script>
import { getCurrentInstance,onMounted} from 'vue'
// import axios from 'axios'
// const axios = require('axios')
export default {
  data() {
    return {
      aid: 1,
      title: ''
    }
  },
  setup() {
    // 有效  全局
    // const internalInstance = getCurrentInstance() 
    // const globalProperties = internalInstance?.appContext.config.globalProperties
    // console.log(globalProperties?.$filter.bar())
        // const { ctx } = getCurrentInstance();
        onMounted(() => {
          // ctx.$http.get('/get').then().catch(err => {console.log(err)})
          // console.log(ctx._.appContext.config.globalProperties, "ctx");
          const internalInstance = getCurrentInstance() 
          const proxy = internalInstance?.appContext.config.globalProperties
          // console.log(proxy?.$filter.bar())
          console.log(proxy?.$filter)
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

  mounted() {
    console.log("mounted")

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
    // async save() {
    //   console.log('done')
    //   const res = await this.$http.post('/ca', this.model);
    //   this.$router.push('/ca/cr')
    //   console.log(res.data);
    //   // this.$http.post('/ca', this.model)
    //   //   .then(function (response) {
    //   //     console.log(response);
    //   //   })
    //   //   .catch(function (error) {
    //   //     console.log(error);
    //   //   });
    // }
  }
}
</script>
