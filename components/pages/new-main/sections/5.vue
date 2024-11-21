<template>
    <div class="container md:mt-100px mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Отели</h3>
        <div class="md:hidden  grid grid-cols-3 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-[#FFFFCC] rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
            </div>
        </div>
        <div  class="md:grid hidden grid-cols-3 mt-40px gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <a :href="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></a>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-200px card-illustration p-30px bg-rarely-[#FFFFCC] rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BlocksLinkButton :link="'/hotels'">
        <p class="font-bold">К поиску отеля</p>
    </BlocksLinkButton>
</template>

<script setup>

const cards = [
    {
        title: 'Семейные',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&minNights=7&maxNights=8&minPrice=0&maxPrice=0&features=24&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-5/new-family.png',
        bg: '/new-main-section-5/family-main.png',
    },
    {
        title: 'Подмосковные',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&resorts=3799&adults=1&kids=12&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-5/new-pool.png',
        bg: '/new-main-section-5/camp.png',
    },
    {
        title: 'Пляжные',
        link: '/hotels#module6?action=search&moduleId=18ff2377-4055-4f60-b31c-baa9d92230e9&country=150&city=832&adults=1&kids=10&dateFrom=18/10/2024&dateTo=20/10/2024&minNights=7&maxNights=8&minPrice=0&maxPrice=0&beachLines=1,2,3&minHotelRating=0&currency=RUB&tourFormRequiredFields=0&moduleType=mgt&isOnlyCharter=false&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=false',
        icon: '/new-main-section-5/new-beach.png',
        bg: '/new-main-section-5/pool-main.png',
    }
]
</script>


<style scoped>
.bgSize {
    background-size: 85px;
}
</style>
