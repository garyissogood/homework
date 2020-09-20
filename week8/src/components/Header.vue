<template>
  <div>
    <header class="pc">
      <div class="pc__logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png">
        </router-link>
      </div>
      <ul class="pc__menu">
        <li class="pc__menu__item JS-menu__btn">
          <span class="pc__menu__item__menuBtn">品牌代理</span>
          <div
            class="pc__menu__item__megaMenu JS-menu__content"
          >
            <dl class="megaMenu clearfix">
              <dt class="tab__megaMenu__nav">
                <ul class="tab__megaMenu__tabs">
                  <li>
                    <a href="#tab__brand1">
                      <p title="運動腕錶">SUUNTO</p>
                    </a>
                  </li>
                </ul>
              </dt>
              <dd class="tab__container__megaMenu">
                <div
                  id="tab__brand1" class="tab__content__megaMenu"
                >
                  <ul class="megaMenu__box">
                    <li class="megaMenu__box--title">產品介紹</li>
                    <li>
                      <router-link to="/products">
                        SUUNTO 9 BARO
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products">
                        SUUNTO 7
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products">
                        SUUNTO 5
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products">
                        SUUNTO 3
                      </router-link>
                    </li>
                  </ul>
                  <ul class="megaMenu__box">
                    <li class="megaMenu__box--title">類型選擇</li>
                    <li>
                      <router-link to="/products">
                        探索與冒險
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products">
                        鍛鍊與訓練
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: '產品介紹列表two'}">
                        產品列表TWO
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/products">
                        配件
                      </router-link>
                    </li>
                  </ul>
                  <ul class="megaMenu__boxII">
                    <li>
                      <router-link :to="{ name: '品牌故事'}">
                        品牌故事
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: '冒險故事列表'}">
                        冒險故事
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: '使用技巧列表'}">
                        使用技巧
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: '運動知識列表'}">
                        運動知識
                      </router-link>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
        </li>
        <li class="pc__menu__item">
          <router-link
            :to="{ name: '最新消息'}"
            class="pc__menu__item__menuBtn"
          >
            最新消息
          </router-link>
        </li>
        <li class="pc__menu__item">
          <router-link
            :to="{ name: '關於我們'}"
            class="pc__menu__item__menuBtn"
          >
            關於我們
          </router-link>
        </li>
        <li class="pc__menu__item">
          <router-link
            :to="{ name: '支援服務'}"
            class="pc__menu__item__menuBtn"
          >
            支援服務
          </router-link>
        </li>
      </ul>
      <ul class="pc__link">
        <!-- <li>
          <a href="#">
            <i class="icon-search1" title="搜尋"></i>
          </a>
        </li> -->
        <li>
          <router-link to="/login">
            <i class="icon-user2" title="會員登入"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <i class="icon-cart2" title="購物車"></i>
          </router-link>
        </li>
      </ul>
    </header>
    <header class="mobile">
      <div class="mobile__header">
        <span class="mobile__header__logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png">
          </router-link>
        </span>
        <router-link to="/cart" class="mobile__header__car">
          <i class="icon-cart2" title="購物車"></i>
        </router-link>
        <router-link to="/login" class="mobile__header__user">
          <i class="icon-user2" title="會員登入"></i>
        </router-link>
        <a
          href="javascript:;"
          class="mobile__header__menuBtn JS-mobile__menuBtn"
        >
          <span>Menu</span>
        </a>
      </div>
      <div class="mobile__menu">
        <span class="mobile__menu__search">
            <input type="text" placeholder="搜尋">
            <button><i class="icon-search1"></i></button>
        </span>
        <ul class="mobile__menu__list">
          <li>
            <a href="javascript:;" class="mobile__menu__list--btn JS-mobile__slideBtn">
                <p>品牌代理</p><i class="icon-arrow-right9"></i>
            </a>
            <ul class="mobile__menu__list__sec JS-mobile__slideList">
              <li>
                <a
                  href="javascript:;" class="mobile__menu__list__sec--btn JS-mobile__slideBtn"
                >
                  <i class="icon-arrow-right10"></i>
                  <p>SUUNTO</p>
                </a>
                <ul class="mobile__menu__list__third JS-mobile__slideList">
                  <li>
                    <router-link :to="{ name: '產品介紹列表'}">
                      產品介紹
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: '品牌故事'}">
                      品牌故事
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: '冒險故事列表'}">
                      冒險故事
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: '使用技巧列表'}">
                      使用技巧
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: '運動知識列表'}">
                      運動知識
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              :to="{ name: '最新消息'}"
              class="mobile__menu__list--btn"
            >
              最新消息
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '關於我們'}"
              class="mobile__menu__list--btn"
            >
              關於我們
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '支援服務'}"
              class="mobile__menu__list--btn"
            >
              支援服務
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
  mounted() {
    // 選單
    $('.JS-menu__content').hide();
    $('.JS-menu__btn').on('mouseenter mouseleave', function (e) {
      if (e.type === 'mouseenter') {
        $(this).find('.JS-menu__content').show();
        $(this).find('.pc__menu__item__menuBtn').addClass('menuBtn--on');
      } else {
        $(this).find('.JS-menu__content').hide();
        $(this).find('.pc__menu__item__menuBtn').removeClass('menuBtn--on');
      }
    });
    // 手機漢堡選單
    $('.mobile__menu').hide();
    $('.JS-mobile__slideList').hide();
    $('.JS-mobile__menuBtn').click(function () {
      $(this).toggleClass('active');
      $(this).parents().find('.mobile__menu').slideToggle(300);
    });
    $('.JS-mobile__slideBtn').click(function () {
      $(this).next('.JS-mobile__slideList').slideToggle(300);
      $(this).find('i').toggleClass('rotate90');
    });
  },
};
</script>

<style src="@/assets/css/fonts.css">
