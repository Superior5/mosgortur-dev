<template>
  <div id="search-filed">
    <div v-if="!toursStore.errorTech" id="search-form">
      <div v-for="(input, k) in inputs" :key="k" class="w-full">
        <label class="text-rarely-1">{{ input.label }}</label>
        <component @open="openComp(k)" @close="show = ''" :show="show == k" :is="input.comp" class="mt-7px relative" />
      </div>
      <div v-if="route.name == 'kids' && toursStore.actualizeTourType.some(el => el.Key == 376)" class="w-full">
        <label class="lg:block hidden"> &nbsp; </label>
        <DayStay class="mt-7px" />
      </div>
    </div>
    <div class="search-btns md:(w-auto flex-row) flex-col w-full">
      <div
        class="text-regular-1 cursor-pointer w-full md:(w-auto h-47px flex items-center) whitespace-nowrap text-center"
        @click="clearForm" v-if="showClearBtn">Очистить все</div>
      <div class="flex gap-5px md:(w-auto flex-row) items-center   flex-row-reverse w-full">
        <div v-if="toursStore.tours.length" @click="
          interfaceStore.switchShowFilters = !interfaceStore.switchShowFilters
          " class="filter-switch-btn">
          <img class="p-10px" src="@/assets/images/icons/filters.svg" alt="" />
        </div>
        <BlocksButton @click="search(true)" class="h-44px md:w-172px w-full uppercase">
          найти
        </BlocksButton>
      </div>
    </div>
  </div>
  <BlocksDarkBackground @close="show = ''" :show="show && show != 'Когда'" />
  <ValidErrModal :show="!!errorShow" :field="errorShow" @close="errorShow = ''" />
  <NoToursModal :show="toursStore.noToursModal" @close="toursStore.noToursModal = false" />
</template>
<script setup>
import ValidErrModal from "./valid-err-modal.vue";
import NoToursModal from "./no-tours-modal.vue";
import DayStay from "./day-stay.vue";
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const route = useRoute();
const Destination = resolveComponent("PagesMainSearchFormDestination");
const DurationFromTo = resolveComponent("PagesMainSearchFormDurationFromTo");
const From = resolveComponent("PagesMainSearchFormFrom");
const TourType = resolveComponent("PagesMainSearchFormTourType");
const CalendarSpecialOffer = resolveComponent(
  "PagesMainSearchFormCalendarSpecialOffer"
);
const Seasons = resolveComponent("PagesMainSearchFormSeasons");
const QuantityTourists = resolveComponent(
  "PagesMainSearchFormQuantityTourists"
);
const QuantityKids = resolveComponent(
  "PagesMainSearchFormQuantityKids"
);
const KidsAge = resolveComponent(
  "PagesMainSearchFormKidsAge"
);
const errorShow = ref("");
const show = ref("");
const inputs = {
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
    quantityKids: {
      label: "Количество детей",
      comp: QuantityKids,
    },
    kidsAge: {
      label: "Возраст",
      comp: KidsAge,
    }
  }),
  ...(route.name == "tours-low-cost" && {
    destination: {
      label: "Куда",
      comp: Destination,
    },
    tourType: {
      label: "Тип тура",
      comp: TourType,
    },
    tourDates: {
      label: "Даты начала отдыха",
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

const clearForm = async () => {
  toursStore.selectedDestination = [toursStore.destination[0]]
  toursStore.selectedActualizeCities = [toursStore.actualizeCities[0]]
  toursStore.selectedActualizeTourType = [toursStore.actualizeTourType[0]]
  toursStore.selectedDuration = []
  toursStore.selectedTourDates = []
  toursStore.selectedMonths = []
  toursStore.kidsAge = 'Любой'
  await toursStore.getTourDate();
};

const showClearBtn = computed(() => {
  return (
    toursStore.selectedDestination.length &&
    toursStore.selectedActualizeCities.length &&
    toursStore.selectedActualizeTourType.length &&
    toursStore.selectedTourDates.length
  );
})

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
checkKidsAge();

const openComp = (i) => {
  if (i == "kidsAge") return (show.value = i);
  if (i == "from") return (show.value = i);
  if (!toursStore.selectedDepartureCities.length)
    return (errorShow.value = "Kуда");
  if (i == "destination") return (show.value = i);
  if (!toursStore.selectedActualizeCities.length)
    return (errorShow.value = "Kуда");
  if (i == "tourType") return (show.value = i);
  if (!toursStore.selectedActualizeTourType.length)
    return (errorShow.value = "Лагерь");
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
};

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
if (route.query.AdultCount) {
  toursStore.quantityTourists[0].quantity = route.query.AdultCount
} else if (route.name == "tours-low-cost") {
  toursStore.quantityTourists[0].quantity = 2
}
if (route.query.ChildAges) {
  toursStore.quantityTourists[1].quantity = route.query.ChildAges.length;
  toursStore.quantityTourists[1].edges = route.query.ChildAges;
}

interfaceStore.loadData = false;

let filterParams = "";
for (const key in toursStore.filters) {
    if(key === 'Durations' && route.name !== "kids") continue

    if (route.query[key]) {
    toursStore.selectedFilters[key] = Array.isArray(route.query[key])
      ? route.query[key].map((st) => +st)
      : [+route.query[key]];
    toursStore.selectedFilters[key] = [...new Set(toursStore.selectedFilters[key])]
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
    toursStore.selectedMonths = route.query.Season;
    if (Array.isArray(route.query.Dates))
      toursStore.selectedTourDates = route.query.Dates;
    else toursStore.selectedTourDates = [route.query.Dates];
    toursStore.duration = route.query.Durations;
  } else if (route.name == "tours-low-cost") {
    if (Array.isArray(route.query.Durations)) {
      toursStore.duration = route.query.Durations
      toursStore.selectedDuration = [
        toursStore.duration[0],
        toursStore.duration.at(-1),
      ];
    } else {
      toursStore.duration = [route.query.Durations]
      toursStore.selectedDuration = [toursStore.duration[0], toursStore.duration[0]]
    }

    if (Array.isArray(route.query.Dates)) {
      toursStore.selectedTourDates = route.query.Dates.map(el => new Date(el.replace(/([0-9]+)\.([0-9]+)\.([0-9]+)?/g, "$3-$2-$1")))
    } else {
      toursStore.selectedTourDates = [new Date(route.query.Dates.replace(/([0-9]+)\.([0-9]+)\.([0-9]+)?/g, "$3-$2-$1"))]
    }
  }

  search();
}
</script>
<style>
#search-filed {
  @apply flex xl: !flex-row flex-col items-end justify-between relative gap-40px px-25px pt-23px !border-none;
}

#search-form {
  @apply grid md:gap-y-32px gap-y-20px gap-x-25px justify-between w-full xl:(max-w-none grid-cols-5) lg:grid-cols-4 max-w-1000px md:grid-cols-3 grid-cols-1 items-center;
}

#search-form .input-value {
  @apply flex gap-5px cursor-pointer items-center rounded-[6px] h-44px py-8px pl-10px pr-30px border border-rarely-0 relative;
}

#search-form .input-value span {
  @apply whitespace-nowrap overflow-hidden text-ellipsis bg-regular-3 max-w-100px py-3px px-8px;
}

#search-filed .filter-switch-btn {
  @apply lg:(w-44px h-full) w-40px cursor-pointer h-40px flex justify-center items-center bg-rarely-0/20 rounded-[10px];
}

#search-filed .search-btns {
  @apply flex items-center xl:static lg:(absolute h-47px gap-25px) gap-15px md:h-40px static bottom-0 right-25px xl:gap-20px;
}

#search-filed .grid-area {
  grid-area: 3;
}

@media (min-width: 768px) {
  #search-filed .grid-area {
    grid-area: 1/3;
  }
}
</style>
