<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li>產品介紹</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">產品介紹</li>
    </ul>
    <article class="container no--bottom JS-productDetail-up-container">
      <section class="products__detail__info">
        <div class="products__detail__info__pic">
          <div class="thumb-example">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide><img src="@/assets/images/pro/pro1.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-2.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-3.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-4.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-5.jpg"></swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide><img src="@/assets/images/pro/pro1.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-2.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-3.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-4.jpg"></swiper-slide>
              <swiper-slide><img src="@/assets/images/pro/pro1-5.jpg"></swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="products__detail__info__word">
          <p class="word--title">{{ product.title }}</p>
          <p class="word--sub">經典黑</p>
          <p class="word--description">堅固強勁，超長電池續航力及氣壓式高度的多項目運動GPS腕錶</p>
          <p class="word--text">{{ product.content }}</p>
            <ul class="word--prolist">
                <li><img src="@/assets/images/pro/pro5.png" title="經典黑">
                </li>
                <li><img src="@/assets/images/pro/pro6.png" title="時尚白">
                </li>
                <li><img src="@/assets/images/pro/pro7.png" title="勃根地復古銅">
                </li>
                <li><img src="@/assets/images/pro/pro8.png" title="石墨灰復古銅">
                </li>
            </ul>
            <ul class="word__btn">
                <li class="word__btn__button">
                    <a href="" class="word__btn--buy">
                        <i class="icon-cart1"></i>
                        <p>馬上購買</p>
                    </a>
                </li>
            </ul>
        </div>
      </section>
      <section class="products__container">
        <div style="text-align: center;">
          <img src="https://www.empyrean.tw/wp-content/uploads/2019/Suunto5/F24.Suunto5-1.jpg" alt="">
          <img src="https://www.empyrean.tw/wp-content/uploads/2019/Suunto5/F24.Suunto5-2.jpg" alt="">
          <img src="https://www.empyrean.tw/wp-content/uploads/2019/Suunto5/F24.Suunto5-3.jpg" alt="">
        </div>
      </section>
    </article>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Product',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      product: [],
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  created() {
    const { id } = this.$route.params.id;
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`,
      )
      .then((res) => {
        this.product = res.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
  .thumb-example {
    height: 480px;
  }

  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }

    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>
