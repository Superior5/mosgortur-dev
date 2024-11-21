<template>
   <div class="text-rarely-1 font-ptsans relative line">
      <slot />
   </div>
</template>
<style scoped >
.line::before {
   @apply content-[''] w-full h-1px bg-rarely-1 absolute top-1/2 transform rotate-6;
}
</style>