<template>
<div class='cart-box-container'>
  <cart-item-card
    v-for='(cartItem, index) in cartItems'
    v-on:changeNum='changeNum'
    :key='cartItem.id'
    :index='index'
    :cartItem='cartItem'
  />
  <div>合計金額 : {{ totalFee }}円</div>
  <reset-button v-on:resetCart='resetCart' />
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import CartItemCard from './CartItemCard.vue';
import ResetButton from './ResetButton.vue';
import { CartItem } from '../interface';

@Component({
  components: {
    CartItemCard,
    ResetButton,
  },
})
export default class CartBox extends Vue {
  @Prop()
  public cartItems!: CartItem[];

  @Emit('resetCart')
  public resetCart(): void {}

  @Emit('changeNum')
  public emitChageNum(changedNum: number, index: number): void {}

  public changeNum(changedNum: number, index: number): void {
    this.emitChageNum(changedNum, index);
  }

  public changeCartItems(newNumber: number, index: number): void {
    if (newNumber > 0) {
      this.cartItems[index].quantity = newNumber;
    } else {
      this.cartItems.splice(index, 1);
    }
  }

  public get totalFee(): number {
    let sum: number = 0;
    for (const cartItem of this.cartItems) {
      sum += cartItem.price * cartItem.quantity;
    }
    return sum;
  }
}
</script>