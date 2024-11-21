<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-30px">Заграничные туры</h3>

        <div class="grid md:grid-cols-6 grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative" :class="card.gridCols">
                <a :href="card.link" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div 
                :style="{ backgroundImage: `url(${card?.icon})`}"
                class="bg-image-settings md:h-198px h-108px bg-rarely-[#FFFFCC] rounded-[10px] flex flex-col justify-center items-center">
                </div>
                <p class="font-bold mt-12px">{{ card.title }}</p>
            </div>
        </div>
    </div>
    <BlocksLinkButton class="my-60px" :link="'https://www.mos.ru/pgu2/landing/1022746'">
            <div class="flex gap-20px items-center">
                <IconsMgtLogo/>
                <p class="leading-20px font-bold">
                    Записаться в офис
                </p>
            </div>
        </BlocksLinkButton>
</template>

<script setup>
const cards = [
    {
        title: 'Турция',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/turkey-min.webp'
    },
    {
        title: 'Тайланд',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=113&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/thailand-min.webp',
        gridCols: 'md:(col-start-2 col-end-4)'
    },
    {
        title: 'Египет',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=40&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/egypt-min.webp'
    },
    {
        title: 'ОАЭ',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=90&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/emirates-min.webp',
        gridCols: 'md:(col-start-5 col-end-7)'
    },
    {
        title: 'Мальдивы',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=72&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/maldivs-min.webp',
        gridCols: 'md:(col-start-1 col-end-3)'
    },
    {
        title: 'Индия',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=44&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/india-min.webp'
    },
    {
        title: 'Куба',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=61&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/kuba-min.webp'
    },
    {
        title: 'Абхазия',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=1&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/abhaz-min.webp'
    },
    {
        title: 'Китай',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=59&city=832&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-15/china-min.webp'
    }
]

</script>
<style>
.bg-image-settings {
    @apply bg-no-repeat bg-cover bg-center;
}
</style>