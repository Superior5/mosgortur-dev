<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:(text-30px mb-40px) text-24px mb-24px">Выберите тип тура</h3>

        <div class="md:hidden grid grid-cols-2 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }" class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-rarely-4 rounded-[10px] flex flex-col">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    
                    <p class="font-bold">{{ card.title }}</p>
                </div>
            </div>
        </div>

        <div class="md:grid hidden grid-cols-[2fr,1fr,2fr,1fr] gap-x-20px gap-y-30px">
            <div v-for="(card, i) in cards" :key="card.title" class="relative">
               <template v-if="i % 2 === 0">
                <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-190px card-illustration p-30px bg-rarely-4 rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
               </template>
                <template v-else >
                    <a :href="card.link" class="absolute top-0 left-0 right-0 bottom-0 z-10"></a>
                    <div :style="{ backgroundImage: `url(${card?.bg})` }"
                        class="h-200px card-illustration bg-rarely-4 rounded-[10px] flex flex-col justify-between p-24px">
                        <p class="font-bold">{{ card.title }}</p>
                        <IconsNewMainLinkArrow class="text-regular-0" />
                    </div>
                </template>
            </div>
        </div>
    </div>
    <BlocksLinkButton :link="'/tours'">
        <p class="font-bold">К поиску тура</p>
    </BlocksLinkButton>
</template>

<style scoped>
.bgSize {
    background-size: 95px;
}
</style>
<script setup>
const cards = [
    {
        title: 'Туры у моря',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&dateFrom=17/10/2024&dateTo=19/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2,3&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-2/sea.png',
        bg: '/tours-pictures/sea-bg.png'
    },
    {
        title: 'Подмосковье',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-2/moscow.png',
        bg: '/tours-pictures/moscow-bg.png'
    },
    {
        title: 'Городской',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&resorts=1264,502,495,832&adults=1&dateFrom=17/10/2024&dateTo=19/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-2/city.png',
        bg: '/tours-pictures/city-bg.png'
    },
    {
        title: 'Акции',
        link: '/tours-low-cost',
        icon: '/new-main-section-2/special.png',
        bg: '/tours-pictures/discount-bg.png'
    },

]
</script>