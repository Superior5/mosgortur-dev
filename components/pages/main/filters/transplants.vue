<template>
   <div class="border-b border-black py-30px">
      <h6 class="font-notosans font-bold mb-20px">Пересадки</h6>
      <div class="flex flex-col gap-5px mt-18px">
         <BlocksCheck v-for="(transplant, i) in transplants" :check="transplant.check"
            @input="() => transplant.check = !transplant.check" :key="transplant.title + i" :title="transplant.title" />
      </div>
   </div>
</template>
<script setup>
const transplants = ref([
   { title: 'Без пересадок', check: false },
   { title: '1 пересадка', check: false },
   { title: '2 и более пересадок', check: false }
])
</script>