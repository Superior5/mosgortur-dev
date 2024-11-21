<template>
    <section v-if="tours.length"  id="section-8" class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-39px">Категории лагерей</h3>
        <div class="flex gap-30px overflow-x-auto overflow-y-clip scroll-style">
            <div v-for="(tab, i) in tabs" :key="tab" @click="chooseTab(tab)"
                :class="{ 'border-regular-0 text-regular-0': tab == actTab }"
                class="font-notosans flex items-center whitespace-nowrap transition-all rounded-[5px] py-5px px-12px select-none cursor-pointer border-1">
                {{ tab }}
            </div>
        </div>
        <div class="mt-39px md:(grid grid-cols-2) lg:grid-cols-3  font-mulish flex flex-col gap-40px">
            <TransitionGroup name="fade">
                <div class=" overflow-hidden" v-for="item in actTours[0].banners" :key="item.link">
                    <div :style="`background-image: url('${adminStore.adminUrl}/${item?.gallery[0].image}');`"
                        class="bg-no-repeat bg-cover w-full md:h-250px h-210px rounded-[10px]" />
                        <h4 class="font-extrabold text-18px mt-13px mb-20px">{{ item.title }}</h4>
                    <nuxt-link target="_blank" :href="item.link">
                        <BlocksButton class="w-full !rounded-[10px] opacity-90 h-47px flex items-center justify-center">
                            <p class="leading-20px font-bold">
                                от {{ priceFormatter(item.price) }} ₽
                            </p>
                        </BlocksButton>
                    </nuxt-link>


                    <!-- {{ actTours }} -->
                </div>
            </TransitionGroup>
        </div>
        <!-- <BlocksButton filling class="w-full font-normal mt-35px">Смотреть все горящие туры</BlocksButton> -->
    </section>
</template>
<script setup>
const adminStore = useAdminStore()
const route = useRoute()
const tabs = ref([])
const tours = ref([])
const actTours = ref([])
const actTab = ref(null);

onMounted(async () => {
    await adminStore.getAllBannerTabs();

    tours.value = adminStore.bannerTabs.filter(el => el.type == "kids").reverse()

    
    actTab.value = tours.value[0].title
    tabs.value = tours.value.map((el) => {
        return el.title
    })

    actTours.value = tours.value.filter(el => {
        return el.title == actTab.value
    })
});
const chooseTab = (tab) => {
    actTab.value = tab
    actTours.value = tours.value.filter(el => {
        return el.title == actTab.value
    })
}
</script>
<style>
#section-4 .icon-span>svg {
    @apply w-32px h-32px;
}


.shadow-angel {
    box-shadow: 5px 4px 32px 26px rgba(34, 60, 80, 1);
    border-radius: 25px;
}

#section-4 .bg-img1 {
    background-image: url('@/assets/images/sections/4/adler.jpg')
}
</style>