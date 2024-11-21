<template>
  <button
    :class="
      filling
        ? 'text-white bg-regular-0 hover:( !text-regular-0 bg-white !border-regular-0)'
        : 'hover:(text-white bg-regular-0) text-regular-0 !border-regular-0'
    "
    class="font-notosans font-bold cursor-pointer disabled:(opacity-50 cursor-not-allowed) transition-all py-6px px-14px rounded-[6px] border"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  filling: {
    typeof: Boolean,
    default: true,
  },
});
</script>