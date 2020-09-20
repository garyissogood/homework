<template>
  <div>
    <Header />
    <ul class="breadcrumbs__bar">
      <li>SUUNTO</li>
      <li><i class="icon-arrow-right10"></i></li>
      <li class="breadcrumbs__bar--on">運動知識</li>
    </ul>
    <div class="pageTop">
      <div class="title__text">
        <p class="title__text--big">KNOWLEDGES</p>
        <hr>
        <p class="title__text--word">運動知識</p>
      </div>
      <div class="banner banner-knowledge"></div>
    </div>
    <main class="container">
      <div class="select__tag">
        <a href="" class="select__tag__btn">訓練指導與建議</a>
        <a href="" class="select__tag__btn">壓力與恢復</a>
        <a href="" class="select__tag__btn">營養補給</a>
        <a href="" class="select__tag__btn">運動與生活</a>
        <a href="" class="select__tag__btn">戶外探索與冒險</a>
        <a href="" class="select__tag__btn">體適能與健身</a>
      </div>
      <div class="select__search">
        <input type="text" placeholder="關鍵字搜尋">
        <button><i class="icon-search1"></i></button>
      </div>
      <div class="list">
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k1.jpg">
            </a>
            <a class="list__item__link">
              夜間跑步的 7 個建議
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">訓練指導與建議</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k2.jpg">
            </a>
            <a class="list__item__link">
              5 個適合情侶檔的運動訓練秘訣
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">訓練指導與建議</a>
                  <a href="" class="tag">運動與生活</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k3.jpg">
            </a>
            <a class="list__item__link">
              六個方法幫助您找到新的【自行車騎乘】路線
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">訓練指導與建議</a>
                  <a href="" class="tag">戶外探索與冒險</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k4.jpg">
            </a>
            <a class="list__item__link">
              在高溫天氣下，跑步的 7 個技巧
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">訓練指導與建議</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k5.jpg">
            </a>
            <a class="list__item__link">
              五個在馬拉松訓練時，常犯的錯誤
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">運動與生活</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k6.jpg">
            </a>
            <a class="list__item__link">
              在哪都能運動：7個方法，讓上班族隨時地健身
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">運動與生活</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k7.jpg">
            </a>
            <a class="list__item__link">
              使用 Suunto 3 Fitness 可監測睡眠 – 但是，如何提升【睡眠品質】呢？
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                  <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">運動與生活</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k8.jpg">
            </a>
            <a class="list__item__link">
              越野好手－EMELIE FORSBERG 提供適合跑者的 7 個瑜珈動作
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">運動與生活</a>
                  <time>2020-09-12</time>
                </span>
              </li>
            </ul>
          </router-link>
        </div>
        <div class="list__item">
          <router-link to="/knowledge">
            <a class="list__item__img">
              <img src="@/assets/images/pic/k9.jpg">
            </a>
            <a class="list__item__link">
              用瑜珈和跑步，找尋體內能量
            </a>
            <ul class="list__item__box">
              <li class="list__item__box--left">
                <a class="list__item__box__btn">閱讀更多</a>
              </li>
              <li class="list__item__box--right">
                <span class="list__item__tag">
                  <a href="" class="tag">運動與生活</a>
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
  name: 'Knowledges',
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
