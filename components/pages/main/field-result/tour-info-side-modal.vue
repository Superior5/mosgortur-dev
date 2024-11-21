<template>
  <BlocksSideModal>
    <div id="session-info">
      <div class="md:px-20px">
        <div class="flex mb-30px mt-40px">
          <h2 class="h-2 text-24px">{{ tour.Name }}</h2>
        </div>
      </div>
      <div
        class="mt-10px overflow-y-auto lg:(pl-20px pb-30px) scroll-style md:px-15px pr-15px flex flex-col gap-30px"
      >
        <div class="relative" :ref="(el) => (divs[0] = el)">
          <Carousel
            id="gallery"
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
            class="mb-10px buttons"
          >
            <Slide v-for="Img in tour.firstTourImg" :key="Img.Name">
              <img
                :src="getTourImg(tour.Key, Img.Name, 'big')"
                loading="lazy"
                alt=""
                class="object-cover w-full lg:h-420px h-250px rounded-[10px]"
              />
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>

          <Carousel
            v-if="tour.firstTourImg.length > 1"
            id="thumbnails"
            :items-to-show="isMobile() ? 3 : 5"
            :wrap-around="false"
            snapAlign="start"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide
              v-for="Img in tour.firstTourImg"
              :key="Img.Name"
              class="px-5px"
            >
              <img
                :src="getTourImg(tour.Key, Img.Name)"
                loading="lazy"
                alt=""
                class="object-cover w-full lg:h-100px rounded-[10px]"
                @click="currentSlide = i"
              />
            </Slide>
          </Carousel>
        </div>
        <div class="session-info-block" v-html="tour.BookingConditions"></div>
      </div>
    </div>
  </BlocksSideModal>
</template>
<script setup>
const props = defineProps({
  tour: Object,
  dateForBasket: String,
});

const currentSlide = ref(0);
const hotel = props.tour.Services.find((el) => el.Hotel);
const divs = ref([]);
</script>
<style>
#session-info {
  @apply flex flex-col h-full font-ptsans;
}
#session-info .session-info-block p {
  @apply text-14px mb-2px text-rarely-3;
}

#session-info .session-info-block p strong {
  @apply text-16px text-black;
}

#session-info .session-info-block p {
  @apply text-14px mb-2px leading-4;
}

#session-info .session-info-block ul {
  @apply list-disc text-14px mt-5px mb-10px pl-20px;
}

#session-info .swiper-button-prev:after,
#session-info .swiper-rtl .swiper-button-next:after,
#session-info .swiper-button-next:after,
#session-info .swiper-button-prev:after {
  @apply content-[none];
}

#session-info .swiper-button-prev,
#session-info .swiper-button-next {
  @apply w-30px h-30px text-rarely-3 top-[unset];
}

#session-info .swiper-initialized.swiper-horizontal {
  @apply flex justify-center w-full;
}

#session-info .swiper-pagination-fraction {
  @apply w-auto left-auto bg-base-0/50 py-2px px-9px rounded-[4px] text-13px font-medium;
}

#session-info .hotel-info__block ul {
  @apply list-disc mt-5px mb-10px pl-20px;
}

#session-info .session-info-block p {
  @apply mt-10px mb-5px;
}
#session-info #thumbnails .carousel__slide img {
  @apply h-80px;
}
</style>