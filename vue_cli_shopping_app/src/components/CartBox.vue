<template>
<div class="cart-box-container">

    <cart-item
    v-for="(cartItem, index) in cartItems"
    v-on:changeNum="changeNum"
    :key="cartItem.id"
    :index = "index"
    :cartItem = "cartItem"
    />

    <div>合計金額 : {{ totalFee }}円</div>
    <reset-button v-on:resetCart="$emit('resetCart')"/>
</div>
</template>

<script>
import CartItem from './CartItem'
import ResetButton from './ResetButton'

export default {
    props: ['cartItems'],
    methods: {
        changeNum: function (newNumber, index) {
            this.$emit('changeNum', newNumber, index)
        }
    },
    computed: {
        totalFee: function () {
            let sum = 0
            for (let i = 0; i < this.cartItems.length; i++) {
                sum += this.cartItems[i].price * this.cartItems[i].quantity
            }
            return sum
        }
    },
    components: {
        'cart-item': CartItem,
        'reset-button': ResetButton,
    }
}
</script>

<style scoped>
.cart-box-container{
  display: inline-block;
  vertical-align:  top;
  width: 30%;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>