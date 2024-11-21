<template>
    <section id="section-8" class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-39px">Категории лагерей</h3>
        <div class="flex gap-30px overflow-x-auto overflow-y-clip scroll-style">
            <div v-for="(tab, i) in tabs" :key="tab" @click="actTab = i"
                :class="{ 'border-regular-0 text-regular-0': i == actTab }"
                class="font-notosans transition-all rounded-[5px] py-5px px-12px select-none cursor-pointer border-1">
                {{ tab }}
            </div>
        </div>
        <div class="mt-39px md:(grid grid-cols-2) lg:grid-cols-3 font-mulish flex flex-col gap-40px">
            <transition-group name="fade">
                <div class="rounded-[10px] flex flex-col justify-between overflow-hidden" v-for="item in actTours" :key="item.link">
                    <BlocksToursCarousel :image="item.image"/>
                    <h4 class="font-extrabold text-18px mt-13px mb-20px">{{ item.title }}</h4>
                    <nuxt-link target="_blank" :href="item.link">
                        <BlocksButton class="button-gradient w-full !rounded-[10px] opacity-90 h-47px flex items-center justify-center">
                            <p class="leading-20px font-bold">
                                от {{ priceFormatter(item.price) }} ₽
                            </p>
                        </BlocksButton>
                    </nuxt-link>
                </div>
            </transition-group>
        </div>
    </section>
</template>
<script setup>
const route = useRoute()
const tabs = ref([
    'Спортивные', 'Оздоровительные', ' Творческие'
])
const tours = [
    [
        {
            title: 'Солнечный Park Hotel & Spa номер 1',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
    ],
    [
        {
            title: 'Солнечный Park Hotel & Spa номер 2',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
    ],
    [
        {
            title: 'Солнечный Park Hotel & Spa номер 3',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
        {
            title: 'Солнечный Park Hotel & Spa',
            image: 'SunnyParkHotel&Spa',
            price: 23100,
            link: 'https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799,832&hotels=74084&adults=1&kids=10&dateFrom=02/09/2024&dateTo=09/09/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false'
        },
    ]
]


const actTab = ref(0);
const actTours = ref(tours[0])
watch(
  actTab,
  (v) => {
    actTours.value = tours[v]
  }
);
</script>
<style>
#section-4 .icon-span>svg {
    @apply w-32px h-32px;
}

.fade-enter-active,
.fade-leave-active {
   @apply transition-opacity duration-200 ease;
}

.fade-enter-from,
.fade-leave-to {
   @apply opacity-0 absolute;
}

.shadow-angel {
    box-shadow: 5px 4px 32px 26px rgba(34, 60, 80, 1);
    border-radius: 25px;
}

#section-4 .bg-img1 {
    background-image: url('@/assets/images/sections/4/adler.jpg')
}
</style>