<template>
   <div class="container md:mt-100px mt-60px">
       <h3 class="font-900 font-mulish md:(text-30px mb-40px) md:text-30px text-24px mb-24px">Отели по регионам</h3>

       <div class="grid grid-cols-3 md:gap-x-20px gap-x-10px">
           <div v-for="card in cards" :key="card.title" class="relative">
               <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
               <div class="h-100px rounded-[10px] md:(p-30px h-190px) bg-cover bg-no-repeat bg-center" :style="`background-image: url('${card.bg}')`">
                     <p class="font-extrabold tex-20px md:block hidden text-white">{{ card.title }}</p>
               </div>
               <p class="font-bold mt-12px md:hidden block">{{ card.title }}</p>
           </div>
       </div>
   </div>
</template>

<script setup>

const cards = [
   {
       title: 'Подмосковье',
       bg: '/new-main-section-23/1.png',
       link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=13,26&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   },
   {
       title: 'Санкт-Петербург',
       bg: '/new-main-section-23/2.png',
       link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=1264&adults=1&kids=10&&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=13,26&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   },
   {
       title: 'Калининград',
       bg: '/new-main-section-23/3.png',
       link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=502,3788&adults=1&kids=10&dateFrom=31/10/2024&dateTo=02/11/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=13,26&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   }
]
</script>