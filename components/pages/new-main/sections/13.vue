<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-30px">Отели по направлениям</h3>

        <div class="grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div 
                :style="{ backgroundImage: `url(${card?.icon})`}"
                class="bg-image-settings h-108px bg-rarely-[#FFFFCC] rounded-[10px] flex flex-col justify-center items-center">
                </div>
                <p class="font-bold mt-12px">{{ card.title }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const cards = [
    {
        title: 'Подмосковье',
        link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&dateFrom=09/09/2024&dateTo=22/09/2024&minNights=13&maxNights=13&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-13/moscow.jpeg'
    },
    {
        title: 'Санкт-Петербург',
        link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=2&dateFrom=01/10/2024&dateTo=31/10/2024&minNights=30&maxNights=30&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-13/petersburg.jpeg'
    },
    {
        title: 'Калининград',
        link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3793,3481&adults=2&dateFrom=09/09/2024&dateTo=22/09/2024&minNights=13&maxNights=13&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-13/kaliningrad.jpeg'
    }
]
</script>
<style>
.bg-image-settings {
    @apply bg-no-repeat bg-cover bg-center
}
</style>