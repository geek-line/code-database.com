<template>
<div>
    <button
    class="btn-square"
    v-on:click="$emit('addCart')"
    >add to cart</button>
</div>
</template>

<style scoped>
.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-radius: 3px;
}
</style>