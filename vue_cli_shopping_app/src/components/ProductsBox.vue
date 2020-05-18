<template>
<div class="products-box-container">
    <rich-item-card 
        v-for="(product,index) in products" 
        :key="index"
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