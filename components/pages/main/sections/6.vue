<template>
   <section id="section-6" class="md:mt-150px mt-100px">
      <div class="container">
         <div class="flex gap-30px md:flex-row flex-col mb-40px items-center justify-between">
            <div class="flex w-full md:flex-row flex-col items-center max-w-400px justify-between">
               <BlocksH2 class="md:(text-32px) text-24px">Лучшие отели</BlocksH2>
            </div>
         </div>
         <div class="best-hotels_block pb-15px overflow-x-auto flex xl:grid gap-20px scroll-style">
            <BlocksHotelCard class="blocks-hotel !md:w-full w-216px" v-for="item in bestHotels"
               :key="item.id" :hotel="item" />
         </div>
      </div>
   </section>
</template>

<script setup>
const interfaceStore = useInterfaceStore()

const bestHotels = [
   {
      title: 'Фея Sunclub Resort & Spa',
      image: 'FeyaSunclubResort&Spa',
      link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&hotels=51108&adults=1&kids=10&dateFrom=23/09/2024&dateTo=29/09/2024&minNights=6&maxNights=6&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   },
   {
      title: 'Солнечный Park Hotel & Spa',
      image: 'SunnyParkHotel&Spa',
      link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&hotels=10223&adults=1&kids=10&dateFrom=01/10/2024&dateTo=13/10/2024&minNights=12&maxNights=12&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   },
   {
      title: 'Talka Village',
      image: 'TalkaVillage',
      link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&hotels=10223&adults=1&kids=10&dateFrom=18/09/2024&dateTo=25/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   },
   {
      title: 'Сочи Парк Отель',
      image: 'SochiParkHotel',
      link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3793&hotels=86048&adults=2&dateFrom=23/09/2024&dateTo=29/09/2024&minNights=6&maxNights=6&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
   }
]

</script>
<style>
.blocks-hotel .carousel {
   @apply md:(w-auto) <md:w-216px;
}

#section-6 .best-hotels_block {
   grid-template-columns: repeat( auto-fit, minmax(245px, 1fr) );
}
</style>