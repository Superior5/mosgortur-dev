<template>
    <div class="container">
        <BlocksBreadCrumbs class="children:(!text-15px)" :bread-crumbs="breadCrumbs" />
        <div class="w-full mt-36px flex justify-center">
            <div class="xl:max-w-630px md:max-w-576px font-ptsans leading-25px text-16px tracking-[0.02em] flex flex-col" >
                <h3 class="font-mulish text-20px font-bold text-center mb-50px">Добро пожаловать в мир лагеря дневного пребывания!</h3>
                <div class="info-block flex flex-col gap-30px">
                    <p>
                        Что такое лагерь дневного пребывания? Это уникальное место, где ваш ребенок проведет лето, погруженный в интересные и разнообразные активности, не покидая дома на ночь. В нашем лагере, каждый день наполнен увлекательными мероприятиями, занятиями и играми, созданными для веселого и полезного времяпровождения.
                    </p>
                    <p>
                        Почему это интересно ребенку? В лагере дневного пребывания ваш ребенок окажется в дружной и поддерживающей атмосфере, где он сможет не только наслаждаться играми и занятиями, но и общаться с друзьями, развивать свои навыки и открывать для себя новые увлекательные хобби.
                    </p>
                    <p>
                        Почему это интересно родителям? Лагерь дневного пребывания предлагает более чем просто заботливое воспитание вашего ребенка. Здесь ваш ребенок будет под присмотром опытных инструкторов, которые помогут ему развиваться и расти в безопасной и поддерживающей среде. При этом, вы сможете спокойно продолжать свои дела, зная, что ваш малыш в надежных руках.
                    </p>
                    <p>
                        Распорядок дня в нашем лагере составлен таким образом, чтобы каждый момент был заполнен смыслом и полезными занятиями:
                    </p>
                    <div class="border-l-3 border-regular-0/80 pl-40px md:block flex flex-col gap-10px">
                        <p><span>9:00-9:30</span> - Встреча детей, зарядка на свежем воздухе</p>
                        <p><span>9:30-10:30</span> - Утренний сбор, обсуждение плана на день. Завтрак</p>
                        <p><span>10:30-12:00</span> - Работа по плану лагеря, общественно полезный труд, работа кружков и секций</p>
                        <p><span>12:00-13:00</span> - Спортивные соревнования, игры на свежем воздухе, оздоровительные процедуры</p>
                        <p><span>13:00-15:30</span> - Обед, дневной сон, тихие игры, свободное время</p>
                        <p><span>15:30-17:30</span> - Полдник, работа по планам лагеря, работа кружков и секций</p>
                        <p><span>17:30-18:00</span> - Подведение итогов дня, награждение победителей</p>
                        <p><span>18:00-18:30</span> - Встреча родителей</p>
                    </div>
                    <div>
                        В стоимость смены входит:
                        <ul class="list-disc pl-30px">
                            <li>Трехразовое питание (завтрак, обед, полдник)</li>
                            <li>Билеты на экскурсии и аттракционы</li>
                            <li>Спортивный и досуговый инвентарь</li>
                            <li>Материалы для творчества, канцелярия</li>
                            <li>Вечеринка в конце смены с угощениями</li>
                            <li>Памятные призы, подарки и награды</li>
                        </ul>
                    </div>
                    <nuxt-link target="_blank" to="https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=376&Season=%D0%9B%D0%B5%D1%82%D0%BE%20%2724&Durations=12&Dates=10.06.2024&Dates=24.06.2024&Dates=08.07.2024&Dates=22.07.2024&Dates=05.08.2024&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=">
                        <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                            Выбрать лагерь
                        </BlocksButton>
                    </nuxt-link>
                    <p class="text-center max-w-420px self-center">
                        Присоединяйтесь к нам в лагере дневного пребывания и подарите вашему ребенку незабываемое лето, наполненное весельем, дружбой и развитием!
                    </p>
                    <img class="self-center xl:w-414px md:w-337px w-293px" src="@/assets/images/illustrations/family.webp" alt="">
                </div>

            </div>
        </div>

    </div>
</template>
<style>
.info-block div p span {
    @apply font-bold;
}
</style>
<script setup>
const breadCrumbs = [
    { name: 'Главная', link: '/' },
    { name: 'Информация', link: false },
    { name: 'Лагерь дневного пребывания', link: false },
]
</script>