<template>
<button class='btn-square' v-on:click='addCart'>add to cart</button>
</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class AddButton extends Vue {
  @Emit('addCart')
  public addCart(): void {}
}
</script>