<template>
<div class="card-container">
    <div>
        <h3 class='rich-item-card-title'>{{ product.name }}</h3>
        <p class='rich-item-card-price'>{{ product.price }}円</p>
        <add-button class='rich-item-card-price' v-on:addCart="$emit('addCart')"/>
    </div>
    <div>
        <img class='rich-item-card-img' :src="product.imgSrc" alt=""/>
        <p class='rich-item-card-description'>{{ product.description }}</p>
    </div>
</div>
</template>

<script>
import AddButton from './AddButton'

export default {
    props: ['product'],
    components: {
        'add-button': AddButton,
    }
}
</script>

<style scoped>
.card-container{
border: 1px solid #ccc;
padding: 10px;
}

.cart-item-container{
  border: 1px solid #ccc;
  padding: 10px;
}

.rich-item-card-title{
  display: inline-block;
}

.rich-item-card-price{
  display: inline-block;
}

.rich-item-card-img{
  width: 10%;
  height: auto;
  display: inline-block;
  vertical-align:  top;
}

.rich-item-card-description{
  width: 85%;
  display: inline-block;
  vertical-align:  top;
}
</style>