<template>
  <div>
    <Header />
    <Loading :active.sync="isLoading" />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">產品介紹</li>
    </ul>
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">PRODUCTS</p>
        <hr>
        <p class="title__text--word">產品介紹</p>
      </div>
      <div class="banner banner-product"></div>
    </div>
    <main class="container">
      <div class="select__mode">
        <a href="#" class="select__mode__btn JS-mode-btn">
            <img src="@/assets/images/pic/icon11.png" alt="">
            <span>
              <p>探索與冒險</p>
            </span>
        </a>
        <a href="#" class="select__mode__btn JS-mode-btn">
            <img src="@/assets/images/pic/icon12.png" alt="">
            <span>
              <p>休閒健走</p>
            </span>
        </a>
        <a href="#" class="select__mode__btn JS-mode-btn">
            <img src="@/assets/images/pic/icon15.png" alt="">
            <span>
              <p>鍛鍊與訓練</p>
            </span>
        </a>
        <a href="#" class="select__mode__btn JS-mode-btn">
            <img src="@/assets/images/pic/icon14.png" alt="">
            <span>
              <p>體適能與健身</p>
            </span>
        </a>
        <a href="#" class="select__mode__btn JS-mode-btn">
            <img src="@/assets/images/pic/icon20.png" alt="">
            <span>
              <p>都會生活與鍛鍊</p>
            </span>
        </a>
        <a href="#" class="select__mode__btn JS-mode-btn">
          <img src="@/assets/images/pic/icon18.png" alt="">
          <span>
            <p>配件</p>
          </span>
        </a>
      </div>
      <div class="select__label">
        <i class="icon-tag1"></i>
        <a href="#" class="JS-mode-btn">#基本規格</a>
        <a href="#" class="JS-mode-btn">#Suunto Apps</a>
        <a href="#" class="JS-mode-btn">#連接功能</a>
        <a href="#" class="JS-mode-btn">#物理規格</a>
        <a href="#" class="JS-mode-btn">#訓練與恢復</a>
        <a href="#" class="JS-mode-btn">#游泳</a>
        <a href="#" class="JS-mode-btn">#自行車</a>
        <a href="#" class="JS-mode-btn">#跑步</a>
        <a href="#" class="JS-mode-btn">#運動模式</a>
      </div>
      <section class="products__box">
        <div
          v-for="(item , index) in products"
          :key="index"
          class="products__box__list"
        >
          <router-link :to="`/product/${item.id}`">
            <img :src="item.imageUrl" alt="">
            <p class="products__box__list--caption">
              {{ item.title }}
            </p>
          </router-link>
          <ul class="products__box__list--color">
            <li><a href="" class="color-circle color-black" title="全黑色"></a></li>
            <li><a href="" class="color-circle color-white" title="白色"></a></li>
          </ul>
          <a href="#" @click.prevent="goPage(item)">A連結進入頁面</a>
        </div>
        <!--分頁-->
        <pagination
          :pages="pagination"
          @update="getProducts"
        >
        </pagination>
      </section>
      <div class="needbox">
        <a href="products-need.html" class="needbox__link">
          <span class="needbox__link__box">
            <p class="needbox__link__box--title">不知道要選擇哪一款運動腕錶?</p>
            <p class="needbox__link__box--sub">依功能需求 來選擇</p>
          </span>
          <img src="@/assets/images/product-select2.jpg" alt="">
        </a>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  components: {
    Header,
    Footer,
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取得產品資料
    getProducts(page = 1) {
      this.isLoading = true;
      // 後台驗證api
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      // 存取資料到data
      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
      });
    },
    // 取得產品資料-詳細內容
    getDetails(id) {
      this.isLoading = true;
      // 後台驗證api
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      // 存取資料到data-暫存區
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data;
        $('#productModal').modal('show');
        this.isLoading = false;
      });
    },
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  // created() {
  //   this.isLoading = true;
  //   this.$http
  //     .get(
  //       `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`,
  //     )
  //     .then((res) => {
  //       this.isLoading = false;
  //       this.products = res.data.data;
  //     });
  // },
};
</script>
