<template>
    <div class="container mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Туры с минимальными
            доплатами*</h3>

        <div class="grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                <div class="h-108px bg-[#CCFFFF] rounded-[10px] flex flex-col justify-center items-center">
                    <img :src="card.icon" alt="картинка">
                </div>
                <p v-html="card.title" class="font-bold mt-12px"></p>
            </div>
        </div>
        <div class="mt-30px flex flex-col gap-5px text-15px text-[#9E9E9E] leading-22px">
            <p>*Мы предлагаем подборки туров с ориентировочной стоимостью 80 000, 120 000 и 160 000 рублей. Обращаем
                ваше
                внимание, что указанные суммы являются ориентировочными и могут измениться. Итоговая стоимость тура
                будет зависеть от актуальных условий поставщиков на момент бронирования, а также от возможного выбора
                дополнительных услуг по вашему желанию. Точная цена будет подтверждена при оплате. Данный расчет носит
                информационный характер и не является публичной офертой.</p>
        </div>
    </div>

</template>

<script setup>

const cards = [
    {
        title: 'от 80 000 руб',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-6/plane.png'
    },
    {
        title: 'от 120 000 руб',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-6/heart.png'
    },
    {
        title: 'от 180 000 руб',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-6/beach.png'
    }
]
</script>