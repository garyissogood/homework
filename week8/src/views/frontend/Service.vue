<template>
  <div>
    <Header />
    <article class="support">
      <div class="support__text">
        <p class="support__text--title">歡迎使用 SUUNTO 支援服務</p>
        <p class="support__text--p">請輸入產品名稱或關鍵字</p>
        <span class="support__text__input">
          <input type="text" placeholder="例如:Suunto5">
          <button><i class="icon-search1"></i></button>
        </span>
        <span class="support__text__common">
          <b>常見搜尋</b>
          <a href="">SUUNTO手錶可以自己更換電池嗎？</a>
          <a href="">如何變更螢幕的顯示方式？</a>
          <a href="">要如何進行軟體更新？</a>
        </span>
      </div>
    </article>
    <main class="container">
      <header class="title">
        <div class="title__box">
          <h2 class="title__box--mainTitle">More Data</h2>
          <hr>
          <h3 class="title__box--subtitle">快速捷徑</h3>
        </div>
      </header>
      <ul class="support__list">
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>使用說明書</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon27.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>HOW TO 使用教學影片</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon55.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>軟體更新資訊</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon45.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>產品註冊</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon18.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>保固政策</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon16.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>線上報修與維修進度查詢</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon17.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>線上商店</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon14.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>訂單服務</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon69.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>服務據點</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon58.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>常見問答</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon58.png" alt="">
                </span>
            </li>
            <li class="support__list__item">
                <span class="support__list__item__text">
                    <b>筍頭家族</b>
                    <p></p>
                    <a href="support-detail.html">了解更多<i class="icon-arrow-right9"></i></a>
                </span>
                <span class="support__list__item__img">
                    <img src="@/assets/images/icon/icon58.png" alt="">
                </span>
            </li>
        </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
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
