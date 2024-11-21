<template>
   <div class="border-b border-black py-30px">
      <div class="mb-20px flex justify-between">
         <h6 class="font-notosans font-bold">Время вылета</h6>
         <span class="text-regular-1 font-ptsans text-sm">Сбросить</span>
      </div>
      <div class="font-ptsans text-sm mb-20px">
         <div class="flex gap-16px items-center font-bold">
            <img src="@/assets/images/icons/airplane.svg" alt="">
            Туда - вылет
         </div>
         <div class="flex justify-between items-center mt-8px mb-5px">
            <span>{{ toDeparture[0] }}</span>
            <span>{{ toDeparture[1] }}</span>
         </div>
         <v-range-slider v-model="toDeparture" :thumb-label="true" :step="1" :min="time.to.departure[0]"
            :max="time.to.departure[1]"></v-range-slider>
      </div>
      <div class="font-ptsans text-sm mb-20px">
         <div class="flex gap-16px items-center font-bold">
            <img src="@/assets/images/icons/airplane.svg" alt="">
            Туда - прибытие
         </div>
         <div class="flex justify-between items-center mt-8px mb-5px">
            <span>{{ toArrival[0] }}</span>
            <span>{{ toArrival[1] }}</span>
         </div>
         <v-range-slider v-model="toArrival" :thumb-label="true" :step="1" :min="time.to.arrival[0]"
            :max="time.to.arrival[1]"></v-range-slider>
      </div>
      <div class="font-ptsans text-sm mb-20px last:mb-0">
         <div class="flex gap-16px items-center font-bold">
            <img class="transform -scale-x-100" src="@/assets/images/icons/airplane.svg" alt="">
            Обратно - вылет
         </div>
         <div class="flex justify-between items-center mt-8px mb-5px">
            <span>{{ fromDeparture[0] }}</span>
            <span>{{ fromDeparture[1] }}</span>
         </div>
         <v-range-slider v-model="fromDeparture" :thumb-label="true" :step="1" :min="time.from.departure[0]"
            :max="time.from.departure[1]"></v-range-slider>
      </div>
      <div class="font-ptsans text-sm mb-20px last:mb-0">
         <div class="flex gap-16px items-center font-bold">
            <img class="transform -scale-x-100" src="@/assets/images/icons/airplane.svg" alt="">
            Обратно - прибытие
         </div>
         <div class="flex justify-between items-center mt-8px mb-5px">
            <span>{{ fromArrival[0] }}</span>
            <span>{{ fromArrival[1] }}</span>
         </div>
         <v-range-slider v-model="fromArrival" :thumb-label="true" :step="1" :min="time.from.arrival[0]"
            :max="time.from.arrival[1]"></v-range-slider>
      </div>
   </div>
</template>
<script setup>
const time = {
   to: {
      arrival: [0, 23],
      departure: [0, 23]
   },
   from: {
      arrival: [0, 23],
      departure: [0, 23]
   }
}
const fromArrival = ref([...time.from.arrival])
const fromDeparture = ref([...time.from.departure])
const toArrival = ref([...time.to.arrival])
const toDeparture = ref([...time.to.departure])
</script>

<style scoped>
.-scale-x-100 {
   transform: scaleX(-1);
}
</style>