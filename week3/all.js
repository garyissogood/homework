
new Vue({

    //指定    
    el: '#app',

    //資料
    data: {
        products: [
            {
                id: 20200805001,
                unit: '隻',
                category: '運動手錶',
                title: 'SUUNTO 7',
                origin_price: 15900,
                price: 12900,
                description: '結合豐富的【戶外運動】與【智慧生活】功能於一體的 GPS 腕錶',
                content: '一般智慧型手錶',
                is_enabled: 1,
                imageUrl: 'https://img.empyrean.tw/40F72F99-F4A3-4AF0-8680-A40F01307BC9.png',
            },
            {
                id: 20200805002,
                unit: '隻',
                category: '運動手錶',
                title: 'SUUNTO 5',
                origin_price: 12900,
                price: 9450,
                description: '堅固輕巧質精，擁有絕佳的電池續航力，支援四星定位的 GPS 運動腕錶',
                content: '中強運動可使用',
                is_enabled: 0,
                imageUrl: 'https://img.empyrean.tw/DEE3E9B7-86BF-4FFC-9BE3-3EF207F9B9F8.png',
            },
            {
                id: 20200805003,
                unit: '隻',
                category: '運動手錶',
                title: 'SUUNTO 9 BARO',
                origin_price: 27800,
                price: 24800,
                description: '堅固強勁，超長電池續航力及氣壓式高度的多項目運動GPS腕錶',
                content: '旗艦級三鐵錶',
                is_enabled: 1,
                imageUrl: 'https://img.empyrean.tw/4E23BD85-544B-42F9-AFF7-3E39787AB593.png',
            },

        ],
        tempProduct: {}, //暫存區

    },

    //方法
    methods: {


        //把暫存資料存回原本物件或新建資料
        saveProduct() {
            let vm = this;
            if (vm.tempProduct.id) {    //覆蓋原有資料
                const id = vm.tempProduct.id;
                vm.products.forEach((item, i) => {
                    if (item.id === id) {
                        vm.products[i] = vm.tempProduct;
                    }
                });
            } else {  //新建資料
                const id = new Date().getTime();
                vm.tempProduct.id = id;
                vm.products.push(vm.tempProduct);
            }
            vm.tempProduct = {};
            $('#productModal').modal('hide');
        },

        //開啟視窗
        openModal(product, item) {
            let vm = this;
            switch (product) {
                //新增
                case 'new':
                    vm.tempProduct = {};
                    $('#productModal').modal('show');
                    break;
                //編輯
                case 'edit':
                    vm.tempProduct = Object.assign({}, item); // 物件淺拷貝，把資料做拷貝到空物件，不要動到原本的
                    $('#productModal').modal('show');
                    break;
                //刪除
                case 'delete':
                    vm.tempProduct = Object.assign({}, item);
                    $('#delProductModal').modal('show');
                    break;
                default:
                    break;
            }

        },

        //刪除資料
        delProduct() {
            let vm = this;
            if (vm.tempProduct.id) {
                const id = vm.tempProduct.id;
                vm.products.forEach((item, i) => {
                    if (item.id === id) {
                        vm.products.splice(i, 1);
                        vm.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');

        },

    },



});