<template>
  <div id="hotel-card" class="lg:w-295px w-216px flex flex-col justify-between">
    <div class="flex font-bold md:flex-row lg:gap-15px mb-21px gap-10px items-start">
      <!-- <BlocksRatingCard v-if="+hotel.Stars.Value[0]">{{ hotel.Stars.Value[0] }}</BlocksRatingCard> -->
      <h6 class="text-18px font-mulish" :title="hotel.title">
        {{ hotel.title }}
      </h6>
    </div>
    <nuxt-link target="_blank" :to="hotel.link" class="flex mb-20px overflow-hidden rounded-[10px] bg-cover lg:(h-245px w-full) w-216px h-172px"
      :style="{ backgroundImage: `url(/best_hotels/${hotel.image}.jpg)` }">
    </nuxt-link>
    <!-- <div class="font-bold mt-17px font-ptsans">
      от {{ priceFormatter(tour.price) }} руб.
    </div> -->
  </div>
</template>
<script setup>
const interfaceStore = useInterfaceStore();
const adminStore = useAdminStore();
const props = defineProps({
  hotel: Object,
});

// const hotel = getTourHotel(props.tour)
// const tourImgs = ref(
//    Array(props.tour.firstImg.ImagesCount).fill(props.tour.firstImg)
// );

// const getImgs = async () => {
//    if (!props.tour.imagesSlide) {
//       await interfaceStore.getImagesOnTours(props.tour);
//       tourImgs.value = props.tour.imagesSlide.Images;
//    }
// };
</script>
