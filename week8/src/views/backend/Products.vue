<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
          <tr>
              <th width="15%">分類</th>
              <th>產品名稱</th>
              <th width="20%">產品圖像</th>
              <th width="10%">原價</th>
              <th width="10%">售價</th>
              <th width="10%">是否啟用</th>
              <th width="15%">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(item , index) in products" :key="index">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>
                <template>
                  <img
                    class="thumb-img"
                    :src="item.imageUrl" alt=""
                  >
                </template>
              </td>
              <td class="text-right">{{ item.origin_price }}</td>
              <td class="text-right">{{ item.price }}</td>
              <td>
                <span
                  v-if="item.enabled"
                  class="text-success"
                >
                  啟用
                </span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm mr-2"
                    @click="openModal('edit', item)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete' , item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
          </tr>
      </tbody>
    </table>
    <!--分頁-->
    <pagination
      :pages="pagination"
      @update="getProducts"
    >
    </pagination>

    <!-- productModal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">

          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯 {{ tempProduct.title }} 產品</span>
            </h5>
            <!-- 關閉按鈕-->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="row">

              <div class="col-sm-4">
                <div
                  v-for="i in 5"
                  :key="i + 'img'"
                  class="form-group"
                >
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input
                    :id="'img' + i"
                    v-model="tempProduct.imageUrl[i - 1]"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i
                      v-if="status.fileUploading"
                      class="fas fa-spinner fa-spin"
                    />
                  </label>
                  <input
                    id="customFile"
                    ref="file"
                    type="file"
                    class="form-control"
                    @change="uploadFile"
                  >
                </div>
                <img
                  :src="tempProduct.imageUrl"
                  class="img-fluid"
                  alt=""
                >
              </div><!--col-sm-4 END-->

              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    class="form-control"
                    v-model="tempProduct.title"
                    type="text"
                    placeholder="請輸入標題"
                    required
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      id="category"
                      class="form-control"
                      v-model="tempProduct.category"
                      type="text"
                      placeholder="請輸入分類"
                      required
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="unit">單位</label>
                    <input
                      id="unit"
                      class="form-control"
                      v-model="tempProduct.unit"
                      type="text"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      class="form-control"
                      v-model="tempProduct.origin_price"
                      type="text"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      class="form-control"
                      v-model="tempProduct.price"
                      type="text"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <input
                    id="description"
                    class="form-control"
                    v-model="tempProduct.description"
                    type="text"
                    placeholder="請輸入產品描述"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="content">說明內容</label>
                  <input
                    id="content"
                    class="form-control"
                    v-model="tempProduct.content"
                    type="text"
                    placeholder="請輸入說明內容"
                  >
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="enabled"
                      class="form-check-input"
                      v-model="tempProduct.enabled"
                      type="checkbox"
                    >
                    <label
                      for="enabled"
                      class="form-check-label"
                    >
                      是否啟用
                    </label>
                  </div>
                </div>

              </div><!--col-sm-8 END-->

            </div>
          </div><!--modal-bady END -->

          <div class="modal-footer">
            <button
              class="btn btn-outline-secondary"
              type="button"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              class="btn btn-primary"
              type="button"
              @click="updateProduct"
            >
              確認
            </button>
          </div>

        </div>
      </div>
    </div>
    <!--productModal END -->

    <!-- delProductModal -->
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
              <h5 id="exampleModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <!-- 關閉按鈕-->
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">
              {{ tempProduct.title }}
            </strong>
              商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-outline-secondary"
              type="button"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              class="btn btn-danger"
              type="button"
              @click="delProduct"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--delProductModal END -->

  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取得產品資料
    getProducts(page = 2) {
      this.isLoading = true;
      // 後台驗證api
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      // 存取資料到data
      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
      });
    },
    // 取得產品資料-詳細內容
    getDetails(id) {
      this.isLoading = true;
      // 後台驗證api
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      // 存取資料到data-暫存區
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data;
        $('#productModal').modal('show');
        this.isLoading = false;
      });
    },
    // 開啟 Modal 視窗
    openModal(isNew, item) {
      switch (isNew) {
        case 'new': // 新建
          this.tempProduct = {
            imageUrl: [],
          };
          this.isNew = true;
          $('#productModal').modal('show');
          break;
        case 'edit': // 編輯
          this.isNew = false;
          this.getDetails(item.id);
          break;
        case 'delete': // 刪除
          this.tempProduct = { ...item };
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    },
    // 上傳產品資料
    updateProduct() {
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';

      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }

      this.$http[httpMethod](api, this.tempProduct)
        .then(() => {
          $('#productModal').modal('hide');
          // Toast資訊
          this.$bus.$emit('message:push',
            '新增成功',
            'success');

          this.isLoading = false;
          // 重新執行
          this.getProducts();
        }).catch((error) => {
          this.isLoading = false;

          const errorData = error.response.data;

          $('#productModal').modal('hide');
          // Toast資訊
          this.$bus.$emit('message:push',
            `出現錯誤 ${errorData}`,
            'danger');
        });
    },
    // 刪除產品
    delProduct() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;

      this.$http.delete(api).then(() => {
        $('#delProductModal').modal('hide');

        this.isLoading = false;
        // Toast資訊
        this.$bus.$emit('message:push',
          '刪除成功',
          'success');
        // 重新執行
        this.getProducts();
      });
    },
    // 上傳檔案
    uploadFile() {
      const uploadedFile = this.$refs.file.files[0];

      const formData = new FormData();

      formData.append('file', uploadedFile);

      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;

      this.status.fileUploading = true;

      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        this.status.fileUploading = false;

        if (response.status === 200) {
          this.tempProduct.imageUrl.push(response.data.data.path);
        }
      }).catch(() => {
        this.$bus.$emit('message:push',
          '檔案上傳失敗，請檢查是不是檔案大小超過 2MB',
          'danger');

        this.status.fileUploading = false;
      });
    },
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
