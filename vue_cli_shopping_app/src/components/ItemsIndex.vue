<template>
     <div class="item-index-container">
        <products-box v-on:addCart="addCart" :products="products"/>
        <cart-box v-on:resetCart="resetCart" v-on:changeNum="changeCartItems" :cartItems="cartItems"/>
    </div>
</template>

<script>

import ProductsBox from './ProductsBox'
import CartBox from './CartBox'

export default {
    props: ['products'],
    data: function () {
        return {
            cartItems: []
        }
    },
    methods: {
        addCart: function (product) {
            let isFounded = false
            let cartNumber;
            for (let i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].name === product.name) {
                    isFounded = true
                    cartNumber = i
                    break
                }
            }
            if (isFounded) {
                this.cartItems[cartNumber].quantity += 1
            } else {
                this.cartItems.push({ name: product.name, price: product.price, quantity: 1 })
            }
        },
        changeCartItems: function (newNumber, index) {
            if (newNumber > 0) {
                this.cartItems[index].quantity = Number(newNumber)
            } else {
                this.cartItems.splice(index, 1)
            }
        },
        resetCart: function () {
            this.cartItems = []
        }
    },
    components: {
        'products-box': ProductsBox,
        'cart-box': CartBox,
    }
}
</script>