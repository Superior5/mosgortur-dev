<template>
   <div id="accordion">
      <div v-for="(option, i) in accordion" :key="option.title" class="accordion__item"
         :class="{ 'act': actAccordion == option.title }">
         <h5 @click="actAccordion = actAccordion == option.title ? '' : option.title" class="accordion__title">
            {{ option.title }}
            <div class="accordion__icon">
               <span></span>
               <span></span>
            </div>
         </h5>
         <div class="accordion__desc">
            <template v-if="option.desc">
               {{ option.desc }}
            </template>
            <slot v-else :name="i"></slot>
         </div>
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   accordion: Array,
})

const actAccordion = ref('')
</script>
<style scoped>
#accordion {
   @apply flex flex-col md:gap-16px gap-6px;
}

#accordion .accordion__item {
   @apply shadow-3 overflow-hidden;
}

#accordion .accordion__item.act {
   @apply bg-regular-3;
}

#accordion .accordion__title {
   @apply flex cursor-pointer justify-between md:text-20px font-mulish items-center py-13px px-17px font-medium;
}

#accordion .accordion__icon {
   @apply md:(w-25px h-25px) w-15px h-15px flex items-center relative justify-center;
}

#accordion .accordion__icon>span {
   @apply w-full h-1.5px transition-all duration-700 transform bg-black absolute;
}

#accordion .accordion__icon>span:last-child {
   @apply rotate-90;
}

#accordion .accordion__item.act .accordion__icon>span:last-child {
   @apply rotate-0;
}

#accordion .accordion__desc {
   @apply transition-all md:px-40px px-10px duration-700 max-h-0;
}

#accordion .accordion__item.act .accordion__desc {
   @apply max-h-2000px md:py-30px pb-10px;
}
</style>