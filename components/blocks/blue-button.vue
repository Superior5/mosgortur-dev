<template>
   <div id="blue-button"
      class="cursor-pointer w-max font-medium font-notosans text-regular-1 xl:(py-8px px-17px) py-3px px-12px rounded-[60px] bg-rarely-4">
      <slot />
   </div>
</template>

<style >
#blue-button span {
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
   overflow: hidden;
   }
</style>