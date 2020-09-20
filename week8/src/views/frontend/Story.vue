<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">品牌故事</li>
    </ul>
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">STORY</p>
        <hr>
        <p class="title__text--word">品牌故事</p>
      </div>
      <div class="banner banner-story"></div>
    </div>
    <main class="container">
      <div class="select__item">
        <a href="#brand__info" class="select__item__btn">品牌介紹</a>
        <a href="#brand__spirit" class="select__item__btn">品牌精神</a>
      </div>
      <section id="brand__info">
        <header class="title">
          <div class="title__box">
            <h3 class="title__box--sectitle">品牌介紹</h3>
            <hr>
          </div>
        </header>
        <div class="story__info">
          <img src="@/assets/images/brand1.png" alt="">
          <h3>1936年迄今，持續探索新領域，80年歷史傳承，全球玩家首選
          </h3>
          <p>Suunto 在芬蘭問世已超過 80 年，1936年，芬蘭工程師兼定向越野跑者 Tuomas Vohlonen 發明了液式指南針批量生產方法，
          Suunto 於焉誕生。<br>
          直至今日，Suunto 仍堅持站在運動產業的最前線持續創新。
          身為世界首屈一指的運動專用錶、潛水錶、及相關運動量測裝備、精密儀器的設計者及製造者， Suunto 投注的熱情是全世界的冒險家們有目共睹的。</p>
          <h2>“Suunto” 一詞來自芬蘭語，是“方向”的意思。</h2>
          <i>● 法國夏蒙尼培訓學院 (ENSA) 培訓的專業登山嚮導們最愛 Suunto，因為它堅固耐用，強大而精準，值得信賴。</i>
          <i>● Suunto 錶款廣受舉世最先進，最隱秘的特種部隊所採用，包括美國海軍著名的”海豹六隊”。因此 Suunto 腕腕錶是精銳的表徵。</i>
        </div>
      </section>
      <br><br>

      <section id="brand__spirit">
        <header class="title">
          <div class="title__box">
            <h3 class="title__box--sectitle">品牌精神</h3>
            <hr>
          </div>
        </header>
        <div class="story__box">
          <span><img src="@/assets/images/spirit.jpg" alt=""></span>
          <span>
            <p>
              Suunto 是為戶外運動而生的品牌，持續投入運動精密裝備的設計，多年來從未間斷。
              最重要的目的就是讓戶外運動者在身心上都擁有生活的自由、實現夢想的自由、以及征服新領域的自由。
            </p>
            <p>
              不管從事的是登山、越野賽跑、山地自行車、滑雪、或潛水，也不管運動的技巧是否嫻熟，配戴 Suunto 的人內心，有一個共同的特徵：他們都追求積極活躍的戶外生活。
            </p>
            <p>
              這個共同的內在特點正是 Suunto 品牌本質的展現，它也將 Suunto 人緊緊相連，使得 Suunto 人與其他的戶外運動者就是有那麼一點不同。
            </p>
          </span>
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
  name: 'Story',
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
