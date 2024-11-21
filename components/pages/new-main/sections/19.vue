<template>
   <div class="container md:mt-100px mt-60px">
       <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Категории туров</h3>
       
       <div class="md:hidden  grid grid-cols-3 gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-rarely-[#E1F4FF] rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
           </div>
       </div>
       <div  class="md:grid hidden grid-cols-3 mt-40px gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
               <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
               <div :style="{ backgroundImage: `url(${card?.bg})` }"
                   class="h-200px card-illustration p-30px bg-rarely-[#E1F4FF] rounded-[10px] flex flex-col">

                   <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                   <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                       <p>Узнать подробнее</p>
                       <IconsNewMainLinkArrow />
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script setup>

const cards = [
   {
       title: 'Регулярные рейсы',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=true&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-19/new-plane.png',
       bg: '/new-main-section-19/fly.png',
   },
   {
       title: 'Доступная среда',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-19/new-heart-1.png',
       bg: '/new-main-section-19/heart.png',
   },
   {
       title: '1-я пляжная линия',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-19/new-ball.png',
       bg: '/new-main-section-19/beach.png',
   }
]
</script>

<style scoped>
.bgSize {
    background-size: 85px;
}
</style>