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
    <main class="mainContainer">
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
          <img :src="item.imageUrl" alt="">
          <p class="products__box__list--title">
            {{ item.title }}
          </p>
          <p class="products__box__list--contact">
            {{ item.content }}
          </p>
          <span class="products__box__list__price">
            <del class="price--origin">
              原價 : {{ item.origin_price }} 元
            </del>
            <p class="price--now">
              特價 : <b>{{ item.price }}</b> 元
            </p>
          </span>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm mr-4"
            @click="openModal('edit', item)"
          >
            <i
              v-if="status.loadingItem === item.id"
              class="spinner-grow spinner-grow-sm"
            />
            <i class="icon-search1"></i>
            詳細內容
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm ml-auto"
            :disabled="status.loadingItem === item.id"
            @click="addtoCart(item)"
          >
            <i
              v-if="status.loadingItem === item.id"
              class="spinner-grow spinner-grow-sm"
            />
            <i class="icon-cart2"></i>
            加入購物車
          </button>
        </div>
      </section>
      <!--分頁-->
        <pagination
          :pages="pagination"
          @update="getProducts"
        >
        </pagination>
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
    <!-- productModal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              {{ tempProduct.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img
              :src="tempProduct.imageUrl[0]"
              class="img-fluid"
              alt
            >
            <blockquote class="blockquote mt-4">
              <p
                class="mb-0"
                v-html="tempProduct.content"
              />
              <!--eslint-enable-->
              <footer class="blockquote-footer">
                {{ tempProduct.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div
                v-if="!tempProduct.price"
                class="h4"
              >
                {{ tempProduct.origin_price }} 元
              </div>
              <div v-else>
                <del
                  class="h6"
                >原價 {{ tempProduct.origin_price }} 元</del>
                <span
                  class="h5 mt-2 ml-4 text-danger"
                >
                  特價 {{ tempProduct.price }} 元
                </span>
              </div>
            </div>
            <p class="h6 mt-4">選購數量 :</p>
            <select
              v-model="tempProduct.num"
              name
              class="form-control"
            >
              <option
                value="0"
                disabled
                selected
              >
                請選擇數量
              </option>
              <option
                v-for="num in 5"
                :key="num"
                :value="num"
              >
                選購 {{ num }} {{ tempProduct.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div
              v-if="tempProduct.num"
              class="text-muted text-nowrap mr-3"
            >
              小計
              <strong>{{ tempProduct.num * tempProduct.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(tempProduct, tempProduct.num)"
            >
              <i
                v-if="tempProduct.id === status.loadingItem"
                class="fas fa-spinner fa-spin"
              />
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--productModal END -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Pagination from '@/components/Pagination.vue';
import $ from 'jquery';

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
        num: 0,
        imageUrl: [],
      },
      isNew: false,
      isLoading: false,
      status: {
        loadingItem: '',
      },
      cart: {},
      cartTotal: 0,
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
    // 開啟 Modal 視窗
    openModal(isNew, item) {
      this.isNew = false;
      this.getDetails(item.id);
    },
    // 加入購物車
    addtoCart(item, quantity = 1) {
      this.status.loadingItem = item.id;

      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;

      const cart = {
        product: item.id,
        quantity,
      };

      this.$http.post(url, cart).then(() => {
        this.status.loadingItem = '';

        this.$bus.$emit('message:push',
          '成功加入購物車',
          'success');

        $('#productModal').modal('hide');
      }).catch((error) => {
        this.status.loadingItem = '';

        const errorList = error.response.data.errors;

        errorList.forEach((err) => {
          this.$bus.$emit('message:push',
            `加入失敗${err}`,
            'danger');
        });

        $('#productModal').modal('hide');
      });
    },
  },
};
</script>
