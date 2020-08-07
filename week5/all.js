

// 匯入語系檔案
import zh_TW from './zh_TW.js';
// console.log(zh_TW);

Vue.component('loading' , VueLoading);

// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

// 加入至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW);

// 表單 Class 設定檔案
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});


new Vue ({

  el: '#app',

  //資料
  data: {
    tempProduct: {},
    products: [],
    isLoading: false,
    carts: [],
    cartTotal: 0,
    status: {
      loadingItem:'',
    },
    uuid: '38107256-74ef-4b56-aec6-4bda11e6b399',
    apiPath: 'https://course-ec-api.hexschool.io',

    //表單
    form: {
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: '',
      message: '',
    },



  },

  
  //方法 (會重複使用放這)
  methods: {    
    //取得產品資料
    getProducts(page = 1) { //使用page參數帶進來 , =1 為參數預設值
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/products?page=${page}`;
      //取得遠端資料
      axios.get(url).then(res => {
        // console.log(res);
        this.isLoading = false; //拿掉loading
        this.products = res.data.data; //將取得資料套入products裡
      }).catch(error => {
        this.isLoading = false; //讀取失敗時 , 也要拿掉loading
      });
    },

    //取得單一產品資料
    getProduct(id) {
      //點擊按鈕 loading 動作
      this.status.loadingItem = id; //*有出錯可能是data裡的status未定義到.loadingItem
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/product/${id}`;
      // console.log(id);
      axios.get(url).then(res => {
        // console.log(res);
        this.status.loadingItem = ''; //清掉點擊按鈕 loading 動作
        // this.tempProduct = res.data.data; //將取得資料暫存 tempProduct 裡
        // this.tempProduct.num = 1; //預設數量為 1
        //進階寫法 (es6方式)
        this.tempProduct = {
          ...res.data.data,
          num: 1 
        };
        $('#productModal').modal('show'); //開啟視窗
      });
    },
    
    //新增到購物車
    addToCart(id , quantity = 1) {      
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping`;
      //定義購物車
      const cart = {
        product: id,
        quantity, //*es6寫法 , 當屬性名稱與值相同 , 可以縮寫成同一個
      };
      // console.log(cart);
      axios.post(url , cart) //將單筆購物車資訊送上去
        .then(res => {
          this.isLoading = false; //拿掉loading
          console.log(res);
          this.getCart(); //重新取得購物車內容
          $('#productModal').modal('hide'); //關閉視窗
        })
        .catch(error => {
          this.isLoading = false; //拿掉loading
          console.log(error.response);
        });
    },

    //取得購物車
    getCart() {
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping`;
      axios.get(url)
        .then(res => {    
          // console.log('購物車' , res);
          this.carts = res.data.data;
          this.updateTotal(); //增加刪減後都會執行計算總價
          this.isLoading = false; //拿掉loading
        });      
    },

    //重新計算總價
    updateTotal() {
      //計算總價
      this.carts.forEach( item => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },

    //更新數量
    updateQuantity(id , quantity) {
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping`;
      //定義購物車
      const cart = {
        product: id,
        quantity, //*es6寫法 , 當屬性名稱與值相同 , 可以縮寫成同一個
      };
      // console.log(cart);
      axios.patch(url , cart) //將單筆購物車資訊送上去
        .then(res => {
          this.isLoading = false; //拿掉loading
          console.log(res);
          this.getCart(); //重新取得購物車內容
        })
        .catch(error => {
          this.isLoading = false; //拿掉loading
          console.log(error.response);
        });
    },

    //清除購物車所有品項
    removeAllCartItem() {
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping/all/product`;
      
      axios.delete(url) //將單筆購物車資訊送上去
        .then(res => {
          this.isLoading = false; //拿掉loading
          this.getCart(); //重新取得購物車內容
        }); 
    },

    //清除購物車單一品項
    removeCartItem(id) {
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping/${id}`;
      
      axios.delete(url) //將單筆購物車資訊送上去
        .then(res => {
          this.isLoading = false; //拿掉loading
          this.getCart(); //重新取得購物車內容
        }); 
    },

    //訂單表單
    createOrder() {
      //進入此畫面進行loading
      this.isLoading = true;
      //取得前台api
      const url = `${this.apiPath}/api/${this.uuid}/ec/orders`;

      axios.post(url, this.form)
        .then((res) => {
          if (res.data.data.id) {
            this.isLoading = false; //拿掉loading           
            $('#orderModal').modal('show'); // 跳出提示訊息         
            this.getCart(); //重新取得購物車內容
          }
        }).catch((error) => {
          this.isLoading = false; //拿掉loading      
          console.log(error.response.data.errors);
        });
    },


  },


  //創建 (只會單次使用放這)
  created() {
    this.getProducts();
    this.getCart();
  },


});