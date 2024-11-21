<template>

    <div v-if="route.name != 'index'" class=" gradient-bacgkround-nav">
        <div class="container py-30px pl-15px">
            <div class="flex">
                <a :href="route.name" class="flex gap-12px text-white items-center font-bold font-mulish text-24px">
                    <IconsNewMainArrow class="!w-32px" />
                    <span>{{ titles[route.name] }}</span>
                </a>

            </div>
        </div>
        <div class="md:rounded-t-[0px] rounded-t-[20px] bg-white">
            <div class="container">
                <div class="flex gap-12px justify-center pt-24px pb-28px font-bold font-mulish text-24px">
                    <nuxt-link to="/" class="flex gap-30px">
                        <IconsNewMainArrow />
                        <p class="md:block hidden font-normal font-ptsans text-16px">Вернуться назад</p>
                    </nuxt-link>
                </div>
                <PagesNewMainSearchForm v-if="route.name == 'kids' || route.name == 'tours-low-cost'" />
                <TourIframe v-if="route.name == 'tours'" />
                <HotelIframe v-if="route.name == 'hotels'" />
                <ForeignIframe v-if="route.name == 'foreign-tours'" />
            </div>
        </div>
    </div>
    <template v-else>
        <div class="gradient-bacgkround">
            <div class="py-24px container grid md:(hidden) gap-y-36px gap-x-18px grid-cols-3">
                <div v-for="(card, index) in cards" :key="card.title" @click="toggleIconColor(index)"
                    class="relative flex flex-col justify-start items-center gap-15px">
                    <nuxt-link :href="card.link" class="absolute top-0 left-0 right-0 bottom-0"></nuxt-link>
                    <div :class="{ 'bg-white': activeIndex === index }"
                        class="border-1 border-white text-white transition-all rounded-[15px] flex justify-center items-center w-80px h-80px">
                        <component :is="card.icon" :isActive="activeIndex === index" />
                    </div>
                    <p class="font-ptsans font-bold leading-18px md:text-left text-white text-center">{{ card.title }}
                    </p>
                </div>
            </div>
            <div
                class="py-24px container hidden md:(grid grid-cols-6 gap-x-20px bg-transparent) gap-y-36px gap-x-18px grid-cols-3">
                <div v-for="(card, index) in cards" :key="card.title" @click="navigateTo(card.link, {
                    external: true
                })" class="relative cursor-pointer flex flex-col justify-start items-center gap-15px">
                    <div
                        class="border-1 border-white transition-all hover:(bg-white !text-regular-0)  text-white rounded-[15px] flex justify-center gap-20px items-center w-full h-80px">
                        <component :is="card.icon" />
                        <p class="font-ptsans font-bold leading-18px md:text-left  text-center">{{ card.title }}
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </template>

    <div v-if="toursStore.tours.length && !toursStore.noTours" class="container">
        <PagesMainFieldResult v-if="toursStore.tours.length && !toursStore.noTours" class="mt-40px" />
    </div>
    <PagesMainNoResult v-if="toursStore.noTours" />



</template>

<script setup>
import TourIframe from "./tour-iframe.vue";
import HotelIframe from "./hotel-iframe.vue";
import ForeignIframe from "./foreign-iframe.vue";

const toursStore = useToursStore();

const route = useRoute()
const activeIndex = ref(null);

const titles = {
    'kids': 'Детские лагеря',
    'tours': 'Туры',
    'tours-low-cost': 'Спецпредложения',
    'new-main-tours': 'Туры',
    'new-main-hotels': 'Отели',
    'foreign-tours': 'Загрантуры',
}

function toggleIconColor(index) {
    activeIndex.value = index;
    console.log(activeIndex.value);

}
onBeforeRouteLeave(() => {
  toursStore.noTours = false;
});
const cards = [
    {
        title: 'Туры',
        link: '/tours',
        icon: resolveComponent('IconsNewMainTour')
    },
    {
        title: 'Отели',
        link: '/hotels',
        icon: resolveComponent('IconsNewMainHotel')
    },
    {
        title: 'Детские лагеря',
        link: '/kids',
        icon: resolveComponent('IconsNewMainCamp')
    },
    {
        title: 'Акции',
        link: '/tours-low-cost',
        icon: resolveComponent('IconsNewMainSpecial')
    },
    {
        title: 'Экскурсии',
        link: 'https://online.mosgortur.ru/excursion/',
        icon: resolveComponent('IconsNewMainExcursion')
    },
    {
        title: 'Загрантуры',
        link: '/foreign-tours',
        icon: resolveComponent('IconsNewMainForeign')
    },

]
</script>

<style scoped>
.gradient-bacgkround {
    background: linear-gradient(#ff7865, #fcd17c);
}

.gradient-bacgkround-nav {
    background: linear-gradient(#ff7865 0 5%, #fcd17c 25%);
}

.arrow-left {
    -webkit-mask: url(@/assets/images/icons/arrow.svg) no-repeat center;
    mask: url(@/assets/images/icons/arrow.svg)no-repeat center;
}

.arrow-left {
    @apply -translate-x-8px;
}
</style>