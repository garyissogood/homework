<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h1>這是 [ 產品列表 ] 頁</h1>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <!--動態連結/動態路由-->
          <router-link :to="`/product/${item.id}`">連結</router-link> |
          <!--a連結要加.prevent 不然會被#蓋掉後面路徑-->
          <a href="#" @click.prevent="goPage(item)">A連結進入頁面</a> |
          <button @click="goPage(item)">按鈕進入頁面</button>
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
  methods: {
    goPage (item) {
      console.log(this.$router)
      // 屬性 $route
      // 方法 $router
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    this.isLoading = true
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      )
      .then((res) => {
        this.isLoading = false
        console.log(res)
        this.products = res.data.data
      })
  }
}
</script>
