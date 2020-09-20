<template>
  <div>
    <footer class="footer">
      <div class="footer__box">
        <div class="footer__box__info">
            <span>客服信箱 : <a href="mailto:service@empyrean.tw">service@goodday.tw</a></span>
            <span>客服諮詢：0800-123456</span>
            <span>週一至週五</span>
            <span>上午 10:00~12:00 下午 13:00~17:00</span>
            <span>地址：新北市好日區好日路77號7樓</span>
        </div>
        <ul class="footer__box__list">
            <li>
                <b>品牌代理</b>
                <router-link to="/products">SUUNTO</router-link>
                <router-link to="/story">品牌故事</router-link>
            </li>
            <li>
                <b>相關訊息</b>
                <router-link to="/adventures">冒險故事</router-link>
                <router-link to="/skills">使用技巧</router-link>
                <router-link to="/knowledges">運動知識</router-link>
            </li>
            <li>
                <b>最新訊息</b>
                <router-link to="/news">最新消息</router-link>
            </li>
            <li>
                <b>支援服務</b>
                <router-link to="/service">支援服務</router-link>
            </li>
            <li>
                <b>公司介紹</b>
                <router-link to="/about">關於我們</router-link>
                <a href="">徵才資訊</a>
            </li>
            <li>
                <b>其他服務</b>
                <a href="">購買資訊</a>
                <a href="">活動賽事</a>
            </li>
        </ul>
      </div>

      <ul class="footer__social">
          <li><a href="https://www.facebook.com/Suuntotaiwan/" target="_blank"><i class="icon-facebook5"
                      title="Suunto Facebook"></i></a></li>
          <li><a href="https://www.youtube.com/user/MovesCountbySuunto" target="_blank"><i class="icon-youtube4"
                      title="Suunto Youtube"></i></a></li>
          <li><a href="https://www.instagram.com/suunto/?hl=zh-tw" target="_blank"><i class="icon-instagram1"
                      title="Suunto instagram"></i></a></li>
          <li><a href="https://www.5hm1.com.tw/" target="_blank"><i class="icon-cart2" title="購物中心"></i></a></li>
          <li>
            <a href="mailto:service@empyrean.tw"><i class="icon-mail3" title="Send Email"></i></a>
          </li>
      </ul>

      <div class="footer__copyright">
          <p>Copyright © 2020 學習使用 無商業用途</p>
          <a href="" target=" _blank">隱私聲明</a>
          <a href="" target="_blank" class="line">免責條款</a>
      </div>
    </footer>

    <div class="go__top">
        <a href="javascript:;" class="go__top__btn icon-arrow-up11" title="Back To Top"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  },
};
</script>
