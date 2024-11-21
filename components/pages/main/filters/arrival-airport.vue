<template>
   <div class="border-b border-black py-30px">
      <h6 class="font-notosans font-bold mb-20px">Аэропорт прилета</h6>
      <BlocksSearchChecks placeholder="Название" :options="arrivalAirport" />
   </div>
</template>
<script setup>
const arrivalAirport = ref([
   { title: 'Название аэропорта 1', check: false },
   { title: 'Название аэропорта 2', check: false },
   { title: 'Название аэропорта 3', check: false },
   { title: 'Название аэропорта 4', check: false },
   { title: 'Название аэропорта 5', check: false },
])
</script>