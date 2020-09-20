<template>
  <div>
    <Header />
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">NEWS</p>
        <hr>
        <p class="title__text--word">最新消息</p>
      </div>
      <div class="banner banner-news"></div>
    </div>
    <main class="mainContainer">
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
          <router-link to="/new">
            <a class="list__item__img">
              <img src="@/assets/images/news1.jpg">
            </a>
            <a class="list__item__link">
              Suunto 5 新品上市 登錄送好禮
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
          <router-link to="/new">
            <a class="list__item__img">
              <img src="@/assets/images/news2.jpg">
            </a>
            <a class="list__item__link">
              雙11購物節，Suunto 系列錶款，限時特惠！
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
          <router-link to="/new">
            <a class="list__item__img">
              <img src="@/assets/images/news3.jpg">
            </a>
            <a class="list__item__link">
              雙11購物節，購買 Suunto 指定錶款系列，送超值好禮！
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
          <router-link to="/new">
            <a class="list__item__img">
              <img src="@/assets/images/news4.jpg">
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
          <router-link to="/new">
            <a class="list__item__img">
              <img src="@/assets/images/news5.jpg">
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
