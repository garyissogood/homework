import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// Message(呼叫方式)
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容,後端傳回來或者自定義
// status(String): alert色彩樣式ex.primary,danger等
