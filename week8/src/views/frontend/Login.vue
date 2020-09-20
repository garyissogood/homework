<template>
  <div>
    <Header />
    <article class="login">
      <section class="login__box">
        <header class="title">
          <div class="title__box">
            <h2 class="title__box--mainTitle">Sign in</h2>
            <hr>
            <h3 class="title__box--subtitle">會員登入</h3>
          </div>
        </header>
        <form class="form-signin" @submit.prevent="signin">
          <div class="login__box__input">
            <i class="icon-user2"></i>
            <input
              type="email"
              id="inputEmail"
              v-model="user.email"
              class="form-control"
              placeholder="請輸入帳號"
              required autofocus
            >
          </div>
          <div class="login__box__input">
            <i class="icon-locked"></i>
            <input
              type="password"
              id="inputPassword"
              v-model="user.password"
              class="form-control"
              placeholder="請輸入密碼"
              required
            >
          </div>
          <div class="login__box__btn">
            <button type="submit">登入</button>
          </div>
        </form>
      </section>
      <section class="login__text">
        <b>Hello! We're a GoodDay</b>
        <p>
          國際電通致力於提升及發揮全方位代理商的價值，
          提供最即時、正確、多樣的商品資訊及服務，
          同時提供消費者便利、快速的維修客服服務，
          為原廠、經銷商及消費者可以信賴的最佳夥伴。
        </p>
      </section>
    </article>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Login',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
      isLoading: false,
    };
  },
  methods: {
    signin() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.$http.post(api, this.user).then((response) => {
        const { token } = response.data;
        const { expired } = response.data;
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`;
        // 傳送Toasts的登入成功資訊樣式
        this.$bus.$emit('message:push', '登入成功', 'success');
        this.isLoading = false;
        // 登入後轉到的頁面
        this.$router.push('/admin/products');
      }).catch((error) => {
        // 傳送Toasts的登入失敗資訊樣式
        this.$bus.$emit('message:push', `登入失敗，${error}`, 'danger');
        this.isLoading = false;
      });
    },
  },
};
</script>
