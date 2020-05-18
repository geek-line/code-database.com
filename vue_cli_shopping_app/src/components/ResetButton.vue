<template>
<button 
class="btn-square"
style="background: #fd9535;"
v-on:click="$emit('resetCart')"
>reset cart</button>
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