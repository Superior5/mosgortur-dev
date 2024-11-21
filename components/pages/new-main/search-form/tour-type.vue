<template>
  <div>
    <div v-if="toursStore.actualizeTourType.length" @click="$emit('open')" class="input-value-new">
      <template v-if="toursStore.selectedActualizeTourType.length">
        <span v-for="val in toursStore.selectedActualizeTourType.filter((el) => el.Key !=388 && el.Key !=393)"
          class="bg-regular-3 py-3px px-8px" :key="val.Key">
          {{ val.Name }}
        </span>
      </template>
      <template v-else> Выберите тур </template>
      <img class="w-15px right-12px absolute" src="@/assets/images/icons/arrow.svg" alt="" />
    </div>
    <BlocksAutocomplete class="left-0" :items="toursStore.actualizeTourType.filter((el) => el.Key != 11 && el.Key !=388 && el.Key !=393)"
      v-model="toursStore.selectedActualizeTourType" @select="changeParams" @close="$emit('close')" v-if="show" />
  </div>
</template>
<script setup>
const toursStore = useToursStore();
const props = defineProps({ show: Boolean });

const changeParams = async () => {
  await toursStore.getTourDate();
  toursStore.duration = toursStore.selectedTourDates = toursStore.selectedMonths = [];
};
</script>