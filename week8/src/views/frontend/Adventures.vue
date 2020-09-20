<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">冒險故事</li>
    </ul>
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">ADVENTURE</p>
        <hr>
        <p class="title__text--word">冒險故事</p>
      </div>
      <div class="banner banner-adventure"></div>
    </div>
    <main class="container">
      <div class="select__tag">
          <a href="" class="select__tag__btn">通用</a>
          <a href="" class="select__tag__btn">跑步</a>
          <a href="" class="select__tag__btn">登山</a>
          <a href="" class="select__tag__btn">騎乘</a>
          <a href="" class="select__tag__btn">潛水</a>
          <a href="" class="select__tag__btn">鐵人三項</a>
          <a href="" class="select__tag__btn">游泳</a>
          <a href="" class="select__tag__btn">滑雪</a>
          <a href="" class="select__tag__btn">其他</a>
      </div>
      <div class="select__search">
        <input type="text" placeholder="關鍵字搜尋">
        <button><i class="icon-search1"></i></button>
      </div>
      <div class="list">
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a1.jpg">
            </a>
            <a class="list__item__link">
              沿著「邊界」跑步，慶祝柏林圍牆倒塌30週年
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">跑步</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a2.jpg">
            </a>
            <a class="list__item__link">
              Suunto 一年一度的【世界登高競賽週】即將再次登場囉!
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">登山</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a3.jpg">
            </a>
            <a class="list__item__link">
              在阿爾卑斯山追逐老鷹－Paul Guschlbauer 五度參加
              【Red Bull X-Alps】
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">跑步</a>
                  <a href="" class="tag">登山</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a4.jpg">
            </a>
            <a class="list__item__link">
              不斷攀升的累計高度：2019 Suunto【世界登高競賽週】最精彩的故事
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">登山</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a5.jpg">
            </a>
            <a class="list__item__link">
              威廉．特魯布里奇，以海豚潛泳的方式，橫渡洶湧險惡的紐西蘭海峽
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">游泳</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a6.jpg">
            </a>
            <a class="list__item__link">
              跑完舊金山的每條大街小巷
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">跑步</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a7.jpg">
            </a>
            <a class="list__item__link">
              戴上您的 Suunto 9，因為萬事已具備
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">鐵人三項</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a8.jpg">
            </a>
            <a class="list__item__link">
              離開北極圈，與熱浪搏鬥－超長距離耐力單車選手
              完成 3500 公里的【Transiberica 自行車賽】
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">騎乘</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/adventure">
            <a class="list__item__img">
              <img src="@/assets/images/pic/a9.jpg">
            </a>
            <a class="list__item__link">
              薄冰之下：水下探險攝影師 - 吉兒．海涅特 用影片帶您了解氣候變遷
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">滑雪</a>
                  <a href="" class="tag">通用</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
      </div>
      <ul class="pagenum">
        <li><a href=""><i class="icon-arrow-left9"></i></a></li>
        <li><a href=""><i class="icon-arrow-left10"></i></a></li>
        <li class="on"><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href=""><i class="icon-arrow-right10"></i></a></li>
        <li><a href=""><i class="icon-arrow-right9"></i></a></li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Adventures',
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
