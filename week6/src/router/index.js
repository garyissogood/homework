import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/Products.vue')
      },
      { // 動態路由
        path: '/product/:id',
        name: '產品頁面',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登入頁',
    component: () => import('../views/Login.vue')
  },
  // 巢狀路由(管理介面)
  {
    path: '/admin',
    name: '管理頁面',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '管理產品列表',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'coupons',
        name: '管理優惠券',
        component: () => import('../views/dashboard/Coupons.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
