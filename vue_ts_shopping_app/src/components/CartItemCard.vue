<template>
<div class='cart-item-container'>
  <h3 class='cart-item-title'>{{ cartItem.name }}</h3>
  <p class='cart-item-title'>{{ cartItem.price }}円</p>
  <input
    type='number'
    class='cart-item-input'
    :value='cartItem.quantity'
    v-on:input='chageNum(Number($event.target.value),index)'
  />
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { CartItem } from '../interface';

@Component
export default class CardItemCard extends Vue {
  @Prop()
  public cartItem!: CartItem;

  @Prop()
  public index!: number;

  @Emit('changeNum')
  public chageNum(changedNum: number, index: number): void {}
}
</script>