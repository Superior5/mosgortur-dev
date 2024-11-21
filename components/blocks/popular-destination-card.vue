<template>
   <a class="lg:(w-241px) w-214px w-full" target="_blank" :href="popularDestination.link">
      <h6 class="font-mulish font-black lg:text-20px text-left text-16px uppercase mb-18px">{{ popularDestination.title }}</h6>
      <div class="h-125px xl:w-241px w-214px relative rounded-[10px] bg-no-repeat bg-center bg-cover"
         :style="{ backgroundImage: `url(${adminStore.adminUrl}/${popularDestination.image})` }">
         <BlocksPrice class="absolute top-18px left-24px">
            от {{ priceFormatter(popularDestination.price) }} руб.
         </BlocksPrice>
      </div>
   </a>
</template>
<script setup>
const adminStore = useAdminStore()
const props = defineProps({
   popularDestination: Object
})
</script>