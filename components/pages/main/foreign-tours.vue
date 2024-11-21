<template>
  <div>
    <PagesNewMainSections1 />
    <div v-if="!toursStore.searchFullResult && !toursStore.noTours">
      <PagesNewMainSections15 />
      <PagesNewMainSections16 />
      <PagesNewMainSections17 />
    </div>
  </div>
</template>
<script setup>
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const route = useRoute()
await interfaceStore.getTabs(5);


onBeforeRouteLeave((to, from) => {
  toursStore.searchFullResult = toursStore.mapFullResult = null;
  toursStore.quantityTourists[1].edges = toursStore.minMaxPrices = [];
  toursStore.quantityTourists[0].quantity = 1;
  toursStore.quantityTourists[1].quantity = 0;
  toursStore.kidsAge = 'Любой';
  toursStore.ageCategory = {};
  toursStore.selectedMonths =
    toursStore.mapTours =
    toursStore.selectedTourDates =
    toursStore.selectedActualizeTourType =
    toursStore.selectedActualizeCities =
    toursStore.selectedDuration =
    toursStore.selectedDestination =
    toursStore.tours =
    toursStore.selectedDepartureCities =
    [];
});

// useHead({
//   script: [{ src: "//code.jivo.ru/widget/MY7urFqqby", async: true }],
// });
</script>