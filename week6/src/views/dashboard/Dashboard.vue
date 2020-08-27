<template>
  <div>
    <div id="nav">
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin">管理首頁</router-link> |
      <router-link to="/admin/products">管理產品列表</router-link> |
      <router-link to="/admin/coupons">管理優惠券</router-link>
    </div>
    <h2>這是 [ 管理頁面 ] 頁</h2>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`

      // 後台驗證API
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`
      this.$http.post(api, {
        // eslint-disable-next-line
        'api_token': this.token
      })
        .then((res) => {
          // 驗證成功
          console.log(res)
          this.checkSuccess = true
        })
        .catch((error) => {
          // 驗證失敗
          console.log(error.response)
          this.$router.push('/login')
        })
    }
  }
}
</script>
