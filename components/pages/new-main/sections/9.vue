<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Услуги в отелях</h3>
        <div class="grid grid-cols-2 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div class="h-108px bg-rarely-[#FFFFCC] rounded-[10px] flex flex-col justify-center items-center">
                    <img :src="card.icon" alt="картинка">
                </div>
                <p class="font-bold mt-12px">{{ card.title }}</p>
            </div>
        </div>
    </div>
    <BlocksLinkButton v-if="route.name == 'index'" :link="'/tours'">
        <p class="font-bold">К поиску тура</p>
    </BlocksLinkButton>
</template>

<script setup>
const route = useRoute()
const cards = [
    {
        title: 'С бассейном',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-9/pool.png'
    },
    {
        title: 'Детская анимация',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=24,26,10&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-9/clown.png'
    },
    {
        title: 'Аквапарк',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=14&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-9/aquapark.png'
    }
    ,
    {
        title: 'Питание ”Все включено”',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&hotelMeals=115,116&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-9/allIn.png'
    }
]
</script>