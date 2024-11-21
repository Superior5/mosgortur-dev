<template>
   <div class="flex md:gap-10px gap-5px font-ptsans mb-45px mt-18px">
      <div class="flex items-center gap-5px cursor-pointer md:(text-16px gap-10px) text-12px"
         v-for="(el, i) in breadCrumbs" :key="el.name">
         <nuxt-link :class="i < breadCrumbs.length - 1 ? 'text-rarely-1 border-b' : 'text-black'" v-if="el.link"
            :to="el.link">{{ el.name }}</nuxt-link>
         <span v-else :class="i < breadCrumbs.length - 1 ? 'text-rarely-1 border-b' : 'text-black'">{{ el.name }}</span>
         <IconsSliderArrow v-if="i < breadCrumbs.length - 1" />
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   breadCrumbs: Array
})
</script>