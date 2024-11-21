<template>
  <vue-date-picker @closed="closeMenu, $emit('close')" :disabled="!show && !toursStore.tourDates.length"
    :teleport-center="isMobile()" ignore-time-validation :max-range="toursStore.duration.at(-1)" no-disabled-range
    v-model="toursStore.selectedTourDates" :allowed-dates="allowedDates" :format="'dd.MM.yy'" :clearable="false"
    :auto-position="false" :month-change-on-scroll="false" range multi-calendars locale="ru" :enable-time-picker="false"
    @range-start="onRangeStart" cancelText="Отмена" selectText="Применить">
    <template #dp-input="{ value }">
      <div @click="$emit('open')" class="input-value-new flex cursor-pointer justify-between">
        <span v-if="toursStore.selectedTourDates.length" class="!max-w-full">
          {{ `${value.split(" - ")[0]} |
          ${Math.floor((toursStore.selectedTourDates[1] - toursStore.selectedTourDates[0])
            / (1000 * 60 * 60 * 24))} ночей` }}
        </span>
        <div v-else>Когда</div>
        <img class="cursor-pointer" src="@/assets/images/icons/calendar.svg" alt="" />
      </div>
    </template>
    <template #action-preview="{ value }">
      <div v-if="toursStore.duration.length">
        максимальное количество ночей:
        <span class="font-bold">{{ toursStore.duration.at(-1) }}</span>
      </div>
      {{ preview(value) }}
    </template>
  </vue-date-picker>
</template>

<script setup>
const toursStore = useToursStore()
const props = defineProps({ show: Boolean });

const allowedDates = computed(() =>
  toursStore.tourDates.map((el) =>
    el.replace(/([0-9]+)\.([0-9]+)\.([0-9]+)?/g, "$3-$2-$1")
  )
);

const onRangeStart = (v) => toursStore.getDuration([v.toLocaleDateString("ru-RU")]);
const preview = (v) => {
  if (Array.isArray(v)) {
    const vN = v.map((el) => el.toLocaleDateString("ru-RU"));
    return `${v[1]
      ? `${vN[0]} - ${vN[1]} ${(v[1] - v[0]) / 1000 / 60 / 60 / 24}`
      : `${vN[0]} ${document.querySelectorAll(
        ".dp__cell_inner.dp__date_hover_end.dp__range_between"
      ).length + 1
      }`
      } ночей`;
  }
};
const closeMenu = () => {
  toursStore.duration = [];
  if (!isDesktop) {
    useHead({
      htmlAttrs: {
        class: "",
      },
    });
  }
};
</script>

<style>
#search-form .dp__outer_menu_wrap>div {
  @apply md:w-auto w-[calc(100%-50px)];
}

#search-form .dp__action_row {
  @apply flex flex-col gap-10px;
}
</style>