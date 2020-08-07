export default {
    template: `<div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">

        <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
                <span>新增產品</span>
            </h5>
            <!-- 關閉按鈕-->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <!--modal-header END -->

        <div class="modal-body">
            <div class="row">

                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="imageUrl">輸入圖片網址</label>
                        <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" class="form-control"
                            placeholder="請輸入圖片連結">
                    </div>
                    <img :src="tempProduct.imageUrl" alt="" class="img-fluid">
                </div>
                <!--col-sm-4 END -->

                <div class="col-sm-8">
                    <div class="form-group">
                        <label for="title">標題</label>
                        <input id="title" v-model="tempProduct.title" type="text" class="form-control"
                            placeholder="請輸入標題">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input id="category" v-model="tempProduct.category" type="text"
                                class="form-control" placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="unit">單位</label>
                            <input id="unit" v-model="tempProduct.unit" type="text" class="form-control"
                                placeholder="請輸入單位">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="origin_price">原價</label>
                            <input id="origin_price" v-model="tempProduct.origin_price" type="text"
                                class="form-control" placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input id="price" v-model="tempProduct.price" type="text" class="form-control"
                                placeholder="請輸入售價">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description">產品描述</label>
                        <input id="description" v-model="tempProduct.description" type="text"
                            class="form-control" placeholder="請輸入產品描述">
                    </div>
                    <div class="form-group">
                        <label for="content">說明內容</label>
                        <input id="content" v-model="tempProduct.content" type="text" class="form-control"
                            placeholder="請輸入說明內容">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled"
                                class="form-check-input" :true-value="1" :flase-value="0">
                            <label for="is_enabled" class="form-check-label">是否啟用</label>
                        </div>
                    </div>
                </div>
                <!--col-sm-8 END-->

            </div>
            <!--row END -->
        </div>
        <!--modal-bady END -->

        <div class="modal-footer">
            <button class="btn btn-outline-secondary" type="button" data-dismiss="modal">取消</button>
            <button class="btn btn-primary" type="button" @click="saveProduct">確認</button>
        </div>
        <!--modal-footer END -->

    </div>
    </div>`,
    data() {
        return {

        };
    },
    props: ['tempProduct' , 'api'],
    methods: {
        saveProduct() {
        const url = `${this.api.path}${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`;
                axios.patch(url , this.tempProduct).then((res) => {
                // console.log(res)
                this.$emit('updata');
                }); 

        },
    },
};