<template>
    <section id="section-8" class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-39px">Горящие туры</h3>
        <div class="flex gap-30px overflow-x-auto overflow-y-clip scroll-style">
            <div v-for="(tab, i) in tabs" :key="tab" @click="actTab = i"
                :class="{ 'border-regular-0 text-regular-0': i == actTab }"
                class="font-notosans flex items-center whitespace-nowrap transition-all rounded-[5px] py-5px px-12px select-none cursor-pointer border-1">
                {{ tab }}
            </div>
        </div>
        <div class="mt-39px md:(grid grid-cols-2) lg:grid-cols-3  font-mulish flex flex-col gap-40px">
            <TransitionGroup name="fade">
                <div class=" overflow-hidden" v-for="item in tours[actTab]" :key="item.link">
                    <div :style="`background-image: url('/best_hotels/${item.image}.jpg');`" class="bg-no-repeat bg-cover w-full md:h-250px h-210px rounded-[10px]"/>
                    <h4 class="font-extrabold text-18px mt-13px mb-20px">{{ item.title }}</h4>
                    <nuxt-link target="_blank" :href="item.link">
                        <BlocksButton class="w-full !rounded-[10px] opacity-90 h-47px flex items-center justify-center">
                            <p class="leading-20px font-bold">
                                от {{ priceFormatter(item.price) }} ₽
                            </p>
                        </BlocksButton>
                    </nuxt-link>
                </div>
            </TransitionGroup>
        </div>
        <!-- <BlocksButton filling class="w-full font-normal mt-35px">Смотреть все горящие туры</BlocksButton> -->
    </section>
</template>
<script setup>
const route = useRoute()
const tabs = ref([
    'Бассейн', 'Анимация', ' Доступная среда'
])




const tours = [
    [
        {
            title: 'Rehana Royal Beach 5*',
            image: 'pool-1',
            price: 109980,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=40&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'Sunny Days El Palacio Resort & Spa 4*',
            image: 'pool-2',
            price: 129090,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=40&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'Albatros Palace 5*',
            image: 'pool-3',
            price: 108000,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=40&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=15&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
    ],
    [
        {
            title: 'Club Sun Heaven Family & Spa',
            image: 'animation-1',
            price: 114000,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&kids=13&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=26,10,13&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'Club Hotel Anjeliq',
            image: 'animation-2',
            price: 106000,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&kids=13&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=26,10,13&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'MC Arancia Resort Hotel',
            image: 'animation-3',
            price: 106000,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&kids=13&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=26,10,13&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
    ],
    [
        {
            title: 'Armas Pemar Beach',
            image: 'sreda-1',
            price: 124000,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'Xeno Eftalia Resort',
            image: 'sreda-2',
            price: 105890,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
        {
            title: 'Sorgun Akadia Luxury',
            image: 'sreda-3',
            price: 151230,
            link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true'
        },
    ]
]
const actTab = ref(0);
</script>
<style>
#section-4 .icon-span>svg {
    @apply w-32px h-32px;
}


.shadow-angel {
    box-shadow: 5px 4px 32px 26px rgba(34, 60, 80, 1);
    border-radius: 25px;
}

#section-4 .bg-img1 {
    background-image: url('@/assets/images/sections/4/adler.jpg')
}
</style>