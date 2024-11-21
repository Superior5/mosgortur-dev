<template>
  <section
    id="section-3"
    class="md:mt-150px mt-100px"
    v-if="interfaceStore.popularDestination.length"
  >
    <div class="container">
      <div
        class="flex md:(gap-70px mb-60px) gap-32px items-center md:(flex-row) flex-col mb-32px"
      >
        <BlocksH2 class="md:(text-32px text-left) text-20px text-center"
          >Популярные направления</BlocksH2
        >
        <!-- <BlocksSeeAll /> -->
      </div>
    </div>
    <div class="container">
      <Carousel :autoplay="3000" :itemsToScroll="1" snapAlign="start" :breakpoints="breakpoints" :wrapAround="true"
          class="">
          <Slide v-for="(item, i) in interfaceStore.popularDestination"
          :key="item.id + i">
              <BlocksPopularDestinationCard
                  :popular-destination="item"
              />
          </Slide>
       </Carousel>
    </div>
  </section>
</template>
<script setup>
const interfaceStore = useInterfaceStore();

onMounted(async () => {
  await interfaceStore.getTours(1);
});

const breakpoints = ref({
  1536: {
      itemsToShow: 6,
  },
  1280: {
      itemsToShow: 5,
  },
  1024: {
    itemsToShow: 4,
 },
  768: {
    itemsToShow: 3,
 },
 460: {
    itemsToShow: 2,
    snapAlign: "center" 
 },
 100: {
    itemsToShow: 1.5,
    snapAlign: "center" 
 }
})

</script>
<style>
#section-3 .bg-img1 {
  background-image: url("@/assets/images/sections/3/img-1.png");
}
</style>