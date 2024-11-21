<template>
  <div id="field-search">
    <transition name="fade">
      <HotelInfoSideModal
        v-if="showHotelInfo"
        :show="!!showHotelInfo"
        @close="showHotelInfo = false"
        :tour="showHotelInfo"
        :dateForBasket="dateForBasket(showHotelInfo)"
      />
    </transition>
    <transition name="fade">
      <TourInfoSideModal
        v-if="showTourInfo"
        :show="!!showTourInfo"
        @close="showTourInfo = false"
        :tour="showTourInfo"
        :dateForBasket="dateForBasket(showTourInfo)"
      />
    </transition>
    <div class="flex justify-center md:mt-0 mt-20px mb-15px">
      <button class="p-14px bg-rarely-4  flex items-center gap-10px rounded-10px" @click="copyLink">
        {{ textCopyBlock }}
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 0.5H7C6.73478 0.5 6.48043 0.605357 6.29289 0.792893C6.10536 0.98043 6 1.23478 6 1.5V6.5H1C0.734784 6.5 0.48043 6.60536 0.292893 6.79289C0.105357 6.98043 0 7.23478 0 7.5V23.5C0 23.7652 0.105357 24.0196 0.292893 24.2071C0.48043 24.3946 0.734784 24.5 1 24.5H17C17.2652 24.5 17.5196 24.3946 17.7071 24.2071C17.8946 24.0196 18 23.7652 18 23.5V18.5H23C23.2652 18.5 23.5196 18.3946 23.7071 18.2071C23.8946 18.0196 24 17.7652 24 17.5V1.5C24 1.23478 23.8946 0.98043 23.7071 0.792893C23.5196 0.605357 23.2652 0.5 23 0.5ZM16 22.5H2V8.5H16V22.5ZM22 16.5H18V7.5C18 7.23478 17.8946 6.98043 17.7071 6.79289C17.5196 6.60536 17.2652 6.5 17 6.5H8V2.5H22V16.5Z"
            fill="black" />
        </svg>
      </button>
    </div>
    <PagesMainFiltersHeader />
    <div class="flex gap-24px">
      <BlocksDarkBackground
        @close="interfaceStore.switchShowFilters = false"
        :show="interfaceStore.switchShowFilters && isLarge()"
      />
      <PagesMainFilters
        v-if="interfaceStore.switchShowFilters"
        class="lg:(static w-1/4 max-w-300px max-h-none !overflow-visible z-10) max-h-[calc(100dvh-50px)] overflow-auto z-33 bottom-0 left-0 fixed w-full"
      />
      <div
        class="w-full flex md:mt-50px mt-30px flex-col gap-24px"
        :class="{ 'lg:w-[calc(75%-24px)]': interfaceStore.switchShowFilters }"
      >
        <BlocksListCard
          v-for="(tour, i) in toursStore.tours"
          :tour="tour"
          :key="'' + i + tour.Key"
          :hotel="getTourHotel(tour)"
          :visible-costs="visiblePrice == '' + i + tour.Key"
          @switchVisiblePrices="switchVisiblePrices(tour, i)"
          :dateForBasket="dateForBasket(tour)"
          @showTourInfo="
            () => {
              showTourInfo = tour;
              router.push({
                path: route.path,
                query: {
                  showTourInfo: true,
                  ...route.query,
                },
              });
              addViewProduct(tour, i);
            }
          "
          @showHotelInfo="
            () => {
              showHotelInfo = tour;
              router.push({
                path: route.path,
                query: {
                  showHotelInfo: true,
                  ...route.query,
                },
              });
              addViewProduct(tour, i);
            }
          "
        />
        <!-- <Pagination @nextPage="nextPage" v-if="pages > 1" :act-page="toursStore.pageNumber" :pages="pages" class="mt-46px" /> -->
        <Pagination
          @nextPage="nextPage"
          v-if="
            toursStore.searchFullResult?.Result.length == toursStore.pageSize
          "
          :act-page="toursStore.pageNumber"
          :pages="pages"
          class="mt-46px"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Pagination from "./pagination.vue";
import HotelInfoSideModal from "./hotel-info-side-modal.vue";
import TourInfoSideModal from "./tour-info-side-modal.vue";
const router = useRouter();
const route = useRoute();
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const visiblePrice = ref("");
// const pages = computed(() =>
//   Math.ceil(toursStore.mapTours.length / +toursStore.pageSize)
// );
// const nextPage = async (page) => {
//   if (page < 1 || page > pages.value || page == toursStore.pageNumber) return;
//   interfaceStore.loadData = true;
//   toursStore.pageNumber = page;
//   await toursStore.getSearchTour({ nextTours: true });
//   await toursStore.getHotelImages();
//   interfaceStore.loadData = false;
// };

const addViewProduct = (tour, i) => {
  if (process.client)
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "RUB",
        detail: {
          products: [
            {
              id: tour.Key,
              name: tour.Name,
              price: tour.Cost,
              brand: tour.Services.find((el) => el.Hotel).Hotel.Value,
              category: tour.Types.includes(11) ? "лагеря" : "спец предложения",
              position: i + 1,
            },
          ],
        },
      },
    });
};

const nextPage = async (page) => {
  if (page < 1 || page == toursStore.pageNumber) return;
  interfaceStore.loadData = true;
  toursStore.pageNumber = page;
  await toursStore.getSearchTour();
  await toursStore.getHotelImages();
  interfaceStore.loadData = false;
};

const dateForBasket = (tour) => {
  const date = new Date(tour.StartDate).toLocaleDateString("en-GB");
  return (date.substring(0, 6) + date.slice(-2)).replace(/\//gi, ".");
};

const switchVisiblePrices = async (tour, i) => {
  const service = getTourHotel(tour);
  if (visiblePrice.value == "" + i + tour.Key) return (visiblePrice.value = "");

  const dynamicParams =
    new URLSearchParams({
      PageNumber: toursStore.pageNumber,
      PageSize: 1000,
      Durations: tour.Duration,
      HotelScheme: JSON.stringify([
        {
          TemplateId: service.Id,
          TotalTourDuration: tour.Duration,
          DurationInNight: service.DurationInNight,
          Code: service.Hotel.Key,
          PacketKey: service.PacketId,
          PartnerKey: service.HotelDetails[0].PartnerId,
          Http: service.Http,
          GDSProviderId: service.RemoteId,
        },
      ]),
      TourKey: tour.Key,
      TourDuration: tour.Duration,
      Dates: dateForBasket(tour),
    }) + tour.Types.reduce((str, el) => (str += `&TourType=${el}`), "");

  const { data } = await useMyFetch(
    "/TourSearchOwin/TourForWeb/search/simple?" +
      toursStore.inputParams.replace(
        /(TourType=-?[0-9]*&)|(Durations=[0-9]*&)|(Dates=-?[^a-z]*&)/g,
        ""
      ) +
      dynamicParams
  );
  service.HotelDetails = getTourHotel(data.Result[0]).HotelDetails;

  visiblePrice.value = "" + i + tour.Key;
};

const showHotelInfo = ref(false);
const showTourInfo = ref(false);
watch(
  () => route.query,
  () => {
    if (!route.query.showTourInfo) {
      showTourInfo.value = false;
    }
    if (!route.query.showHotelInfo) {
      showHotelInfo.value = false;
    }
  }
);
watchEffect(() =>
  ((v) => {
    useHead({
      htmlAttrs: {
        class: computed(() =>
          v && isLarge() ? "overflow-hidden lg:pr-17px" : ""
        ),
      },
    });
  })(interfaceStore.switchShowFilters)
);
const textCopyBlock = ref('Скопировать ссылку на поиск с текущими параметрами');
const copyLink = () => {
  if (process.client && navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(function () {
      textCopyBlock.value = 'Ссылка скопирована в буфер обмена'
    }, function (err) {
      textCopyBlock.value = 'Не удалось скопировать ссылку'
    }).finally(() => {
      setTimeout(() => {
        textCopyBlock.value = 'Скопировать ссылку на поиск с текущими параметрами';
      }, 3000);
    })
  }
};
</script>