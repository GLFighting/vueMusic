<template>
 <TabBar>
   <TabBarItem>
     <template  v-slot:item-img>
       <p class="iconfont">&#xe621;</p>
     </template>
     <template v-slot:item-text>
       <div>发现</div>
     </template>
   </TabBarItem>
   <TabBarItem>
     <template v-slot:item-img>
       <p class="iconfont">&#xe62e;</p>
     </template>
     <template  v-slot:item-text>
       <div>播客</div>
     </template>
   </TabBarItem>
   <TabBarItem>
     <template v-slot:item-img>
       <p class="iconfont">&#xe621;</p>
     </template>
     <template v-slot:item-text>
       <div>我的</div>
     </template>
   </TabBarItem>
   <TabBarItem>
     <template v-slot:item-img>
       <p class="iconfont">&#xe617;</p>
     </template>
     <template v-slot:item-text>
       <div>k歌</div>
     </template>
   </TabBarItem>
   <TabBarItem>
     <template v-slot:item-img>
       <p class="iconfont">&#xe622;</p>
     </template>
     <template v-slot:item-text>
       <div>云村</div>
     </template>
   </TabBarItem>
 </TabBar>
</template>

<script setup lang="ts">
  import TabBar from '@/components/TabBar/TabBar.vue'
  import TabBarItem from '../components/TabBar/TabBarItem.vue'
</script>

<style>
  @import url('../assets/iconfont/iconfont.css');
</style>