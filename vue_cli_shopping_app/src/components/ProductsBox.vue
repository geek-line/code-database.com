<template>
<div class="products-box-container">
    <rich-item-card 
        v-for="product in products" 
        :key="product.id"
        v-on:addCart="$emit('addCart',product)" 
        :product="product"
    />
</div>
</template>

<script>
import RichItemCard from './RichItemCard'

export default {
    props: ['products'],
    components: {
        'rich-item-card': RichItemCard,
    }
}
</script>

<style scoped>
.products-box-container{
width: 60%;
display: inline-block;
vertical-align:  top;
}  
</style>