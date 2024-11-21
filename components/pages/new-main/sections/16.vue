<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Категории туров</h3>
        <div class="grid md:hidden grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative w-full">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bg-contain bg-right-bottom h-108px p-12px bg-[#CFC]  rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
            </div>
        </div>
        
        <div class="md:(grid grid-cols-3) lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 hidden justify-between flex-wrap gap-20px">    
            <div v-for="card in cards" :key="card.title" class="relative min-w-200px">
                    <a :href="card.link" class="absolute top-0 left-0 right-0 bottom-0 z-10"></a>
                    <div :style="{ backgroundImage: `url(${card?.icon})` }"
                        class="h-200px bg-no-repeat bg-contain bg-right-bottom bg-[#CFC] rounded-[10px] flex flex-col justify-between p-24px">
                        <p class="font-bold">{{ card.title }}</p>
                        <IconsNewMainLinkArrow class="text-regular-0" />
                    </div>
                </div>
            </div>
    </div>
    <BlocksLinkButton v-if="route.name == 'index'" :link="'/tours'">
        <p class="font-bold">К поиску тура</p>
    </BlocksLinkButton>
</template>

<script setup>
const route = useRoute();
const cards = [
    {
        title: 'Семейный отдых',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-5/new-family.png'
    },
    {
        title: 'Горящие туры',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&hotelMeals=117&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/fire.png'
    },
    {
        title: '1-2 пляжная',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/ball.png'
    },
    {
        title: 'С бассейном',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-5/new-pool.png'
    },
    {
        title: 'Детская анимация',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=26,10,12,13,14&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/clawn.png'
    },
    {
        title: 'У моря',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2,3&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-5/new-beach.png'
    }
]
</script>