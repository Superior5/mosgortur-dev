<template>
    <div class="container">
        <BlocksBreadCrumbs class="children:(!text-15px)" :bread-crumbs="breadCrumbs" />
        <div class="w-full mt-36px flex justify-center">
            <div
                class="xl:max-w-630px md:max-w-576px font-ptsans leading-25px text-16px tracking-[0.02em] flex flex-col">
                <h3 class="font-mulish text-20px font-bold text-center mb-30px">Уважаемые родители!</h3>
                <div class="flex flex-col gap-30px">
                    <p>
                        Осенние каникулы, которые принесут радость и новые впечатления вам и вашему ребенку! Мы понимаем, что бюджет имеет значение, поэтому собрали для вас туры, где сертификат покрывает основные расходы, а доплаты сведены к минимуму.
                    </p>
                    <div class="flex flex-col gap-10px">
                        <p class="font-bold">Наши предложения:</p>
                        <p class="italic">Туры для сопровождающего + 1 ребенка</p>
                        <nuxt-link
                            target="_blank"
                            to="https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&hotels=48594,110503,86982,10223,74084,47960,14472,46731,135900,117099&adults=2&dateFrom=27/10/2024&dateTo=01/11/2024&minNights=5&maxNights=5&minHotelRating=0&hotelMeals=115,116,121,112&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false"
                            class="w-full self-center max-w-248px">
                            <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                                Выбрать тур
                            </BlocksButton>
                        </nuxt-link>
                        <p class="italic">Туры для сопровождающего + 2 детей</p>
                        <nuxt-link
                            target="_blank"
                            to="https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&hotels=86982,48547,46780,10223,117099,74084,135900,123923,47960,119264&adults=1&kids=10,10&dateFrom=29/10/2024&dateTo=04/11/2024&minNights=6&maxNights=6&minHotelRating=0&hotelMeals=116,115,121,112&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false"
                            class="w-full self-center max-w-248px">
                            <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                                Выбрать тур
                            </BlocksButton>
                        </nuxt-link>
                    </div>
                    <BlocksInform class="p-10px">
                        <div>
                            <p class="font-bold">Важный момент:</p>
                        <p>
                        Используйте сертификат до 31 октября. Вернуться из поездки ребенок должен до 15 ноября.
                        </p>
                        </div>
                    </BlocksInform>
                    
                    <p>
                       Мы выбрали лучшие предложения, чтобы вы могли быть уверены в том, что ваш ребенок будет в надежных руках и получит максимум удовольствия от отдыха.
                    </p>
                    <p>
                        Подарите своему ребенку каникулы, которые он запомнит надолго, а вы — спокойствие и уверенность в своем выборе. Забронируйте тур уже сегодня!
                    </p>    
                    <img class="self-center xl:w-414px md:w-337px w-293px"
                        src="@/assets/images/illustrations/family.webp" alt="">
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
const breadCrumbs = [
    { name: 'Главная', link: '/' },
    { name: 'Информация', link: false },
]
</script>