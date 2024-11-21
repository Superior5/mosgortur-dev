<template>
    <div>
        <PagesNewMainSections1 />
        <div v-if="!toursStore.searchFullResult && !toursStore.noTours">
            <PagesNewMainSections11 v-if="route.name == 'new-main'" />
            <PagesNewMainSections2 v-if="route.name == 'new-main-tours'" />
            <PagesNewMainSections12 v-if="route.name == 'new-main-hotels'" />
            <PagesNewMainSections15 v-if="route.name == 'new-main-foreign-tours'" />
            <PagesNewMainSections16 v-if="route.name == 'new-main-foreign-tours'" />
            <PagesNewMainSections17 v-if="route.name == 'new-main-foreign-tours'" />
            <PagesNewMainSections3 v-if="route.name == 'new-main'" />
            <PagesNewMainSections9 v-if="route.name == 'new-main-tours'" />
            <PagesNewMainSections10 v-if="route.name == 'new-main-tours'" />
            <PagesNewMainSections4 v-if="route.name == 'new-main-kids' || route.name == 'new-main'" />
            <PagesNewMainSections5 v-if="route.name == 'new-main'" />
            <PagesNewMainSections3 v-if="route.name == 'new-main-tours'|| route.name == 'new-main-hotels'" />
            <PagesNewMainSections13 v-if="route.name == 'new-main-hotels'" />
            <PagesNewMainSections6 v-if="route.name == 'new-main-tours' || route.name == 'new-main'" />
            <PagesNewMainSections14 v-if="route.name == 'new-main-hotels'" />
            <PagesNewMainSections8 v-if="route.name == 'new-main-kids'" />
            <PagesNewMainSections7 />
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const actPage = ref(useRoute().name);

const interfaceStore = useInterfaceStore()
const toursStore = useToursStore();
await interfaceStore.getTabs(5);



// if (!interfaceStore.tabs.find(el => el.tab == actPage.value).status) { 
//     navigateTo('/' + interfaceStore.tabs.find(el => el.status === true).tab);
// }

onBeforeRouteLeave((to, from) => {
    toursStore.searchFullResult = toursStore.mapFullResult = null;
    toursStore.quantityTourists[1].edges = toursStore.minMaxPrices = [];
    toursStore.quantityTourists[0].quantity = 1;
    toursStore.quantityTourists[1].quantity = 0;
    toursStore.selectedChildYear = null;
    toursStore.selectedMonths =
        toursStore.mapTours =
        toursStore.selectedTourDates =
        toursStore.selectedActualizeTourType =
        toursStore.selectedActualizeCities =
        toursStore.selectedDestination =
        toursStore.tours =
        toursStore.selectedDepartureCities =
        toursStore.selectedDuration =
        [];
});
</script>