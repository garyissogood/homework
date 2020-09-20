<template>
  <div>
    <Header />
    <Loading :active.sync="isLoading" />
    <header class="title mt-4">
      <div class="title__box">
        <h3 class="title__box--sectitle">購物車</h3>
        <hr>
      </div>
    </header>
    <div class="my-5 row justify-content-center">
      <div class="col-md-8">
        <div class="text-right mb-3">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="removeAllCartItem()"
          >
            <i class="far fa-trash-alt" /> 刪除所有品項
          </button>
        </div>
        <table class="table">
          <thead>
            <th />
            <th>圖片</th>
            <th>品名</th>
            <th width="150px">
              數量
            </th>
            <th>單位</th>
            <th>單價</th>
          </thead>
          <tbody v-if="cart.length">
            <tr
              v-for="item in cart"
              :key="item.id"
            >
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.product.id)"
                >
                  <i class="far fa-trash-alt icon-delete5" />
                </button>
              </td>
              <td class="align-middle">
                <img :src="item.product.imageUrl" style="width: 100px">
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div
                  v-if="item.coupon"
                  class="text-success"
                >
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)"
                    >
                      +
                    </button>
                  </div>
                  <input
                    id="inlineFormInputGroupUsername"
                    type="text"
                    class="form-control text-center"
                    :value="item.quantity"
                    @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                  >
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      :disabled="item.quantity === 1"
                      @click="quantityUpdata(item.product.id, item.quantity - 1)"
                    >
                      -
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                {{ item.product.unit }}
              </td>
              <td class="align-middle text-right">
                {{ item.product.price }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colspan="4"
                class="text-right"
              >
                總計
              </td>
              <td class="text-right">
                {{ cartTotal }}
              </td>
            </tr>
            <tr v-if="coupon.enabled">
              <td
                colspan="4"
                class="text-right text-success"
              >
                折扣價
              </td>
              <td class="text-right text-success">
                {{ cartTotal * (coupon.percent / 100) }}
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            v-model="coupon_code"
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼"
          >
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCoupon"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
    <header class="title mt-5">
      <div class="title__box">
        <h3 class="title__box--sectitle">填寫資料</h3>
        <hr>
      </div>
    </header>
    <div class="my-5 row justify-content-center">
      <validation-observer
        v-slot="{ invalid }"
        class="col-md-6"
      >
        <form @submit.prevent="createOrder">
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              rules="required"
            >
              <label for="username">收件人姓名</label>
              <input
                id="username"
                v-model="form.name"
                type="text"
                class="form-control"
                :class="classes"
              >
              <span
                v-if="errors[0]"
                class="text-danger"
              >{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="E-mail"
              rules="required|email"
            >
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-control"
                :class="classes"
              >
              <span
                v-if="errors[0]"
                class="text-danger"
              >{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              rules="required|min:8"
            >
              <label for="tel">電話</label>
              <input
                id="tel"
                v-model="form.tel"
                type="tel"
                class="form-control"
                :class="classes"
              >
              <span
                v-if="errors[0]"
                class="text-danger"
              >{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              rules="required"
            >
              <label for="address">地址</label>
              <input
                id="address"
                v-model="form.address"
                type="text"
                class="form-control"
                :class="classes"
              >
              <span
                v-if="errors[0]"
                class="text-danger"
              >{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="message">購買方式</label>
            <select
              v-model="form.payment"
              class="form-control"
              required
            >
              <option
                value=""
                disabled
              >
                請選擇付款方式
              </option>
              <option value="WebATM">
                WebATM
              </option>
              <option value="ATM">
                ATM
              </option>
              <option value="CVS">
                CVS
              </option>
              <option value="Barcode">
                Barcode
              </option>
              <option value="Credit">
                Credit
              </option>
              <option value="ApplePay">
                ApplePay
              </option>
              <option value="GooglePay">
                GooglePay
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">留言</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-control"
              cols="30"
              rows="3"
            />
          </div>
          <div class="text-right">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="invalid"
            >
              送出表單
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
    <br>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Cart',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: [],
      tempProduct: {
        num: 0,
        imageUrl: [],
      },
      status: {
        loadingItem: '',
      },
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      cart: {},
      cartTotal: 0,
      coupon: {},
      isLoading: false,
      coupon_code: '',
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(url).then((response) => {
        this.cart = response.data.data;

        this.cart.forEach((item) => {
          this.cartTotal += item.product.price;
        });

        this.isLoading = false;
      });
    },
    quantityUpdata(id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return;

      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;

      const data = {
        product: id,
        quantity: num,
      };

      this.$http.patch(url, data).then(() => {
        this.isLoading = false;

        this.getCart();
      });
    },
    removeAllCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;

      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('message:push',
            '刪除成功',
            'success');

          this.isLoading = false;
          this.getCart();
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http.delete(url).then(() => {
        this.$bus.$emit('message:push',
          '刪除成功',
          'success');

        this.isLoading = false;
        this.getCart();
      });
    },
    // 新增 coupon (實際是搜尋 coupon)
    addCoupon() {
      this.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;

      this.$http.post(url, { code: this.coupon_code }).then((response) => {
        this.coupon = response.data.data;

        this.isLoading = false;
      }).catch((error) => {
        const errorData = error.response.data.errors;

        if (errorData) {
          errorData.code.forEach((err) => {
            this.$bus.$emit('message:push',
              `加入失敗${err}`,
              'danger');
          });

          this.isLoading = false;
        } else {
          const { message } = error.response.data;

          this.$bus.$emit('message:push',
            `加入失敗${message}`,
            'danger');

          this.isLoading = false;
        }
      });
    },
    createOrder() {
      this.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;

      const order = { ...this.form };

      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.$http.post(url, order).then((response) => {
        if (response.data.data.id) {
          this.$router.push(`/order/${response.data.data.id}`);
        }

        this.isLoading = false;
      }).catch((error) => {
        const errorData = error.response.data.errors;

        errorData.forEach((err) => {
          this.$bus.$emit('message:push',
            `建立訂單失敗${err}`,
            'danger');
        });

        this.isLoading = false;
      });
    },
  },
};
</script>
