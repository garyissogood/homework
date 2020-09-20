<template>
  <div>
    <Header />
    <div class="index__banner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="@/assets/images/banner1.jpg" /></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner2.jpg" /></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner3.jpg" /></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner4.jpg" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="focus__title">
      <h3>新品資訊</h3>
    </div>
    <article class="index__focus">
      <div class="focus">
        <p class="focus--name">SUUNTO 7 </p>
        <p class="foucus--title">運動與生活完美合一</p>
        <router-link to="/products" class="more">了解詳情</router-link>
        <span class="focus--img">
          <img src="@/assets/images/foucs1.png" alt="">
        </span>
      </div>
      <div class="focus">
        <p class="focus--name">SUUNTO 9 baro</p>
        <p class="foucus--title">毅力而生，就像您一樣</p>
        <router-link to="/products" class="more">了解詳情</router-link>
        <span class="focus--img">
          <img src="@/assets/images/foucs2.png" alt="">
        </span>
      </div>
      <div class="focus">
        <p class="focus--name">CORE CLASSIC</p>
        <p class="foucus--title">您的探險生活最佳夥伴</p>
        <router-link to="/products" class="more">了解詳情</router-link>
        <span class="focus--img">
          <img src="@/assets/images/foucs3.png" alt="">
        </span>
      </div>
      <div class="focus">
        <p class="focus--name">SUUNTO 3</p>
        <p class="foucus--title">輕巧耐用，配置【智能訓練導引】的運動腕錶</p>
        <router-link to="/products" class="more">了解詳情</router-link>
        <span class="focus--img">
          <img src="@/assets/images/foucs4.png" alt="">
        </span>
      </div>
    </article>
    <article class="index__products">
        <header class="title">
            <div class="title__box">
                <h3 class="title__box--mainTitle">熱銷商品</h3>
            </div>
        </header>
        <swiper class="swiper" :options="swiperOptionTwo">
          <swiper-slide>
            <router-link to="/products" class="index__probox">
              <img src="@/assets/images/pro/hot-pro1.png" alt="">
              <p class="index__products--caption">Suunto 9</p>
              <p class="index__products--sub">堅固強勁，超強電池續航力的多項目運動GPS腕錶</p>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <a href="products-detail.html" class="index__probox">
              <img src="@/assets/images/pro/hot-pro2.png" alt="">
              <p class="index__products--caption">Suunto 3</p>
              <p class="index__products--sub">輕巧耐用，配置【智能訓練導引】的運動腕錶</p>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="products-detail.html" class="index__probox">
              <img src="@/assets/images/pro/hot-pro3.png" alt="">
              <p class="index__products--caption">Suunto 5</p>
              <p class="index__products--sub">堅固輕巧質精、絕佳電池續航力的多項目運動GPS腕錶</p>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="products-detail.html" class="index__probox">
              <img src="@/assets/images/pro/hot-pro4.png" alt="">
              <p class="index__products--caption">Suunto 7</p>
              <p class="index__products--sub">結合豐富的【戶外運動】與【智慧生活】功能於一體的 GPS 腕錶</p>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </article>
    <article class="index__news">
      <div class="tab__box">
        <div class="tab__nav">
          <ul class="tabs">
            <li><a href="#tab1">最新消息</a></li>
          </ul>
        </div>
        <div class="tab__container">
          <div id="tab1" class="tab__content">
            <div class="list">
                <div class="list__item">
                    <a href=""><img src="@/assets/images/news1.jpg"></a>
                    <span class="list__item__box">
                        <a href="" class="list__item__box--left list__item__box--tag">
                            <p>SUUNTO</p>
                        </a>
                        <time class="list__item__box--right">2020-09-12</time>
                    </span>
                    <a href="news-detail.html" class="list__item__box--link">Suunto 5 新品上市 登錄送好禮</a>
                </div>
                <div class="list__item">
                    <a href=""><img src="@/assets/images/news2.jpg"></a>
                    <span class="list__item__box">
                        <a href="" class="list__item__box--left list__item__box--tag">
                            <p>SUUNTO</p>
                        </a>
                        <time class="list__item__box--right">2020-09-12</time>
                    </span>
                    <a href="news-detail.html" class="list__item__box--link">雙11購物節，Suunto
                        系列錶款，限時特惠！</a>
                </div>
                <div class="list__item">
                    <a href=""><img src="@/assets/images/news3.jpg"></a>
                    <span class="list__item__box">
                        <a href="" class="list__item__box--left list__item__box--tag">
                            <p>SUUNTO</p>
                        </a>
                        <time class="list__item__box--right">2020-09-12</time>
                    </span>
                    <a href="news-detail.html" class="list__item__box--link">雙11購物節，購買 Suunto
                        指定錶款系列，送超值好禮！</a>
                </div>
            </div>
            <div class="more">
                <a href="news.html" class="more__btn">閱讀更多 <i class="icon-arrow-right9"></i></a>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article class="index__newsletter">
      <span>
        <p class="index__newsletter--title">訂閱電子檔</p>
        <br>
        <input type="text">
        <button><i class="icon-mail3"></i></button>
      </span>
      <p class="index__newsletter--info">訂閱獲得<b>最新產品資訊</b>與<b>活動消息</b></p>
    </article>
    <br>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionTwo: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>
