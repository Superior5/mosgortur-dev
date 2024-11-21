<template>
  <div>
    <div v-if="toursStore.departureCities.length" @click="$emit('open')" class="input-value-new">
      <template v-if="toursStore.selectedDepartureCities.length">
        <span v-for="val in toursStore.selectedDepartureCities" :key="val.Key">
          {{ val.Name }}
        </span>
      </template>
      <span v-else class="bg-transparent pl-0 overflow-hidden !max-w-none">Откуда вы поедите?</span>
      <img class="w-15px right-12px absolute" src="@/assets/images/icons/arrow.svg" alt="" />
    </div>
    <BlocksAutocomplete class="left-0" @select="changeParams" @close="$emit('close')" v-if="show" :items="toursStore.departureCities"
      v-model="toursStore.selectedDepartureCities" />
  </div>
</template>
<script setup>
const toursStore = useToursStore();
const props = defineProps({ show: Boolean });
const changeParams = async () => {
  await toursStore.getActualizeCities();
  toursStore.selectedActualizeCities = [toursStore.actualizeCities[0]];
  await toursStore.getActualizeTourType();
  toursStore.selectedActualizeTourType = [toursStore.actualizeTourType[0]];
  await toursStore.getTourDate();
  toursStore.duration = toursStore.selectedTourDates = [];
};
</script>