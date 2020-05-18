<template>
<div class='item-index-container'>
  <product-box v-on:addCart='addCart' :products='products' />
  <cart-box v-on:changeNum='changeCartItems' v-on:resetCart='resetCart' :cartItems='cartItems' />
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductBox from './ProductBox.vue';
import CartBox from './CartBox.vue';
import { Product, CartItem } from '../interface';

@Component({
  components: {
    ProductBox,
    CartBox,
  },
})
export default class ItemIndex extends Vue {
  public cartItems: CartItem[] = [];

  @Prop()
  public products!: Product[];

  public addCart(product: Product): void {
    let isFounded: boolean = false;
    // カートにすでに商品があるかどうか検索する
    let cartNumber: number = 0;
    for (let i: number = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === product.name) {
        isFounded = true;
        cartNumber = i;
        break;
      }
    }
    if (isFounded) {
      // カートに商品がある場合はそのカート番号の商品数を一つ増やす
      this.cartItems[cartNumber].quantity += 1;
    } else {
      this.cartItems.push({
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    // console.log(this.cartItems);
  }

  public changeCartItems(newNumber: number, index: number): void {
    if (newNumber > 0) {
      this.cartItems[index].quantity = newNumber;
    } else {
      this.cartItems.splice(index, 1);
    }
  }

  public resetCart() {
    this.cartItems = [];
  }
}
</script>

