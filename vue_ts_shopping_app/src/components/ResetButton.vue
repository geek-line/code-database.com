<template>
<button class='btn-square' style='background: #fd9535;' v-on:click='resetCart'>reset cart</button>
</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  @Emit('resetCart')
  public resetCart(): void {}
}
</script>