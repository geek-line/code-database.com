<template>
<div class="cart-item-container">
    <h3 class="cart-item-title">{{ cartItem.name }}</h3>
    <p class="cart-item-title">{{ cartItem.price }}円</p>
    <input type="number"
    class='cart-item-input'
    v-bind:value = "cartItem.quantity"
    v-on:input="$emit('changeNum',$event.target.value,index)"
    />
</div>
</template>

<script>
export default {
    props: ['cartItem', 'index'],
}
</script>

<style scoped>
.cart-item-title{
  display: inline-block;
}

.cart-item-input{
    display: inline-block;
    width: 20%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
</style>