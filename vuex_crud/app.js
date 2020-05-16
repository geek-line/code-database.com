const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "じゃがいも（きたあかり）",
                price: 30,
                description: "栗じゃがいもと呼ばれるくらいとても甘いジャガイモです。煮崩れしやすいいもですがコロッケ、ポテトサラダ等に向いています。",
                imgSrc: "https://3.bp.blogspot.com/-EiqKoF2kMTQ/UkJM5vVnb7I/AAAAAAAAYVU/tCuJxeQQiNE/s800/jagaimo_poteto.png"
            },
            {
                name: "にんじん",
                price: 20,
                description: "根色・肉色ともに濃鮮紅色で、肌は極めて滑らか。βカロチンが多く含まれている人参で健康を促進！色々な用途に使える万能食材です",
                imgSrc: "https://3.bp.blogspot.com/-QCe-ngfpbTg/UkJM8tkaq6I/AAAAAAAAYWM/U3pbo3YS9XA/s800/ninjin_carrot.png"
            },
            {
                name: "たまねぎ",
                price: 20,
                description: "「札幌黄」は他の玉葱よりも肉厚で柔らかく、熱を加えると甘味と柔らかさが増すのが特徴です。",
                imgSrc: "https://3.bp.blogspot.com/-SDkR2b5YQec/UkJNENH-daI/AAAAAAAAYYE/fZCzG5KG9I4/s800/tamanegi_onion+(1).png"
            },
            {
                name: "かぼちゃ",
                price: 40,
                description: "かぼちゃには、粘膜や皮膚の抵抗力を強くするカロテンが多く含まれています。てんぷらや、中身をくり抜いて容器に使った南瓜グラタンなど、料理のバリエーションが増えます。",
                imgSrc: "https://1.bp.blogspot.com/-Pvw0cjpU8PU/XUTi7aOOAGI/AAAAAAABT-E/_nodpClWjNUmUJf0pQnI7K2pqtyW1SORQCLcBGAs/s1600/kabocha.png"
            },
            {
                name: "たまご",
                price: 10,
                description: "那須野が原で毎日、産まれています。箸でつまめる程のしっかりとした弾力、コクと甘みを併せ持った、濃い味わいが評判のこだわり卵です。",
                imgSrc: "https://3.bp.blogspot.com/-nqViReTJpqk/U0pTY72cRnI/AAAAAAAAfJ4/kg1r7C_y48k/s800/tamago_pack.png"
            },
            {
                name: "ブロッコリー",
                price: 50,
                description: "ゆでてマヨネーズ、煮物や温野菜で食べると美味しいです。茎も皮をむいて炒めると美味しく食べられます。",
                imgSrc: "https://3.bp.blogspot.com/-kUCoL5ijgWA/UkJMpwWHd0I/AAAAAAAAYQ4/qxVI_KDl1po/s800/broccoli.png"
            }
        ],
        cartItems: [],
    },
    getters: {
        totalFee: function (state) {
            let sum = 0;
            for (i = 0; i < state.cartItems.length; i++) {
                sum += state.cartItems[i].price * state.cartItems[i].quantity;
            }
            return sum;
        }
    },
    mutations: {
        addCart: function (state, product) {
            let isFounded = false;
            let cartNumber;
            for (i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].name === product.name) {
                    isFounded = true;
                    cartNumber = i;
                    break;
                }
            }
            if (isFounded) {
                state.cartItems[cartNumber].quantity += 1;
            } else {
                state.cartItems.push({ name: product.name, price: product.price, quantity: 1 });
            }
        },
        changeCartItems: function (state, payload) {
            if (payload.newNumber > 0) {
                state.cartItems[payload.index].quantity = Number(payload.newNumber);
            } else {
                state.cartItems.splice(payload.index, 1);
            }
        },
        resetCart: function (state) {
            state.cartItems = [];
        }
    }
})

const AddButton = {
    template: `
    <div>
        <button
        class="btn-square"
        v-on:click="$emit('addCart')"
        >add to cart</button>
    </div>
    `,
}

const ResetButton = {
    template: `
    <button 
    class="btn-square"
    style="background: #fd9535;"
    v-on:click="resetCart"
    >reset cart</button>
    `,
    methods: {
        ...Vuex.mapMutations([
            'resetCart'
        ]),
    },
}

const RichItemCard = {
    props: ['product'],
    template: `
    <div class="card-container">
        <div>
            <h3 class='rich-item-card-title'>{{ product.name }}</h3>
            <p class='rich-item-card-price'>{{ product.price }}円</p>
            <add-button v-on:addCart="addCart" class='rich-item-card-price'>
        </div>
        <div>
            <img class='rich-item-card-img' :src="product.imgSrc"/>
            <p class='rich-item-card-description'>{{ product.description }}</p>
        </div>
    </div>
    `,
    methods: {
        addCart: function () {
            this.$store.commit('addCart', this.product);
        }
    },
    components: {
        'add-button': AddButton,
    }
}

const CartItem = {
    props: ['cartItem', 'index'],
    template: `
    <div class="cart-item-container">
        <h3 class="cart-item-title">{{ cartItem.name }}</h3>
        <p class="cart-item-title">{{ cartItem.price }}円</p>
        <input type="number"
        class='cart-item-input'
        :value = "cartItem.quantity"
        v-on:input="changeCartItems($event.target.value)"
        />
    </div>
    `,
    methods: {
        changeCartItems: function (newValue) {
            this.$store.commit('changeCartItems', { newNumber: newValue, index: this.index });
        }
    },
}

const CartBox = {
    template: `
    <div class="cart-box-container">
        <cart-item
        v-for="(cartItem, index) in cartItems"
        :key="cartItem.id"
        :index = "index"
        :cartItem = "cartItem"
        />
        <div>合計金額 : {{ totalFee }}円</div>
        <reset-button/>
    </div>
    `,
    computed: {
        ...Vuex.mapState([
            'cartItems'
        ]),
        ...Vuex.mapGetters([
            'totalFee'
        ]),
    },
    components: {
        'cart-item': CartItem,
        'reset-button': ResetButton,
    }
}

const ProductsBox = {
    template: `
    <div class="products-box-container">
        <rich-item-card
            v-for="(product,index) in products" 
            :key="index"
            :product="product"
        />
    </div>
    `,
    computed: {
        ...Vuex.mapState([
            'products'
        ])
    },
    components: {
        'rich-item-card': RichItemCard,
    }
}

const ItemsIndex = {
    template: `
    <div class="item-index-container">
        <products-box/>
        <cart-box/>
    </div>
    `,
    components: {
        'products-box': ProductsBox,
        'cart-box': CartBox,
    }
}

new Vue({
    el: '#shopping-cart',
    store,
    components: {
        'items-index': ItemsIndex
    }
})