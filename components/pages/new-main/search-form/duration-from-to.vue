<template>
  <div class="flex justify-between">
    <div class="flex">
      <div class="input-value-new !px-0px w-full" @click="(showEl = 0), $emit('open')">
        <span v-if="toursStore.selectedDuration.length">
          {{ toursStore.selectedDuration[0] }}
        </span>
        <div v-else>От</div>
      </div>
      <div v-if="show && showEl == 0 && toursStore.duration.length"
        class="bg-white absolute z-33 w-full rounded-5px top-40px max-h-300px max-w-50px overflow-auto shadow-0 px-10px py-5px flex flex-col gap-5px">
        <div v-for="el in toursStore.duration" :key="el" @click="selectDaysCount(el)"
          class="cursor-pointer hover:opacity-50">
          {{ el }}
        </div>
      </div>
    </div>
    <div class="w-1px h-40px bg-[#e5e7eb]"></div>
    <div class="flex">
      <div class="input-value-new !px-0px w-full" @click="(showEl = 1), $emit('open')">
        <span v-if="toursStore.selectedDuration.length">
          {{ toursStore.selectedDuration[1] }}
        </span>
        <div v-else>До</div>
      </div>
      <div v-if="show && showEl == 1 && toursStore.duration.length"
        class="bg-white absolute z-33 w-full rounded-5px top-40px max-h-300px max-w-50px overflow-auto shadow-0 px-10px py-5px flex flex-col gap-5px">
        <div v-for="el in toursStore.duration.filter(
          (el) => el >= toursStore.selectedDuration[0]
        )" :key="el" @click="(toursStore.selectedDuration[1] = el), $emit('close')"
          class="cursor-pointer hover:opacity-50">
          {{ el }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toursStore = useToursStore();
const emit = defineEmits(["close", "open"]);
const props = defineProps({ show: Boolean });
const showEl = ref("");

const selectDaysCount = (el) => {
  toursStore.selectedDuration[1] = Math.max(...toursStore.duration);
  toursStore.selectedDuration[0] = el;
  emit("close");
};
</script>