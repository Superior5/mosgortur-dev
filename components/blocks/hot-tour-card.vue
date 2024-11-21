<template>
  <a class="flex gap-20px max-w-full w-306px" :href="hotTour.link">
    <div
      class="lg:(min-w-129px w-129px h-93px) min-w-102px w-102px h-72px rounded-[11px] bg-center bg-cover"
      :style="{
        backgroundImage: `url(${adminStore.adminUrl}/${hotTour.image})`,
      }"
    />
    <div class="flex flex-col items-start justify-between">
      <h6
        class="lg:(text-18px line-clamp-none) text-left max-w-157px line-clamp-2 overflow-hidden text-15px font-bold"
      >
        {{ hotTour.name }}
      </h6>
      <BlocksPrice class="lg:(text-16px) text-15px" filling
        >от {{ priceFormatter(hotTour.price) }} руб.</BlocksPrice
      >
    </div>
  </a>
</template>
<script setup>
const adminStore = useAdminStore();
const props = defineProps({
  hotTour: Object,
});
</script>