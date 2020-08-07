import pagination from './pagination.js';
import modal from './modal.js';

Vue.component('pagination', pagination);
Vue.component('modal', modal);


new Vue({

    //指定    
    el: '#app',

    //資料
    data: {
        products: [],
        pagination: {},
        tempProduct: {
            imageUrl: []
        },
        api: {
            uuid: '38107256-74ef-4b56-aec6-4bda11e6b399',
            path: 'https://course-ec-api.hexschool.io/api/'
        },
        token: '',
        isNew: '',
        loadingBtn: '',

    },


    //創建
    created() {
        //取得存在 cookie 中的 token
        this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        //預設帶入 token
        axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

        this.getProducts();
    },

    //方法
    methods: {


        

        //開啟視窗
        openModal(isNew, item) {
            switch (isNew) {
                //新增
                case 'new':
                    this.tempProduct = { imageUrl: [] };
                    $('#productModal').modal('show');
                    break;
                //編輯
                case 'edit':
                    //讀取效果
                    this.loadingBtn = item.id;
                    //取得遠端單筆資料
                    const url = `${this.api.path}${this.api.uuid}/admin/ec/product/${item.id}`;
                    //取得遠端資料
                    axios.get(url).then((res) => {
                        this.tempProduct = res.data.data;
                        $('#productModal').modal('show');
                        this.loadingBtn = '';
                    }); 
                    break;
                //刪除
                case 'delete':
                    this.tempProduct = Object.assign({}, item);
                    $('#delProductModal').modal('show');
                    break;
                default:
                    break;
            }

        },

        //刪除資料
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');

        },

        //取得資料
        getProducts(num = 1) {


            //取得遠端後台管理API
            const url = `${this.api.path}${this.api.uuid}/admin/ec/products?page=${num}`;
            //取得遠端資料
            axios.get(url).then((res) => {
                this.products = res.data.data;
                this.pagination = res.data.meta.pagination;

                if (this.tempProduct.id) {
                    this.tempProduct = {
                        imageUrl: [],
                    };  
                    $('#productModal').modal('hide');                  
                };

            });
            // console.log(1);


        },



    },



});