<template>
  <div class="tab-bar-item">
    <slot name="item-img"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.tab-bar-item {
  /* 设置弹性增长系数 */
  flex-grow: 1;
  /* 设置高度 */
  height: 49x;
  /* 设置水平居中方式 */
  text-align: center;
  /* 设置文字大小 */
  font-size: 14px;
}
.tab-bar-item p {
  /* height: 23px;
  width: 23px; */
  font-size: 23px;
  vertical-align: middle;
  display: inline;
}
</style>