<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">使用技巧</li>
    </ul>
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">SKILL</p>
        <hr>
        <p class="title__text--word">使用技巧</p>
      </div>
      <div class="banner banner-skill"></div>
    </div>
    <main class="container">
      <div class="select__item">
        <a href="" class="select__item__btn select__item__btn--on">Suunto 9</a>
        <a href="" class="select__item__btn">Suunto 5</a>
        <a href="" class="select__item__btn">Suunto 3</a>
        <a href="" class="select__item__btn">Spartan</a>
        <a href="" class="select__item__btn">Traverse</a>
        <a href="" class="select__item__btn">Ambit</a>
        <a href="" class="select__item__btn">Suunto App</a>
        <a href="" class="select__item__btn">Movescount</a>
        <a href="" class="select__item__btn">其他</a>
      </div>
      <div class="select__search">
        <input type="text" placeholder="關鍵字搜尋">
        <button><i class="icon-search1"></i></button>
      </div>
      <div class="list">
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s1.jpg">
            </a>
            <a class="list__item__link">
              如何透過 Suunto App，將【路線】同步到 Suunto 腕錶?
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto 9</a>
                  <a href="" class="tag">Suunto 5</a>
                  <a href="" class="tag">Spartan</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s2.jpg">
            </a>
            <a class="list__item__link">
              如何將 Suunto Movescount 的歷史運動記錄，轉移到全新的 Suunto App?
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s3.jpg">
            </a>
            <a class="list__item__link">
              如何更改 Suunto App 的介面語言?
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s4.jpg">
            </a>
            <a class="list__item__link">
              如何利用 Android 版本的 Suunto App 自訂【運動模式】?
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s5.jpg">
            </a>
            <a class="list__item__link">
              如何利用 iPhone 版本的 Suunto App 自訂【運動模式】？
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s6.jpg">
            </a>
            <a class="list__item__link">
              如何透過 Suunto 3 Fitness 監測您的活動與恢復
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto 3</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s7.jpg">
            </a>
            <a class="list__item__link">
              發揮 Suunto 9 腕錶【電池模式】的最大效用
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto 9</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s8.jpg">
            </a>
            <a class="list__item__link">
              您應該要知道的 -【腕式光學心率】的原理 與 特性
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/skill">
            <a class="list__item__img">
              <img src="@/assets/images/pic/s9.jpg">
            </a>
            <a class="list__item__link">
              利用 Suunto App，自訂您需要的【運動模式】
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">Suunto App</a>
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
  name: 'Skills',
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
