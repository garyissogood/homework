<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">運動知識</li>
    </ul>
    <div class="pageTop">
      <div class="bannerSmall banner-pic3"></div>
    </div>
    <main class="container">
      <section class="list__detail">
        <div class="list__detail__titleBox">
          <p class="list__detail__titleBox--title">
            夜間跑步的 7 個建議
          </p>
        </div>
        <div class="list__detail__container">
          <p>本文適用於 Suunto 9、Suunto 5 與 Spartan 系列</p>
          <p>
            不論是在登山、健行，或參加越野賽時，使用 Suunto 腕錶上的【路線導航】功能，能協助您充滿自信的邁步向前、不怕迷路！要將【路線】同步到腕錶，最簡便的方式，就是透過
            Suunto App，利用藍芽傳輸來同步。
          </p><br>
          <h2>透過 Suunto App 同步【路線】 操作方法：</h2><br>
          <p>
              步驟一：在手機上，下載 GPX 路線檔<br>
              您可以在各種健行、登山論壇，取得山友們公開的路線檔案；或是，如果是參加賽事，主辦單位網站通常也會都提供 GPX 路線檔案。請利用您的行動裝置，下載路線檔。</p>
          <img src="https://img.empyrean.tw/AE7D45DA-BAE0-4FA2-8CD1-39958306E592.jpg">
          <p>步驟二：【路線】會自動透過 Suunto App 開啟 (如您是使用 iPhone，請點選【在「Suunto」中打開】)</p><br>
          <p>步驟三：在 Suunto App 檢視您下載的【路線】、為【路線】命名、選擇路線歸屬的運動項目。最後開啟【添加到腕錶】的選項並【保存】。</p>
          <img src="https://img.empyrean.tw/D67EEBDD-7229-4093-A535-06F007A36B3D.jpg">
        </div>
        <div class="pagination">
          <router-link to="/knowledges" class="pagination__box">
            <img src="@/assets/images/pic/k9.jpg">
            <span>
              <time>2020-09-12</time>
              <p class="pagination__box--p">
                用瑜珈和跑步，找尋體內能量
              </p>
            </span>
          </router-link>
          <ul class="pagination__page">
            <li>
              <i class="icon-arrow-left1 pagination__page--left"></i>
            </li>
            <li class="">
              <router-link to="/knowledges" title="回到列表">
                <i class="icon-menu1 pagination__page--menu"></i>
              </router-link>
            </li>
            <li>
              <i class="icon-arrow-right1 pagination__page--right"></i>
            </li>
          </ul>
            <router-link
              to="/knowledges"
              class="pagination__box pagination__box--right"
            >
              <span>
                  <time>2020-09-12</time>
                  <p class="pagination__box--p">
                    5 個適合情侶檔的運動訓練秘訣
                  </p>
              </span>
              <img src="@/assets/images/pic/k2.jpg">
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
  name: 'Knowledge',
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
