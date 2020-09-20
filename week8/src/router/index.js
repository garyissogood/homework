import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontend/Home.vue'),
  },
  {
    path: '/login',
    name: '會員登入',
    component: () => import('../views/frontend/Login.vue'),
  },
  {
    path: '/products',
    name: '產品介紹列表',
    component: () => import('../views/frontend/Products.vue'),
  },
  {
    path: '/products-two',
    name: '產品介紹列表two',
    component: () => import('../views/frontend/ProductsTwo.vue'),
  },
  {
    path: '/product',
    name: '產品介紹',
    component: () => import('../views/frontend/Product.vue'),
  },
  {
    path: '/knowledges',
    name: '運動知識列表',
    component: () => import('../views/frontend/Knowledges.vue'),
  },
  {
    path: '/knowledge',
    name: '運動知識',
    component: () => import('../views/frontend/Knowledge.vue'),
  },
  {
    path: '/skills',
    name: '使用技巧列表',
    component: () => import('../views/frontend/Skills.vue'),
  },
  {
    path: '/skill',
    name: '使用技巧',
    component: () => import('../views/frontend/Skill.vue'),
  },
  {
    path: '/adventures',
    name: '冒險故事列表',
    component: () => import('../views/frontend/Adventures.vue'),
  },
  {
    path: '/new',
    name: '最新消息',
    component: () => import('../views/frontend/New.vue'),
  },
  {
    path: '/news',
    name: '最新消息列表',
    component: () => import('../views/frontend/News.vue'),
  },
  {
    path: '/adventure',
    name: '冒險故事',
    component: () => import('../views/frontend/Adventure.vue'),
  },
  {
    path: '/service',
    name: '支援服務',
    component: () => import('../views/frontend/Service.vue'),
  },
  {
    path: '/about',
    name: '關於我們',
    component: () => import('../views/frontend/About.vue'),
  },
  {
    path: '/story',
    name: '品牌故事',
    component: () => import('../views/frontend/Story.vue'),
  },
  {
    path: '/cart',
    name: '購物車',
    component: () => import('../views/frontend/Cart.vue'),
  },
  {
    path: '/order',
    name: '訂單',
    component: () => import('../views/frontend/Order.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
      },
      // Customer
      {
        path: 'customer_order',
        name: '用戶訂單',
        component: () => import('../views/backend/CustomerOrders.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        name: '用戶訂單列表',
        component: () => import('../views/backend/CustomerCheckout.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
