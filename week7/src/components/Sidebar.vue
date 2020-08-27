<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue 後台管理系統</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '產品列表'}">
            產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '優惠券'}">
            優惠券列表
          </router-link>
        </li><li class="nav-item">
          <router-link class="nav-link" :to="{ name: '圖片列表'}">
            圖片頁面
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders">
            訂單列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '用戶訂單'}">
            模擬下單系統
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '用戶訂單列表'}">
            用戶訂單
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="signOut">
            登出
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
  methods: {
    signOut() {
      // this.$cookies.remove('token');
      // 疑問:無法使用 會跳出以下錯誤
      // Error in v-on handler: "TypeError: Cannot read property 'remove' of undefined"
      document.cookie = 'hexToken=;expires=;';
      this.$bus.$emit('message:push', '登出成功', 'success');
      this.$router.push('/login');
    },
  },
};
</script>
