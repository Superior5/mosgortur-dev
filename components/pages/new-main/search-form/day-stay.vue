<template>
   <BlocksCheck title="Только дневное пребывание" :check="checkDayStay > -1" @input="changeDayStay" />
</template>
<script setup>
const toursStore = useToursStore();
const checkDayStay = computed(() => toursStore.selectedActualizeTourType.findIndex(el => el.Key ==388));
const changeDayStay = async () => {
   if (checkDayStay.value < 0) {
      toursStore.selectedActualizeTourType.push(toursStore.actualizeTourType.find(el => el.Key ==388))
   } else {
      toursStore.selectedActualizeTourType.splice(checkDayStay.value, 1)
   }

   await toursStore.getTourDate();
   toursStore.duration = toursStore.selectedTourDates = toursStore.selectedMonths = [];
}
</script>
<style lang="">

</style>