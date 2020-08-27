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
    name: 'Login',
    component: () => import('../views/frontend/Login.vue'),
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
