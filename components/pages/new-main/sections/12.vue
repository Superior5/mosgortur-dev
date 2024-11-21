<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-30px">Категории отелей</h3>

        <div class="grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div class="h-108px bg-rarely-[#FFFFCC] rounded-[10px] flex flex-col justify-center items-center">
                    <img :src="card.icon" alt="картинка">
                </div>
                <p class="font-bold mt-12px">{{ card.title }}</p>
            </div>
        </div>
    </div>
    <BlocksLinkButton class="my-60px !pt-0px" :link="'https://www.mos.ru/pgu2/landing/1022746'">
            <div class="flex gap-20px items-center">
                <img src="@/assets/images/new-main/logo.png" alt="лого">
                <p class="leading-20px font-bold">
                    Записаться в офис
                </p>
            </div>
        </BlocksLinkButton>
</template>

<script setup>

const cards = [
    {
        title: 'Семейные',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-5/family.png'
    },
    {
        title: 'С бассейном',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',        
        icon: '/new-main-section-5/pool.png'
    },
    {
        title: 'Пляжные',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2,3&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-5/beach.png'
    },
    {
        title: '1-2 пляжная линия',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=119&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-6/beach.png'
    },
    {
        title: 'Доступная среда',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/heart.png'
    },    {
        title: 'Детская анимация',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=119&city=832&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=24,10,13,12,26&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-9/clown.png'
    },
]
</script>