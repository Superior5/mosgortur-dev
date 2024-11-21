<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Категории туров</h3>

        <div class="grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div class="h-108px bg-[#CCFFFF] rounded-[10px] flex flex-col justify-center items-center">
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
        title: 'Регулярные рейсы',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=11&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=true&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/plane.png'
    },
    {
        title: 'Доступная среда',
        link: '/tours#module6?action=search&moduleId=68ea30c6-f7a0-4a8c-9775-ccd5a3063a02&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=27&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/heart.png'
    },
    {
        title: '1-2 пляжная линия',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-6/beach.png'
    }
]
</script>