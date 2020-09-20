<template>
  <div>
    <Header />
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">ABOUT</p>
        <hr>
        <p class="title__text--word">關於我們</p>
      </div>
      <div class="banner banner-about"></div>
    </div>
    <main class="mainContainer">
      <div class="about">
        <div class="about__text">
          <p>
            近幾年，戶外運動已在全球形成一股流行風潮，台灣也不例外。
            從路跑及自行車活動的風行，到鐵人三項等運動鍛練的自我挑戰，
            台灣運動人口每年正不斷地增長中。好日子獨家代理運動穿戴國際知名大廠SUUNTO在台灣地區的銷售。
            SUUNTO 來自芬蘭，1936至今，80餘年歷使傳承，是運動腕錶中的王者，
            全球玩家的首選。在全球戶外活動與運動鍛鍊市場，
            無論是征服全球百岳的登山專家，或是專業運動鍛鍊的選手與玩家，
            皆因它強大而精準的功能，指名它一路相伴，足跡踏遍世界各地。
          </p><br>
          <p>
            國際電通致力於提升及發揮全方位代理商的價值，
            提供最即時、正確、多樣的商品資訊及服務，同時提供消費者便利、
            快速的維修客服服務，為原廠、經銷商及消費者可以信賴的最佳夥伴。
          </p>
        </div>
        <div class="about__info">
          <img src="@/assets/images/about.jpg" alt="">
          <div class="about__info__data">
            <span>客服信箱 : <a href="mailto:service@empyrean.tw">service@goodday.tw</a></span>
            <span>客服諮詢：0800-123456</span>
            <span>週一至週五</span>
            <span>上午 10:00~12:00 下午 13:00~17:00</span>
            <span>地址：新北市好日區好日路77號7樓</span>
          </div>
        </div>
      </div>
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
