<template>
  <BlocksSideModal>
    <div id="hotel-info">
      <div class="md:px-20px">
        <div class="flex items-center gap-10px mb-30px mt-40px">
          <BlocksRatingCard v-if="+tour.imagesSlide.HotelCategoryName[0]">
            {{ tour.imagesSlide.HotelCategoryName[0] }}
          </BlocksRatingCard>
          <h2 class="h-2 text-24px">{{ tour.imagesSlide.Name }}</h2>
        </div>
        <a
          target="_blank"
          :href="`https://online.mosgortur.ru/basket#/Basket?departureCities=${tour.CityDepature.Key}&destination=1_${tour.CountryId}&tour=${tour.Key}&date=${dateForBasket}&duration=${tour.Duration}&hotelScheme=${tour.MinCostServicesComposition[0].Key.TemplateId}_${hotel.DurationInNight}_${hotel.Hotel.Key}_${hotel.PacketId}_${hotel.HotelDetails[0].PartnerId}_0_${tour.Duration}&adultCount=${hotel.HotelDetails[0].AccomodationType.AdultCount}&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=${tour.MinCostServicesComposition[0].Key.TemplateId}_${tour.MinCostServicesComposition[0].Key.SettingId}_${tour.MinCostServicesComposition[0].Key.PatternId}_${hotel.SvKey}_${tour.MinCostServicesComposition[0].Value.Code}_${hotel.HotelDetails[0].HotelRoom}_${hotel.HotelDetails[0].Pansion.Key}_${hotel.Country.Key}_${hotel.City.Key}_${hotel.PacketId}_${hotel.HotelDetails[0].PartnerId}_${hotel.Day}_${hotel.DurationInNight}&currency=RUB`"
        >
          <BlocksPrice filling class="w-max">
            от {{ priceFormatter(tour.Cost) }} руб.
          </BlocksPrice>
        </a>
        <div class="flex text-13px leading-5 mt-15px mb-30px flex-col gap-10px">
          <blocks-blue-button
            class="flex gap-6px"
            :title="tour.imagesSlide.City"
          >
            <img src="@/assets/images/icons/geo-tag.svg" alt="" />
            <span>{{ tour.imagesSlide.City }}</span>
          </blocks-blue-button>
          <span
            v-if="
              tour.imagesSlide.CheckoutTimeFrom &&
              tour.imagesSlide.CheckoutTimeTo
            "
          >
            заезд в {{ tour.imagesSlide.CheckoutTimeFrom }}, выезд до
            {{ tour.imagesSlide.CheckoutTimeTo }}.
          </span>
        </div>
        <ul
          class="flex md:flex-wrap overflow-y-auto scroll-style lg:gap-20px gap-10px"
        >
          <li
            @click="actMenu = l[0]"
            v-for="l in [['Фото'], ...menu]"
            class="cursor-pointer border-regular-0 whitespace-nowrap"
            :class="{ 'text-regular-0 border-b-2': l[0] == actMenu }"
            :key="l[0]"
          >
            {{ l[0] }}
          </li>
        </ul>
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
            <Slide v-for="slide in tour.imagesSlide.Images" :key="slide">
              <img
                :src="getCampImg(hotel.Hotel.Key, slide.Name, 'big')"
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
            id="thumbnails"
            :items-to-show="isMobile() ? 3 : 5"
            :wrap-around="false"
            snapAlign="start"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide
              v-for="(slide, i) in tour.imagesSlide.Images"
              :key="slide"
              class="px-5px"
            >
              <img
                :src="getCampImg(hotel.Hotel.Key, slide.Name)"
                loading="lazy"
                alt=""
                class="object-cover w-full lg:h-100px rounded-[10px]"
                @click="currentSlide = i"
              />
            </Slide>
          </Carousel>
        </div>
        <div
          class="flex flex-wrap lg:gap-20px gap-15px"
          v-if="hotel.HotelTypes.length"
        >
          <div
            :title="hType.Value"
            v-for="hType in hotel.HotelTypes"
            :key="hType.Key"
            class="flex gap-5px items-center"
          >
            <img
              class="w-18px h-16px"
              :src="getFeatureIcon(hType.Key)"
              alt=""
            />
            <span>{{ hType.Value }}</span>
          </div>
        </div>
        <div
          class="hotel-info__block"
          v-for="(el, i) in menu"
          :key="el[0]"
          :ref="
            (el) => {
              divs[i + 1] = el;
            }
          "
        >
          <div class="mb-10px text-lg font-semibold">{{ el[0] }}</div>
          <div class="text-14px text-rarely-3 leading-4" v-html="el[1]" />
        </div>
        <div>
          <yandex-map
            height="400px"
            :settings="{ location: { center: coord, zoom: 13 } }"
          >
            <yandex-map-default-scheme-layer />
            <yandex-map-default-features-layer />
            <yandex-map-marker :settings="{ coordinates: coord }">
              <img
                src="@/assets/images/icons/map-marker-icon.png"
                alt=""
                class="min-w-40px block relative"
              />
            </yandex-map-marker>
          </yandex-map>
        </div>
      </div>
    </div>
  </BlocksSideModal>
</template>
<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
} from "vue-yandex-maps";

const props = defineProps({
  tour: Object,
  dateForBasket: String,
});

const actMenu = ref("Фото");
const currentSlide = ref(0);
const hotel = props.tour.Services.find((el) => el.Hotel);
const divs = ref([]);
const coord = ref([
  props.tour.imagesSlide.Longitude.slice(0, -1),
  props.tour.imagesSlide.Latitude.slice(0, -1),
]);

const menu = computed(() =>
  [
    ["Описание", props.tour.imagesSlide.Description],
    ["Лечение", props.tour.imagesSlide.Healing],
    ["Для детей", props.tour.imagesSlide.ForChildren],
    ["Инфраструктура отеля", props.tour.imagesSlide.InfrastructureHotel],
    ["Развлечение и спорт", props.tour.imagesSlide.RecreationSport],
    ["Экскурсии", props.tour.imagesSlide.Excursion],
    ["Контакты", props.tour.imagesSlide.Address],
  ].filter((el) => el[1])
);

watchEffect(() =>
  ((v) => {
    if (divs.value.length)
      divs.value[menu.value.findIndex((el) => el[0] == v) + 1].scrollIntoView({
        behavior: "smooth",
      });
  })(actMenu.value)
);
</script>
<style>
#hotel-info {
  @apply flex flex-col h-full font-ptsans;
}
#hotel-info .swiper-button-prev:after,
#hotel-info .swiper-rtl .swiper-button-next:after,
#hotel-info .swiper-button-next:after,
#hotel-info .swiper-button-prev:after {
  @apply content-[none];
}

#hotel-info .swiper-button-prev,
#hotel-info .swiper-button-next {
  @apply w-30px h-30px text-rarely-3 top-[unset];
}

#hotel-info .swiper-initialized.swiper-horizontal {
  @apply flex justify-center w-full;
}

#hotel-info .swiper-pagination-fraction {
  @apply w-auto left-auto bg-base-0/50 py-2px px-9px rounded-[4px] text-13px font-medium;
}

#hotel-info .hotel-info__block ul {
  @apply list-disc mt-5px mb-10px pl-20px;
}

#hotel-info .hotel-info__block p {
  @apply mt-10px mb-5px;
}

#hotel-info #thumbnails .carousel__slide img {
  @apply h-80px;
}
</style>