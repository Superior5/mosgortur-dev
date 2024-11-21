<template>
   <div class="border-b border-black py-30px">
      <h6 class="font-notosans font-bold mb-20px">Тип билета</h6>
      <BlocksSearchChecks placeholder="Название" :options="ticketType" />
   </div>
</template>
<script setup>
const ticketType = ref([
   { title: 'Эконом', check: false },
   { title: 'Комфорт', check: false },
   { title: 'Бизнес-класс', check: false }
])
</script>