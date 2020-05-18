<template>
<div class='card-container'>
  <div>
    <h3 class='rich-item-card-title'>{{ product.name }}</h3>
    <p class='rich-item-card-price'>{{ product.price }}円</p>
    <add-button class='rich-item-card-price' v-on:addCart='addCart' />
  </div>
  <div>
    <img class='rich-item-card-img' :src='product.imgSrc' />
    <p class='rich-item-card-description'>{{ product.description }}</p>
  </div>
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import AddButton from './AddButton.vue';
import { Product } from '../interface';

@Component({
  components: {
    AddButton,
  },
})
export default class ItemCard extends Vue {
  @Prop()
  public product!: Product;

  @Emit('addCart')
  public addCart(): void {}
}
</script>