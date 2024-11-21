<template>
    <div class="container">
        <BlocksBreadCrumbs class="children:(!text-15px)" :bread-crumbs="breadCrumbs" />
        <div class="w-full mt-36px flex justify-center">
            <div
                class="xl:max-w-630px md:max-w-576px font-ptsans leading-25px text-16px tracking-[0.02em] flex flex-col">
                <h3 class="font-mulish text-20px font-bold text-center mb-30px">Уважаемые родители!</h3>
                <div class="flex flex-col gap-30px">

                    <p>
                        Мы понимаем, насколько важно для вас здоровье вашего ребенка. Ваш сертификат можно использовать до 31 октября для получения реабилитационных и оздоровительных услуг
                    </p>
                    <BlocksInform class="p-10px flex flex-col">
                        Пожалуйста, помните, что отдых должен завершиться до 15 ноября включительно.   
                    </BlocksInform>
                    <p>
                        Мы здесь, чтобы помочь вам выбрать лучшее место для восстановления и отдыха.
                        Чтобы вам было легче найти подходящее место, мы подготовили специальную подборку санаториев, которые предлагают услуги реабилитации и восстановления. В этих санаториях вы найдете всё необходимое для комфортного и безопасного отдыха
                    </p>
                    <p class="italic">Отличные варианты для реабилитации:</p>
        
                    <p>
            
                        <span class="font-bold">АМАКС Курорт «Красная Пахра»</span>: Подмосковье. Великолепные программы для оздоровления сердечно-сосудистой системы, опорно-двигательного аппарата и многое другое. Вас ждут уютные номера, крытый бассейн, спа-салон, спортивные зоны и разнообразные развлечения для детей и взрослых.
                    </p>
                    <p>
                        <span class="font-bold">Санаторий «Лесная Поляна»</span>: Минеральные воды Полноценное лечение болезней нервной системы, ЖКТ, кожи и органов дыхания. Также в распоряжении гостей - крытый бассейн, спортивные залы, бювет с минеральной водой и зона отдыха.
                    </p>
                    <p>
                        <span class="font-bold">Центр спорта «Эволюция»</span>: Евпатория. Идеальное место для активного отдыха с возможностями реабилитации. На огромной территории у моря вы найдете теннисные корты, бассейны, спа-центр и многое другое для всей семьи.
                    </p>
                    <nuxt-link
                        target="_blank"
                        to="https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&hotels=50796,96070,97600,48894&adults=2&dateFrom=28/10/2024&dateTo=04/11/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false"
                        class="w-full self-center max-w-248px">
                        <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                            Посмотреть все санатории 
                        </BlocksButton>
                    </nuxt-link>
                    <p class="italic">
                        Мы также позаботились о том, чтобы найти отели с доступной средой, где каждый сможет чувствовать себя комфортно
                    </p>
                    <p>
                        <span class="font-bold">АЗИМУТ Переславль</span>: Расположен в Подмосковье, отель предлагает широкий спектр услуг для всей семьи, включая коттеджи с собственными саунами и джакузи. Отель отлично подходит для отдыха с детьми и домашними животными.
                    </p>
                    <p>
                        <span class="font-bold">Gamma Sirius</span>: Расположен в Сочи, отель имеет номера с балконами, частный пляж и все удобства для комфортного отдыха с детьми и маломобильными гостями.
                    </p>
                    <p>
                        <span class="font-bold">Бархатные Сезоны (Спортивный квартал)</span>: Отель в Адлере предлагает различные виды размещения, включая номера для маломобильных гостей. Отель расположен рядом с Олимпийским парком и имеет доступ к частному пляжу.
                    </p>
                    <nuxt-link
                        target="_blank"
                        to="https://online.mosgortur.ru/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&hotels=97306,119264,122816,122815,86972,97600,123908,86970,115705,50796&adults=2&dateFrom=28/10/2024&dateTo=04/11/2024&minNights=7&maxNights=7&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false"
                        class="w-full self-center max-w-248px">
                        <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                            Перейти к выбору отеля
                        </BlocksButton>
                    </nuxt-link>
                    <p class="text-center max-w-420px self-center">
                        Спасибо, что выбрали наш сервис!
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