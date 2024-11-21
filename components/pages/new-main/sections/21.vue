<template>
    <div class="container md:mt-100px mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Туры с минимальными доплатами*</h3>
        <div class="md:hidden  grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="relative bg-no-repeat bg-contain bg-bottom h-108px p-12px bg-[#FFEBF8]  rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
            </div>
        </div>
        <div class="md:grid hidden grid-cols-3 mt-40px gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-200px card-illustration p-30px bg-rarely-[#FFEBF8] rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
            </div>
        </div>
        <p class="text-rarely-0 mt-40px text-sm">*Мы предлагаем подборки туров с ориентировочной стоимостью 80 000, 120
            000 и 160 000 рублей. Обращаем ваше внимание, что указанные суммы являются ориентировочными и могут
            измениться. Итоговая стоимость тура будет зависеть от актуальных условий поставщиков на момент бронирования,
            а также от возможного выбора дополнительных услуг по вашему желанию. Точная цена будет подтверждена при
            оплате. Данный расчет носит информационный характер и не является публичной офертой.</p>
    </div>
</template>

<script setup>

const cards = [
    {
        title: 'от 80 000 руб',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=80000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-21/icon-1.png',
        bg: '/new-main-section-21/main-1.png',
    },
    {
        title: 'от 120 000 руб',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10,10&minNights=7&maxNights=8&minPrice=0&maxPrice=120000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-21/icon-2.png',
        bg: '/new-main-section-21/main-2.png',
    },
    {
        title: 'от 180 000 руб',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=2&kids=10,10&dateFrom=22/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=160000&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-21/icon-3.png',
        bg: '/new-main-section-21/main-3.png',
    }
]
</script>