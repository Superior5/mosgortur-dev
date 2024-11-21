<template>
  <div>
    <div v-if="toursStore.actualizeCities.length" @click="$emit('open')" class="input-value-new">
      <template v-if="toursStore.selectedActualizeCities.length">
        <span>{{ toursStore.selectedDestination[0]?.Name }}</span>
        <span v-for="val in toursStore.selectedActualizeCities" :key="val.Key">
          {{ val.Name }}
        </span>
      </template>
      <template v-else> Куда поедете? </template>
      <img class="w-15px right-12px absolute" src="@/assets/images/icons/arrow.svg" alt="" />
    </div>
    <BlocksAutocomplete class="left-0" @select="changeParams" @close="$emit('close')" v-if="show" :items="toursStore.actualizeCities"
      v-model="toursStore.selectedActualizeCities" />
  </div>
</template>
<script setup>
const toursStore = useToursStore();
const props = defineProps({ show: Boolean });

const changeParams = async () => {
  await toursStore.getActualizeTourType();
  toursStore.selectedActualizeTourType = [toursStore.actualizeTourType[0]];
  await toursStore.getTourDate();
  toursStore.duration = toursStore.selectedTourDates = [];
};
</script>