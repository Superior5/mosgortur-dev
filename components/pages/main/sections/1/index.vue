<template>
  <section id="section-1" class="md:mt-35px mt-0">
    <!-- <PagesMainHowToUseSearchModuleKids
      class="transition-all duration-700 overflow-hidden"
      :class="
        interfaceStore.showModuleInstructionKids
          ? 'max-h-10000px py-25px'
          : 'max-h-0'
      "
    />
    <PagesMainHowToUseSearchModule
      class="transition-all duration-700 overflow-hidden"
      :class="
        interfaceStore.showModuleInstruction
          ? 'max-h-10000px py-25px'
          : 'max-h-0'
      "
    /> -->
    <div class="container <md:px-0">
      <div
        class="pb-25px font-notosans text-sm md:shadow-1 shadow-none rounded-[10px]"
      >
        <div class="menu <lg:overflow-x-auto pt-25px">
          <template v-for="el in menu" :key="el.tab">
            <nuxt-link
              v-if="el.tab"
              class="menu__link"
              :to="el.link"
              @click="tabClick(el)"
            >
              <component :is="el.icon" />{{ el.title }}
              <v-tooltip
                :text="tooltipText"
                max-width="230px"
                v-if="el.link === '/tours-low-cost' && !isLarge()"
              >
                <template v-slot:activator="{ props }">
                  <img
                    v-bind="props"
                    src="@/assets/images/icons/tours-low-cost-popper.svg"
                    alt=""
                  />
                </template>
              </v-tooltip>
            </nuxt-link>
          </template>
        </div>
        <div class="border-t-3 border-rarely-2">
          <TourIframe v-if="route.name == 'tours'" />
          <HotelIframe v-if="route.name == 'hotels'" />
          <PagesMainSearchForm
            v-if="route.name === 'kids' || route.name === 'tours-low-cost'"
          />
        </div>
      </div>
      <PagesMainFieldResult
        v-if="
          toursStore.tours.length &&
          (route.name === 'kids' || route.name === 'tours-low-cost') &&
          !toursStore.noTours
        "
        class="md:(mt-44px px-0) mt-10px px-20px"
      />
      <div v-else-if="toursStore.noTours" class="p-20px text-center text-20px">
        <template v-if="route.name === 'kids'">
          С выбранными параметрами поиска предложений по лагерям не найдено.
          <br />
          Пожалуйста, измените параметры поиска, выберите другой сезон/смену и
          повторите поиск.
        </template>
        <template v-if="route.name === 'tours-low-cost'">
          С выбранными параметрами поиска предложений не найдено. Пожалуйста,
          измените параметры и повторите поиск.
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import TourIframe from "./tour-iframe.vue";
import HotelIframe from "./hotel-iframe.vue";
const route = useRoute();
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const iHotels = resolveComponent("IconsHotels");
const iKids = resolveComponent("IconsKids");
const iTours = resolveComponent("IconsTours");
const iToursLowCost = resolveComponent("IconsToursLowCost");
const iExcursion = resolveComponent("IconsExcursion");

const menu = [
  { tab: "tours", title: "Туры", icon: iTours, link: "/tours" },
  { tab: "hotels", title: "Отели", icon: iHotels, link: "/hotels" },
  { tab: "kids", title: "Детские лагеря", icon: iKids, link: "/kids" },
  {
    tab: "toursLowCost",
    title: "Спецпредложения",
    icon: iToursLowCost,
    link: "/tours-low-cost",
  },
  {
    tab: "excursion",
    title: "Экскурсии",
    icon: iExcursion,
    link: "https://online.mosgortur.ru/excursion/",
  },
];

const checkTab = (tab) => {
  if (tab === "excursion") {
    return true;
  }
  return interfaceStore.tabs.find((el2) => el2.tab == tab).status;
};

const tabClick = (el) => {
  if (el.tab === "excursion") {
    try {
      ym(90662828, "reachGoal", "Excursion");
    } catch (err) {
      console.log(err);
    }
  }
};

const getMinMaxAge = (hotelInfo) => {
  return {
    min: Math.round(
      hotelInfo.HotelDetails[0].AccomodationType.Value.split(" ")[2]
        .slice(1, -1)
        .split("-")[0]
        .replace(",", ".")
    ),
    max: Math.round(
      hotelInfo.HotelDetails[0].AccomodationType.Value.split(" ")[2]
        .slice(1, -1)
        .split("-")[1]
        .replace(",", ".")
    ),
  };
};
// const checkAge = () => {
//   // Math.round(toursStore.tours.hotel.HotelDetails[0].AccomodationType.Value.split(' ')[2].slice(1, -1).split('-')[1].replace(',','.'))

//   toursStore.tours = toursStore.tours.filter(el => {
//   const hotelInfo = getTourHotel(el)
//   const {min, max} = getMinMaxAge(hotelInfo)
//   if(min <= 8 && max >= 8) {
//     return el;
//   }
//  })
// }

onMounted(() => {
  if (process.client) {
    document.querySelector(".menu__link.router-link-active").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }
});

onBeforeRouteLeave(() => {
  toursStore.noTours = false;
});

const tooltipText =
  "В этой вкладке, размещены предложения с фиксированной стоимостью тура, для двоих человек.";
</script>
<style>
#section-1 .menu {
  @apply flex gap-40px items-stretch px-25px relative z-1 -bottom-3px justify-between pt-25px relative;
}

#section-1 .menu::after {
  @apply lg:content-[''] absolute bottom-0 left-0 w-full h-[calc(100%+3px)] bg-rarely-4 -z-1;
}

#section-1 .menu .menu__link {
  @apply flex gap-12px border-b-3 border-rarely-2 cursor-pointer items-center relative pb-18px whitespace-nowrap;
}

#section-1 .menu .menu__link.router-link-active {
  @apply text-regular-0 border-regular-0;
}
</style>