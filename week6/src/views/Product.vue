<template>
    <div>
        <h3>這是 [ 產品詳細 ] 頁</h3>
        <h1>{{ product.title }}</h1>
        <p>{{ product.content }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: []
    }
  },
  created () {
    console.log(this.$route.params.id)
    // 屬性 $route
    // 方法 $router
    const id = this.$route.params.id
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`
      )
      .then((res) => {
        console.log(res)
        this.product = res.data.data
      })
  }
}
</script>
