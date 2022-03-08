<template>
  <div id="top-bar">
    <i class="iconfont">&#xe8ce;</i>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
#top-bar {
  /* 设置背景颜色 */
  background-color: transparent;
  /* 设置为弹性容器 */
  display: flex;
  /* 开启固定定位，相对于浏览器视窗进行定位 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* 设置阴影 */
  height: 49px;
}
</style>