<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Детские лагеря</h3>
        <div class="md:hidden grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in toursByAge" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-regular-3 rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>

                </div>
            </div>
        </div>
        <div class="md:hidden grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in toursByTheme" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-regular-3 rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
            </div>
        </div>
        <div v-if="route.name === 'index'" class="md:grid hidden grid-cols-3 mt-40px gap-x-20px gap-y-30px">
            <div v-for="card in forMainTours" :key="card.title" class="relative">
                <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-190px card-illustration p-30px bg-[#FFEADA] rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="md:grid hidden grid-cols-3 mt-40px gap-x-20px gap-y-30px">
            <div v-for="card in toursByAge" :key="card.title" class="relative">
                <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-190px card-illustration p-30px bg-regular-3 rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <template v-if="route.name != 'index'">
        <NewMainMosHolBanner class="my-60px" />
        <div class="container">
            <div class="md:hidden grid grid-cols-3 gap-x-20px gap-y-30px">
                <div v-for="card in toursByTheme" :key="card.title" class="relative">
                    <div :style="{ backgroundImage: `url(${card?.icon})` }"
                        class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-rarely-4 rounded-[10px] flex flex-col">
                        <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                        <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                    </div>
                </div>
            </div>
            <div class="md:(grid grid-cols-3) hidden justify-between flex-wrap gap-20px">
                <div v-for="card in toursByTheme" :key="card.title" class="relative min-w-200px">
                    <a :href="card.link" class="absolute top-0 left-0 right-0 bottom-0 z-10"></a>
                    <div :style="{ backgroundImage: `url(${card?.image})` }"
                        class="h-200px card-illustration bg-regular-[#FFEADA] rounded-[10px] flex flex-col justify-between p-24px">
                        <p class="font-bold">{{ card.title }}</p>
                        <IconsNewMainLinkArrow class="text-regular-0" />
                    </div>
                </div>
            </div>
        </div>
    </template>

    <BlocksLinkButton v-else :link="'/kids'">
        <p class="font-bold">К поиску лагеря</p>
    </BlocksLinkButton>

</template>
<style>
.card-illustration {
    @apply relative bg-no-repeat bg-cover bg-right;
}

.card-item:last-child {
    margin-right: auto;
}
</style>

<style scoped>
.bgSize {
    background-size: 85px;
}
</style>

<script setup>
const route = useRoute()
const toursByAge = [
    {
        title: 'Детям <br> (6-10 лет)',
        link: '/kids?Durations=13&Durations=8&Durations=9&Durations=10&Durations=3&Durations=7&Durations=16&ChildAgesForCamp=6&ChildAgesForCamp=10&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=10-24&Season=11-24&Season=12-24&Season=1-25&Season=2-25&Season=4-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&Dates=26.04.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/kids-pictures/bear.png',
        bg: '/kids-pictures/bearBg.png',
    },
    {
        title: 'Школьникам <br> (11-14 лет)',
        link: '/kids?Durations=13&Durations=8&Durations=9&Durations=10&Durations=3&Durations=7&Durations=16&ChildAgesForCamp=11&ChildAgesForCamp=14&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=10-24&Season=11-24&Season=12-24&Season=1-25&Season=2-25&Season=4-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&Dates=26.04.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/kids-pictures/school.png',
        bg: '/kids-pictures/schoolBg.png',

    },
    {
        title: 'Подросткам <br> (15-17 лет)',
        link: '/kids?Durations=13&Durations=8&Durations=9&Durations=10&Durations=3&Durations=7&Durations=16&ChildAgesForCamp=15&ChildAgesForCamp=17&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=10-24&Season=11-24&Season=12-24&Season=1-25&Season=2-25&Season=4-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&Dates=26.04.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/kids-pictures/teen.png',
        bg: '/kids-pictures/teenBg.png',
    }
]

const forMainTours = [
    {
        title: 'Зимние каникулы',
        link: '/kids?Durations=7&Durations=9&Durations=13&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=12-24&Season=1-25&Season=2-25&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        bg: '/kids-pictures/winter-hol.png',
    },
    {
        title: 'Лагеря в МО',
        link: '/kids?Durations=7&Durations=8&Durations=9&Durations=13&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=10-24&Season=11-24&Season=12-24&Season=1-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        bg: '/kids-pictures/trees.png',
    },
    {
        title: 'Лагеря в городе',
        link: '/kids?Durations=7&Durations=9&Durations=13&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=12-24&Season=1-25&Season=2-25&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        bg: '/kids-pictures/city-camps.png',
    },
]

const toursByTheme = [
    {
        title: 'На 7 дней',
        link: '/kids?Durations=7&Durations=8&ChildAgesForCamp=6&ChildAgesForCamp=10&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=12-24&Season=1-25&Season=2-25&Season=10-24&Season=11-24&Season=4-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&Dates=26.04.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/kids-pictures/7day.png',
        image: '/kids-pictures/7dayBg.png',
    },
    {
        title: 'На 14 дней',
        link: '/kids?Durations=13&Durations=8&Durations=9&Durations=10&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=10-24&Season=11-24&Season=12-24&Season=1-25&Season=2-25&Season=4-25&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&Dates=27.12.2024&Dates=02.01.2025&Dates=08.02.2025&Dates=26.04.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        image: '/kids-pictures/14dayBg.png',
        icon: '/kids-pictures/14day.png'
    },
    {
        title: 'Зимние каникулы',
        link: '/kids?Durations=13&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=рб&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=12-24&Season=1-25&Season=2-25&Season=4-25&Dates=27.12.2024&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        image: '/kids-pictures/winterBg.png',
        icon: '/kids-pictures/winter.png'
    }
]


</script>