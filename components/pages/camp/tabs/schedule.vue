<template>
   <div id="schedule">
      <h2>Распорядок дня</h2>
      <div class="xl:max-w-630px">
         <div v-for="item in schedule" :key="item.name" class="flex border-b border-rarely-3 md:text-18px">
            <div :class="{ 'bg-regular-3': item.icon }"
               class="flex gap-10px px-10px py-4px md:(w-6/8 px-16px py-8px) w-5/8">
               <img v-if="item.icon" src="@/assets/images/icons/eat.svg" alt="">
               {{ item.name }}
            </div>
            <div class="bg-regular-3 md:(px-16px w-2/8 py-8px) w-3/8 px-10px whitespace-nowrap py-4px">{{ item.time }}
            </div>
         </div>
      </div>
      <div class="mt-50px">
         <h5 class="font-bold text-20px mb-30px">Дополнительно можно заказать:</h5>
         <div class="flex justify-between overflow-auto gap-15px">
            <PagesCampCard class="min-w-150px" v-for="i in 4" :key="i"
               :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
         </div>
      </div>
      <BlocksButton filling class="w-full mt-40px">Смотреть всю программу развлечений</BlocksButton>
   </div>
</template>
<script setup>
const schedule = [
   { name: 'Подъем', icon: false, time: '07:00' },
   { name: 'Время личной гигиены', icon: false, time: '07:00 - 07:30' },
   { name: 'Утренняя планерка', icon: false, time: '07:30 - 07:55' },
   { name: 'Зарядка', icon: false, time: '07:55 - 08:20' },
   { name: 'Завтрак и уборка помещений', icon: true, time: '08:55' },
   { name: 'Развивающие студии', icon: false, time: '09:45' },
   { name: 'Обед и тихий час', icon: true, time: '13:00-15:00' },
   { name: 'Активный отдых', icon: false, time: '15:00-16:20' },
   { name: 'Общение в группе', icon: false, time: '16:00-17:20' },
   { name: 'Ужин', icon: true, time: '17:30' },
   { name: 'Вечерние мероприятия', icon: false, time: '18:30-19:50' },
   { name: 'Вечерний чай', icon: true, time: '21:45' },
   { name: 'Общение в группе', icon: false, time: '22:00' },
   { name: 'Отбой', icon: false, time: '23:00' },
]
</script>
