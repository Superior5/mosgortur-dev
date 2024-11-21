<template>
  <div
    id="orange-button"
    class="cursor-pointer text-15px font-medium font-ptsans text-regular-0 md:(px-20px) flex items-center py-3px px-12px rounded-[60px] bg-regular-3"
  >
    <slot />
  </div>
</template>

<style >
#orange-button span {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>