<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">最新消息</li>
    </ul>
    <div class="pageTop">
      <div class="bannerSmall banner-pic4"></div>
    </div>
    <main class="mainContainer">
      <section class="list__detail">
        <div class="list__detail__titleBox">
          <p class="list__detail__titleBox--title">
            Suunto 5 新品上市 登錄送好禮
          </p>
        </div>
        <div class="list__detail__container">
          <p>本文適用於 Suunto 9、Suunto 5 與 Spartan 系列</p>
          <p>
            不論是在登山、健行，或參加越野賽時，使用 Suunto 腕錶上的【路線導航】功能，能協助您充滿自信的邁步向前、不怕迷路！要將【路線】同步到腕錶，最簡便的方式，就是透過
            Suunto App，利用藍芽傳輸來同步。
          </p><br>
          <img src="@/assets/images/news1.jpg">
        </div>
        <div class="pagination">
          <router-link to="/news" class="pagination__box">
            <img src="@/assets/images/news2.jpg">
            <span>
              <time>2020-09-12</time>
              <p class="pagination__box--p">如何將 Suunto Movescount 的歷史運動記錄，轉移到全新的 Suunto App ?
              </p>
            </span>
          </router-link>
          <ul class="pagination__page">
            <li>
              <i class="icon-arrow-left1 pagination__page--left"></i>
            </li>
            <li class="">
              <router-link to="/news" title="回到列表">
                <i class="icon-menu1 pagination__page--menu"></i>
              </router-link>
            </li>
            <li>
              <i class="icon-arrow-right1 pagination__page--right"></i>
            </li>
          </ul>
            <router-link
              to="/news"
              class="pagination__box pagination__box--right"
            >
              <span>
                  <time>2020-09-12</time>
                  <p class="pagination__box--p">如何更改 Suunto App 的介面語言
                  </p>
              </span>
              <img src="@/assets/images/news3.jpg">
            </router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Skill',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
