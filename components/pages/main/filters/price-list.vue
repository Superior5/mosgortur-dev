<template>
  <div
    id="price-list"
    class="flex gap-5px overflow-x-auto overflow-hidden mt-40px"
  >
    <Carousel
      v-model="actSlide"
      :items-to-show="isLarge() ? (isMobile() ? 4 : 6) : 10"
      snapAlign="start"
      :wrap-around="false"
      class="w-full"
    >
      <Slide
        class="flex px-5px justify-end text-center font-ptsans flex-col gap-5px"
        v-for="(item, i) in toursStore.priceList"
        :key="item.Key + i"
      >
        <div class="h-30px flex items-end w-full">
          <div
            class="bg-rarely-6 w-full relative"
            :style="'height:' + item.height + 'px'"
          >
            <div
              v-if="item.height == 30 || item.height == 5"
              :class="item.height == 5 ? 'bg-regular-6' : 'bg-regular-4'"
              class="h-5px w-full left-0 absolute top-0"
            />
          </div>
        </div>
        <div class="text-14px">{{ dateForPrices(item.StartDate) }}</div>
        <div class="md:text-15px text-14px font-bold">
          от {{ priceFormatter(item.Cost) }} ₽
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <!-- <div class="flex justify-end min-w-104px w-full text-center font-ptsans flex-col gap-5px"
          v-for="(item, i) in toursStore.priceList" :key="item.Key + i">
          <div class="h-30px flex items-end">
             <div class="bg-rarely-6 w-full relative" :style="'height:' + item.height + 'px'">
                <div v-if="item.height == 30 || item.height == 5"
                   :class="item.height == 5 ? 'bg-regular-6' : 'bg-regular-4'" class="h-5px w-full left-0 absolute top-0" />
             </div>
          </div>
          <div class="text-14px">{{ dateForPrices(item.StartDate) }}</div>
          <div class="text-15px font-bold">от {{ priceFormatter(item.Cost) }} ₽</div>
       </div> -->
  </div>
</template>
 <script setup>
const toursStore = useToursStore();
// const re = toursStore.priceList.findIndex(el => new Date(el.StartDate).getTime() / (3600000 * 24) - new Date(toursStore.selectedTourDates[0]).getTime() / (3600000 * 24) > 0)
// const actSlide = ref(re < 5 ? 0 : re - 5)

const actSlide = ref(Math.round(toursStore.priceList.length / 2 - 5));

const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const dateForPrices = (pDate) => {
  const date = new Date(pDate);
  return `${date.getDate()}, ${week[date.getDay()]}.`;
};
</script>
 
 <style>
#price-list .carousel .carousel__prev,
#price-list .carousel .carousel__next {
  @apply top-26px border border-solid m-0;
}
</style>