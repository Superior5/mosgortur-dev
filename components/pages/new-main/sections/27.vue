<template>
   <div class="container md:mt-100px mt-60px">
       <div class="md:hidden grid grid-cols-3 gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
            <div :style="{ backgroundImage: `url(${card?.icon}); background-color: ${card?.bgColor};` }"
                    class="relative bg-no-repeat bg-cover bg-right h-108px p-12px bg-[#FFEBF8]  rounded-[10px] flex flex-col" :class="`!bg-[${card?.bgColor}]`">
                    <!-- <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a> -->
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
           </div>
       </div>
       <div  class="md:grid hidden cursor-pointer grid-cols-3 mt-40px gap-x-20px gap-y-30px">
           <div v-for="card in cards" :key="card.title" class="relative">
               <!-- <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a> -->
               <div :style="{ backgroundImage: `url(${card?.bg}); background-color: ${card?.bgColor};` }"
                   class="h-200px card-illustration p-30px bg-[#FFEBF8]  rounded-[10px] flex flex-col">

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
       title: 'Отели',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=80000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-27/hotelICON.png',
       bg: '/new-main-section-27/hotelBG.png',
       bgColor: '#E1F4FF'
   },
   {
       title: 'Туры с ЖД',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10,10&minNights=7&maxNights=8&minPrice=0&maxPrice=120000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       icon: '/new-main-section-27/toursRailICON.png',
       bg: '/new-main-section-27/toursRailBG.png',
       bgColor: '#FFF7F1'

   },
   {
       title: 'Туры с авиа',
       link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10,10&minNights=7&maxNights=8&minPrice=0&maxPrice=120000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
       bg: '/new-main-section-27/toursAviaBG.png',
       icon: '/new-main-section-27/toursAviaIcon.png',
       bgColor: '#FFFFCC'

   }
]
</script>