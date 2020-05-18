<template>
<div class='products-box-container'>
  <item-card
    v-for='(product,index) in products'
    :key='index'
    v-on:addCart='addCart(product)'
    :product='product'
  />
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import ItemCard from './ItemCard.vue';
import { Product } from '../interface';

@Component({
  components: {
    ItemCard,
  },
})
export default class ProductBox extends Vue {
  @Prop()
  public products!: Product[];

  @Emit('addCart')
  public addCart(product: Product): void {}
}
</script>
