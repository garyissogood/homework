<template>
  <div>
    <Sidebar />
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto px-4">
          <router-view v-if="checkSuccess" :token="token"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // Axios 預設值
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      // 後台驗證API
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`;
      this.$http.post(api, {
        api_token: this.token,
      })
        .then(() => {
          // 驗證成功
          this.checkSuccess = true;
        })
        .catch((error) => {
          // 驗證失敗
          this.$bus.$emit('message:push', `登入失敗，${error}`, 'danger');
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss">
html,body {
  height: 100%;
  width: 100%;
}
body {
  display: block;
}
</style>
