<template>
  <div id="filters" class="<lg:(bg-white p-36px rounded-10px) <md:(pt-24px !overflow-x-hidden px-10px)">
    <div v-if="isLarge()" class="flex justify-between">
      <h2 class="h-2">Фильтры</h2>
      <div class="text-regular-1 font-ptsans" @click="searchWithFilters(true)">
        Сбросить
      </div>
    </div>
    <div class="pt-30px">
      <div class="pb-15px">
        <BlocksCheck
          v-if="toursStore.searchFullResult?.SecondaryFiltersResult?.TourTypes?.some(el => el.Id == 376) && !toursStore.selectedActualizeTourType.some(el => el.Key == 376)"
          title="Только дневное пребывание" :check="checkDayStay" @input="checkDayStay = !checkDayStay"
          keyCheck="filtersDayStay" />
      </div>
      <div class="pb-15px">
        <BlocksCheck
          v-if="toursStore.searchFullResult?.SecondaryFiltersResult?.TourTypes?.some(el => el.Id == 393) && !toursStore.selectedActualizeTourType.some(el => el.Key == 393)"
          title="Только с ж/д" :check="checkRailway" @input="checkRailway = !checkRailway" keyCheck="filtersRailway" />
      </div>
      <div class="pb-15px">
        <BlocksCheck
          v-if="toursStore.searchFullResult?.SecondaryFiltersResult?.TourTypes?.some(el => el.Id == 397) && !toursStore.selectedActualizeTourType.some(el => el.Key == 397)"
          title="Авиаперелет" :check="checkAvia" @input="checkAvia = !checkAvia" keyCheck="filtersAvia" />
      </div>
    </div>
    <PriceRange />
    <AgeType @toggle-accordion="(filterName) => actFilters = filterName" :act-filters="actFilters"/>
    <div class="border-b border-black lg:py-30px pt-15px" v-for="filter in baseFilters" :key="filter.pls">
      <div v-if="isLarge()" @click="actFilters = actFilters == filter.name ? '' : filter.name"
        class="mb-20px flex justify-between">
        <h6 class="font-notosans font-bold">{{ filter.pls }}</h6>
        <IconsMinus v-if="actFilters == filter.name" />
        <IconsPlus v-else />
      </div>
      <h6 v-else class="font-notosans font-bold">{{ filter.pls }}</h6>
      <BlocksSearchChecks v-if="filter.name" placeholder="Название" :options="toursStore.filters[filter.name]"
        :checks="toursStore.selectedFilters[filter.name]" @change-check="(k) => changeCheck(k, filter.name)"
        class="transition-all duration-500 overflow-hidden relative lg:(p-0 max-h-none)"
        :class="actFilters == filter.name ? 'max-h-500px pb-15px' : 'max-h-0px'" />
        
    </div>
    <button @click="searchWithFilters(true)"
      class="rounded-[10px] mt-50px lg:block hidden bg-rarely-4 w-full uppercase text-13px font-bold font-notosans py-17px">
      сбросить все фильтры
    </button>
    <BlocksButton @click="searchWithFilters()"
      class="py-17px sticky md:bottom-15px bottom-0 w-full text-13px uppercase lg:mt-24px">
      применить
    </BlocksButton>
  </div>
</template>
<script setup>
import PriceRange from "./price-range.vue";
import AgeType from "./age-type.vue";
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const route = useRoute();
const actFilters = ref("");
const checkDayStay = ref(route.query['TourType'].includes('376'))
const checkRailway = ref(route.query['TourType'].includes('393'))
const checkAvia = ref(route.query['TourType'].includes('397'))

const baseFilters = computed(() => {
  const res = [
    { pls: "Город", name: "HotelCity" },
    { pls: "Регион", name: "HotelResort" },
    // { pls: "Звездность", name: "HotelStars" },
    { pls: "Питание", name: "Pansions" },
    { pls: route.name == "kids" ? "Услуги лагеря" : "Услуги отеля", name: "HotelType" },
    { pls: "Отель", name: "Hotel" }
  ]
  if (route.name == "kids" || route.name == "kids-test") res.unshift({ pls: "Длительность смены", name: "Durations" })
  return res
});

const changeCheck = (k, name) => {
  const idx = toursStore.selectedFilters[name].indexOf(k);
  if (idx < 0) {
    toursStore.selectedFilters[name].push(k);
  } else {
    toursStore.selectedFilters[name].splice(idx, k);
  }
};

const searchWithFilters = async (clear) => {
  if (clear) {
    toursStore.clearFilters(true);
  } else {
    let params = "";

    for (const key in toursStore.selectedFilters) {
      params += createParams([
        toursStore.selectedFilters[key],
        key,
        (el) => el,
      ]);
      if (key == "HotelCity")
        params += createParams([
          toursStore.selectedFilters[key],
          "CityIds",
          (el) => el,
        ]);
    }

    
    params.replace(/ChildAgesForCamp=[0-9]+&/, '')
    toursStore.inputParams = toursStore.inputParams.replace(/ChildAgesForCamp=[0-9]+&/, '')

    if(toursStore.ageCategory?.key) {
      toursStore.kidsAge = toursStore.ageCategory.key[0];
      toursStore.ageCategory.key = toursStore.ageCategory.key.slice(0,2)

      params += createParams([toursStore.ageCategory?.key, 'ChildAgesForCamp', el => el])

    } else if(toursStore.kidsAge && toursStore.kidsAge != 'Любой') {
    
      params += createParams([[toursStore.kidsAge], 'ChildAgesForCamp', el => el])

    }
    if (
      toursStore.rangeValue[0] != toursStore.minMaxPrices[0] ||
      toursStore.rangeValue[1] != toursStore.minMaxPrices[1]
    )
      params +=
        new URLSearchParams({
          MinPrice: toursStore.rangeValue[0],
          MaxPrice: toursStore.rangeValue[1],
        }) + "&";

    if ((checkDayStay.value && !toursStore.selectedActualizeTourType.some(el => el.Key == 376)) || checkRailway.value || checkAvia.value) {
      toursStore.inputParams = toursStore.inputParams.replace('TourType=-1&', '')
      if (checkRailway.value) params += `TourType=393&`
      if (checkDayStay.value) params += `TourType=376&`
      if (checkAvia.value) params += `TourType=397&`

    } else if (toursStore.selectedActualizeTourType.some(el => el.Key == -1) && !toursStore.inputParams.includes('TourType=-1&')) {
      toursStore.inputParams += 'TourType=-1&'
    }

    if (!toursStore.filtersUrl && !params) return;
    toursStore.filtersUrl = params;
  }

  if (isLarge()) interfaceStore.switchShowFilters = false;
  interfaceStore.loadData = true;
  toursStore.tours = [];
  toursStore.pageNumber = 1;
  await toursStore.getSearchTour();
  await toursStore.getHotelImages();
  interfaceStore.loadData = false;
};
</script>