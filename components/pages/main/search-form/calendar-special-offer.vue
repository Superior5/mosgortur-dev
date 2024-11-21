<template>
  <vue-date-picker @closed="closeMenu, $emit('close')" :disabled="!show && !toursStore.tourDates.length" @open="alertFn"
    :teleport-center="isMobile()" ignore-time-validation multi-dates v-model="toursStore.selectedTourDates"
    :allowed-dates="allowedDates" :format="'dd.MM'" :clearable="false" :auto-position="false"
    :month-change-on-scroll="false" multi-calendars locale="ru" :enable-time-picker="false" cancelText="Отмена"
    selectText="Применить" @update:model-value="getDurations">
    <template #day="{ day, date }">
      <div class="absolute w-full h-full flex justify-center items-center" @click="getDay(date)">{{ day }}</div>
    </template>
    <template #dp-input="{ value }">
      <div @click="$emit('open')" class="input-value flex cursor-pointer justify-between">
        <span v-if="toursStore.selectedTourDates.length" class="!max-w-full">
          {{ value }}
        </span>
        <div v-else>Когда</div>
        <img class="cursor-pointer" src="@/assets/images/icons/calendar.svg" alt="" />
      </div>
    </template>
    <!-- <template #action-preview>
      <div class="whitespace-normal w-full md:(max-w-600px absolute -z-1 left-0 bottom-0 p-10px pr-200px leading-15px)">
        Выберите диапазон дат начала отдыха. Обратите внимание: продолжительность тура уже определена, выбрать продолжительность
        тура вы можете в списке выданных предложений.
      </div>
    </template> -->
  </vue-date-picker>
</template>

<script setup>
const toursStore = useToursStore();
const props = defineProps({ show: Boolean });

const allowedDates = computed(() =>
  toursStore.tourDates.map((el) =>
    el.replace(/([0-9]+)\.([0-9]+)\.([0-9]+)?/g, "$3-$2-$1")
  )
);

const getDurations = async () => {
  await toursStore.getDuration(
    toursStore.selectedTourDates.map((d) => d.toLocaleDateString("ru-RU"))
  );
  if (toursStore.duration.length) {
    toursStore.selectedDuration = [
      toursStore.duration[0],
      toursStore.duration.at(-1),
    ];
  }
};

let allowedSelectedDates = []

const alertFn = () => {
  allowedSelectedDates = toursStore.selectedTourDates.filter(el => allowedDates.value.includes(new Date(el).toISOString().slice(0, 10)))
}

const getDay = (date) => {
  if (allowedSelectedDates.length !== toursStore.selectedTourDates.length) {
    toursStore.selectedTourDates = allowedSelectedDates
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
  @apply flex flex-col gap-10px !w-full;
}

#search-form .dp__active_date,
#search-form .dp__date_hover {
  @apply rounded-[50%];
}
</style>