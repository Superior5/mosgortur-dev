<template>
  <div id="new-search-filed">
    <div v-if="!toursStore.errorTech" :id="'search-form'" :class="{'tours-low-cost': route.name == 'tours-low-cost'}">
      <div v-for="(input, k) in inputs" :key="k" class="w-full">
        <label class="text-14px font-medium">{{ input.label }}</label>
        <component @open="openComp(k)" @close="show = ''" :show="show == k" :is="input.comp"
          :class="{ 'border-none !p-0px !mt-10px': input.label == 'Дети', 'px-0': (show == k && input.label != 'Дата начала отдыха' && input.label != 'Количество ночей')}"
          class="mt-7px relative border-1 px-19px py-7px rounded-[5px]" />
      </div>
      <DayStay class="grid-area-1"
        v-if="route.name == 'kids' && toursStore.actualizeTourType.some(el => el.Key == 388)" />
      <!-- <RailwayTypeTour class="grid-area-2" v-if="route.name == 'kids' && toursStore.actualizeTourType.some(el => el.Key ==393)" /> -->
    </div>
    <div class="search-btns md:(w-auto flex-row) flex-col w-full" :class="{'!static': route.name == 'tours-low-cost'}">
      <div
        class="text-regular-1 cursor-pointer w-full md:(w-auto h-47px flex items-center) whitespace-nowrap text-center"
        @click="clearForm" v-if="showClearBtn">Очистить все</div>
      <div class="flex gap-5px md:(w-auto flex-row) items-center   flex-row-reverse w-full">
        <div v-if="toursStore.tours.length" @click="
          interfaceStore.switchShowFilters = !interfaceStore.switchShowFilters
          " class="filter-switch-btn">
          <img class="p-10px" src="@/assets/images/icons/filters.svg" alt="" />
        </div>
        <BlocksButton @click="search(true)" class="search-btn h-44px !hover:text-white md:w-172px w-full uppercase">
          найти
        </BlocksButton>
      </div>
    </div>
  </div>
  <BlocksDarkBackground @close="show = ''" :show="show && show != 'tourDates'" />
  <ValidErrModal :show="!!errorShow" :field="errorShow" @close="errorShow = ''" />
  <NoToursModal :show="toursStore.noToursModal" @close="toursStore.noToursModal = false" />
</template>
<script setup>
import ValidErrModal from "./valid-err-modal.vue";
import NoToursModal from "./no-tours-modal.vue";
import DayStay from "./day-stay.vue";
import RailwayTypeTour from "./railway-type-tour.vue";
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const route = useRoute();
const Destination = resolveComponent("PagesNewMainSearchFormDestination");
const From = resolveComponent("PagesNewMainSearchFormFrom");
const TourType = resolveComponent("PagesNewMainSearchFormTourType");
const Calendar = resolveComponent("PagesNewMainSearchFormCalendar");
const ChooseChildYear = resolveComponent("PagesNewMainSearchFormChooseChildYear");
const DurationFromTo = resolveComponent("PagesNewMainSearchFormDurationFromTo");
const CalendarSpecialOffer = resolveComponent(
  "PagesNewMainSearchFormCalendarSpecialOffer"
);
const Seasons = resolveComponent("PagesNewMainSearchFormSeasons");
const KidsAge = resolveComponent("PagesNewMainSearchFormKidsAge");
const QuantityTourists = resolveComponent(
  "PagesNewMainSearchFormQuantityTourists"
);
const QuantityKids = resolveComponent(
  "PagesNewMainSearchFormQuantityKids"
);
const QuantityTouristsLowCost = resolveComponent(
  "PagesNewMainSearchFormQuantityTouristsLowCost"
);

const errorShow = ref("");
const show = ref("");
const inputs = {
  ...(route.name == "tours" && {
    destination: {
      label: "Направление",
      comp: Destination,
    },
    tourType: {
      label: "Тип тура",
      comp: TourType,
    },
    quantityTourist: {
      label: "Сколько отдыхающих",
      comp: QuantityTourists,
    },
    tourDates: {
      label: "Дата",
      comp: Calendar,
    },
  }),
  ...(route.name == "kids" && {
    destination: {
      label: "Направление",
      comp: Destination,
    },
    tourType: {
      label: "Лагерь",
      comp: TourType,
    },
    seasons: {
      label: "Смена (сезон)",
      comp: Seasons,
    },
    kidsAge: {
      label: "Возраст",
      comp: KidsAge,
    },
    quantityKids: {
      label: "Дети",
      comp: QuantityKids,
    },
  }),
  ...(route.name == "tours-low-cost" && {
    from: {
      label: "Откуда",
      comp: From,
    },
    destination: {
      label: "Куда",
      comp: Destination,
    },
    tourDates: {
      label: "Дата начала отдыха",
      comp: CalendarSpecialOffer,
    },
    durationFrom: {
      label: "Количество ночей",
      comp: DurationFromTo,
    },
    quantityTourist: {
      label: "Туристы",
      comp: QuantityTourists,
    },
  }),
};

const checkQuery = (a, b, c) => {
  const dck = route.query[c];
  toursStore[b] = dck
    ? toursStore[a].filter((el) =>
      (typeof dck == "string" ? [dck] : dck).includes(el.Key + "")
    )
    : [toursStore[a][0]];
};

const checkKidsAge = () => {
  const dck = route.query?.ChildAgesForCamp;

  if (dck) {
    if (Array.isArray(dck)) {
      toursStore.kidsAge = dck[0]
      toursStore.ageCategory.key = dck
    } else {
      toursStore.kidsAge = dck
    }
  }
};

checkQuery("departureCities", "selectedDepartureCities", "DepartureCityKeys");
checkKidsAge();

const openComp = (i) => {
  if (i == "kidsAge") return (show.value = i);
  if (i == "childYear") return (show.value = i);
  if (i == "from") return (show.value = i);
  if (!toursStore.selectedDepartureCities.length)
    return (errorShow.value = "Kуда");
  if (i == "destination") return (show.value = i);
  if (!toursStore.selectedActualizeCities.length)
    return (errorShow.value = "Kуда");
  if (i == "tourType") return (show.value = i);
  if (!toursStore.selectedActualizeTourType.length)
    return (errorShow.value = "Тип тура");
  if (i == "tourDates" || i == 'seasons') return (show.value = i);
  if (!toursStore.selectedTourDates.length)
    return (errorShow.value = route.name == "kids" ? "Смена" : "Дата");
  if (route.name == "tours-low-cost") {
    if (i == "durationFrom") return (show.value = i);
    if (toursStore.selectedDuration.length != 2)
      return (errorShow.value = "Продолжительность");
  }
  if (
    !(
      toursStore.quantityTourists[0].quantity ||
      toursStore.quantityTourists[1].quantity
    )
  )
    return (errorShow.value = "Туристы");
  if (i == "Поиск") return false;
  show.value = i;
};

const search = async (clear) => {
  const searchType = route.name == "tours-low-cost" ? 'search' : 'search-dol'
  try {
    ym(90662828, 'reachGoal', searchType)
  } catch (error) {
    console.log(error);
  }

  if (openComp("Поиск")) return;

  
  interfaceStore.loadData = true;
  console.log(interfaceStore.loadData);

  toursStore.pageNumber = 1;
  toursStore.datesListPrice = "";
  toursStore.priceList = [];
  toursStore.tours = [];
  interfaceStore.showPriceList = false;
  if (clear) toursStore.clearFilters();
  await toursStore.getSearchTour({ search: true });
  await toursStore.getMinMaxPrices();
  await toursStore.getHotelImages();
  interfaceStore.loadData = false;
  console.log(interfaceStore.loadData);

};

const clearForm = () => {
  toursStore.selectedDestination = [toursStore.destination[0]]
  toursStore.selectedActualizeCities = [toursStore.actualizeCities[0]]
  toursStore.selectedActualizeTourType = [toursStore.actualizeTourType[0]]
  toursStore.selectedDuration = []
  toursStore.selectedTourDates = []
  toursStore.selectedMonths = []
  toursStore.kidsAge = 'Любой'

};

const showClearBtn = computed(() => {
  return (
    toursStore.selectedDestination.length &&
    toursStore.selectedActualizeCities.length &&
    toursStore.selectedActualizeTourType.length &&
    toursStore.selectedTourDates.length
  );
})

interfaceStore.loadData = true;
await toursStore.getDepartureCities();
checkQuery("departureCities", "selectedDepartureCities", "DepartureCityKeys");
await toursStore.getDestination();
checkQuery("destination", "selectedDestination", "DestinationKey");
await toursStore.getActualizeCities();
checkQuery("actualizeCities", "selectedActualizeCities", "CityIds");
await toursStore.getActualizeTourType();
checkQuery("actualizeTourType", "selectedActualizeTourType", "TourType");
await toursStore.getTourDate();
if (route.query.AdultCount)
  toursStore.quantityTourists[0].quantity = route.query.AdultCount;
if (route.query.ChildAges) {
  toursStore.quantityTourists[1].quantity = route.query.ChildAges.length;
  toursStore.quantityTourists[1].edges = route.query.ChildAges;
}
if (route.query.Durations) {
  toursStore.duration = route.query.Durations;
  toursStore.selectedDuration = [
    route.query.Durations[0],
    route.query.Durations.at(-1),
  ];
}
if (route.query.Dates) {
  let dates = route.query.Dates
  if (!Array.isArray(dates)) dates = [dates]
  toursStore.selectedTourDates = dates.map((el) => {
    let [day, month, year] = el.split(".");
    return new Date(+year, +month - 1, +day);
  });
}

interfaceStore.loadData = false;

let filterParams = "";
for (const key in toursStore.filters) {
  if (route.query[key]) {
    toursStore.selectedFilters[key] = Array.isArray(route.query[key])
      ? route.query[key].map((st) => +st)
      : [+route.query[key]];
    filterParams += createParams([
      toursStore.selectedFilters[key],
      key,
      (el) => el,
    ]);
    if (key == "HotelCity")
      filterParams += createParams([
        toursStore.selectedFilters[key],
        "CityIds",
        (el) => el,
      ]);
  }
}

if (route.query.MinPrice && route.query.MaxPrice) {
  toursStore.rangeValue[0] = +route.query.MinPrice;
  toursStore.rangeValue[1] = +route.query.MaxPrice;

  filterParams +=
    new URLSearchParams({
      MinPrice: toursStore.rangeValue[0],
      MaxPrice: toursStore.rangeValue[1],
    }) + "&";
}

if (filterParams) toursStore.filtersUrl = filterParams;

if (route.query.Dates && route.query.Durations) {
  if (route.name == "tours") {
    const dateFormat = new Date(
      route.query.Dates.replace(/([0-9]+)\.([0-9]+)\.([0-9]+)?/g, "$3-$2-$1")
    );
    const date = new Date(dateFormat.valueOf());
    date.setDate(date.getDate() + (+route.query.Durations - 1));
    toursStore.selectedTourDates = [dateFormat, date];
  } else if (route.name == "kids") {
    toursStore.selectedMonths = Array.isArray(route.query.Season) ? route.query.Season : [route.query.Season];
    if (route.query.ChildYear) toursStore.selectedChildYear = +route.query.ChildYear
    if (Array.isArray(route.query.Dates))
      toursStore.selectedTourDates = route.query.Dates;
    else toursStore.selectedTourDates = [route.query.Dates];
    toursStore.duration = route.query.Durations;
  }

  search();
}
</script>
<style>


#new-search-filed {
  @apply flex xl: !flex-row flex-col items-end justify-between relative !px-0px gap-40px pt-0 !border-none;
}

#search-form {
  @apply grid md:(gap-y-32px) gap-y-20px gap-x-25px justify-between w-full xl:(max-w-none grid-cols-5) lg:grid-cols-4 max-w-1000px md:grid-cols-3 grid-cols-1 items-center;
}




#search-form .input-value-new {
  @apply flex gap-5px cursor-pointer items-center rounded-[6px] h-44px py-8px pr-30px relative;
}

#search-form .input-value-new span {
  @apply whitespace-nowrap overflow-hidden text-ellipsis bg-regular-3 max-w-100px py-3px px-8px;
}

.search-btn {
  background: conic-gradient(from -3deg at 100% -13%, #FC0 0.05824981606565416deg, #F60 360deg);
}

#new-search-filed .filter-switch-btn {
  @apply lg:(w-44px h-full) w-40px cursor-pointer h-40px flex justify-center items-center bg-rarely-0/20 rounded-[10px];
}

#new-search-filed .search-btns {
  @apply flex items-center xl:static lg:(absolute h-47px gap-25px) gap-15px md:h-40px static bottom-0 right-25px xl:gap-20px;
}

#new-search-filed .grid-area-1 {
  grid-area: 3;
}

#new-search-filed .grid-area-2 {
  grid-area: 4;
}

@media (min-width: 768px) {
  #new-search-filed .grid-area-1 {
    grid-area: 1/3;
  }

  #new-search-filed .grid-area-2 {
    grid-area: 1/4;
  }
}
</style>
