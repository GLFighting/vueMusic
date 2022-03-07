<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
#tab-bar {
  /* 设置背景颜色 */
  background-color: #f6f6f6;
  /* 设置为弹性容器 */
  display: flex;
  /* 开启固定定位，相对于浏览器视窗进行定位 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 设置阴影 */
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}
</style>