<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h1>這是 [ 管理產品列表 ] 頁</h1>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <!--動態連結/動態路由-->
          <router-link :to="`/product/${item.id}`">連結</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  // 接外層資料
  props: ['token'],
  created () {
    this.isLoading = true
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`
      )
      .then((res) => {
        this.isLoading = false
        this.products = res.data.data
      })
  }
}
</script>
