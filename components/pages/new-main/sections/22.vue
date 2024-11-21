<template>
   <div class="container md:mt-100px mt-60px">
       <h3 class="font-900 font-mulish md:(text-30px mb-40px) md:text-30px text-24px mb-24px">Категории отелей</h3>

       <div class="md:hidden grid grid-cols-3 gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
               <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
               <div class="h-108px bg-[#FFFFCC] rounded-[10px] flex flex-col justify-center items-center">
                   <img :src="card.icon" alt="картинка">
               </div>
               <p class="font-bold mt-12px">{{ card.title }}</p>
           </div>
       </div>

       <div class="md:grid hidden grid-cols-6 gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
            <a :href="card.link" class="absolute top-0 left-0 right-0 bottom-0 z-10"></a>
                   <div :style="{ backgroundImage: `url(${card?.bg})` }"
                       class="h-200px card-illustration bg-[#FFFFCC] rounded-[10px] flex flex-col justify-between p-24px">
                       <p class="font-bold">{{ card.title }}</p>
                       <IconsNewMainLinkArrow class="text-regular-0" />
                   </div>
           </div>
       </div>
   </div>
</template>

<script setup>

const cards = [
   {
       title: 'Семейные',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2,3&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-22/icon-1.png',
       bg: '/new-main-section-22/main-1.png'
   },
   {
       title: 'С бассейном',
       link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
       icon: '/new-main-section-22/icon-2.png',
       bg: '/new-main-section-22/main-2.png'
   },
   {
       title: 'Пляжные',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-22/icon-3.png',
       bg: '/new-main-section-22/main-3.png'
   },
   {
       title: 'В городе',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&resorts=1264,502,1696,495,7099,872&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-22/icon-4.png',
       bg: '/new-main-section-22/main-4.png'
   },
   {
       title: 'Доступная среда',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-22/icon-5.png',
       bg: '/new-main-section-22/main-5.png'
   },
   {
       title: 'Детская анимация',
       link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=13,26&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
       icon: '/new-main-section-22/icon-6.png',
       bg: '/new-main-section-22/main-6.png'
   },

]
</script>