<template>
   <div class="flex mt-25px md:(overflow-x-visible mb-40px mt-60px) mb-30px overflow-x-auto">
      <div
         class="py-8px text-center cursor-pointer border-b-2 leading-4 w-full font-ptsans md:(whitespace-pre-wrap px-0 text-16px) whitespace-nowrap px-10px text-14px"
         :class="actTab == i ? 'border-regular-0 text-regular-0' : 'border-rarely-1'" @click="$emit('changeActTab', i)"
         v-for="(tab, i) in tabs" :key="tab.title">
         {{ tab.title }}
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   actTab: Number,
   tabs: Array
})
</script>
<style >
   
</style>