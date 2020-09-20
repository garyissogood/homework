<template>
    <div>
        <h3>這是 [ 產品詳細 ] 頁</h3>
        <h1>{{ product.title }}</h1>
        <p>{{ product.content }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        imageUrl: [],
      },
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      const { id } = this.$route.params.id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      // 存取資料到data-暫存區
      this.$http.get(api).then((res) => {
        this.product = res.data.data;
      });
    },
  },
};
</script>
