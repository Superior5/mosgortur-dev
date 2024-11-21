<template>
  <div>
    <PagesMainSections1 />
    <div v-if="!toursStore.searchFullResult && !toursStore.noTours">
      <PagesMainSections2 />
      <PagesMainSections3 />
      <PagesMainSections4 />

      <PagesMainSections5 />
      <PagesMainSections6 />
      <!-- <PagesMainSections7 /> -->
      <!-- <PagesMainSections8 /> -->
      <PagesMainSections9 />
    </div>
    <component v-if="route.name != 'kids'" :is="'style'">
      jdiv {
      display: none;
      }
    </component>

  </div>
</template>
<script setup>
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const route = useRoute()
await interfaceStore.getTabs(5);
if (!interfaceStore.tabs.find((el) => el.tab == useRoute().name).status) {
  navigateTo("/" + interfaceStore.tabs.find((el) => el.status === true).tab);
}

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