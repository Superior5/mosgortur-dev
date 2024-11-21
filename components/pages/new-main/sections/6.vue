<template>

    <div class="container md:mt-100px mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Загрантуры</h3>

        <div class="md:hidden  grid grid-cols-2 gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <div :style="{ backgroundImage: `url(${card?.icon})` }"
                    class="relative bg-no-repeat bgSize bg-right-bottom h-108px p-12px bg-[#E1F4FF] rounded-[10px] flex flex-col">
                    <a :href="card.link" target="_blank" class="absolute top-0 left-0 right-0 bottom-0"></a>
                    <p v-html="card.title" class="font-bold text-14px leading-15px"></p>
                </div>
            </div>
        </div>

        <div  class="md:grid hidden grid-cols-2 mt-40px gap-x-20px gap-y-30px">
            <div v-for="card in cards" :key="card.title" class="relative">
                <nuxt-link :to="card.link" class="absolute z-10 top-0 left-0 right-0 bottom-0"></nuxt-link>
                <div :style="{ backgroundImage: `url(${card?.bg})` }"
                    class="h-200px card-illustration p-30px bg-[#CCFFFF] rounded-[10px] flex flex-col">

                    <p class="font-bold font-mulish" v-html="card.title.replace('<br>', '')"></p>
                    <div class="font-ptsans flex gap-8px items-center font-bold text-regular-0">
                        <p>Узнать подробнее</p>
                        <IconsNewMainLinkArrow />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BlocksLinkButton v-if="route.name == 'index'" :link="'/foreign-tours'">
        <p class="font-bold">К поиску тура</p>
    </BlocksLinkButton>
</template>

<script setup>
const route = useRoute();
const cards = [
    {
        title: 'Туры по миру',
        link: '/foreign-tours',
        icon: '/new-main-section-6/foreign.png',
        bg: '/new-main-section-6/map.png'
    },
    {
        title: 'Горящие туры',
        link: '/foreign-tours#module6?action=search&moduleId=419f5cf9-c594-417a-89a6-c627ea666e6e&country=119&city=832&adults=1&minNights=7&maxNights=8&minPrice=0&maxPrice=0&minHotelRating=0&hotelMeals=117&currency=RUB&tourFormRequiredFields=2&moduleType=mgt&isOnlyCharter=true&isOnlyRegular=false&isInstantBook=true&isOnlyAccommodation=false&isRailwaySupported=false&ticketsIncluded=true',
        icon: '/new-main-section-6/fire.png',
        bg: '/new-main-section-6/bag.png'
    }
]
</script>

<style scoped>
.bgSize {
    background-size: 85px;
}
</style>