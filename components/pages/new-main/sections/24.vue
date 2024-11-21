<template>
   <section id="section-8" class="container md:mt-100px mt-60px">
       <h3 class="font-900 font-mulish text-24px mb-39px">Рекомендуем</h3>
       <div class="flex gap-30px overflow-x-auto overflow-y-clip scroll-style">
           <div v-for="(tab, i) in tabs" :key="tab" @click="actTab = i"
               :class="{ 'border-regular-0 text-regular-0': i == actTab }"
               class="font-notosans flex items-center whitespace-nowrap transition-all rounded-[5px] py-5px px-12px select-none cursor-pointer border-1">
               {{ tab }}
           </div>
       </div>
       <div class="mt-39px md:(grid grid-cols-2) lg:grid-cols-3  font-mulish flex flex-col gap-40px">
           <TransitionGroup name="fade">
               <div class=" overflow-hidden" v-for="item in tours[actTab]" :key="item.link">
                   <div :style="`background-image: url('/new-main-section-18/${item.image}.jpg');`" class="bg-no-repeat bg-cover bg-center w-full md:h-250px h-210px rounded-[10px]"/>
                   <h4 class="font-extrabold text-18px mt-13px mb-20px">{{ item.title }}</h4>
                   <nuxt-link target="_blank" :href="item.link">
                       <BlocksButton class="w-full !rounded-[10px] opacity-90 h-47px flex items-center justify-center">
                           <p class="leading-20px font-bold">
                               от {{ priceFormatter(item.price) }} ₽
                           </p>
                       </BlocksButton>
                   </nuxt-link>
               </div>
           </TransitionGroup>
       </div>
       <!-- <BlocksButton filling class="w-full font-normal mt-35px">Смотреть все горящие туры</BlocksButton> -->
   </section>
</template>
<script setup>
const route = useRoute()
const tabs = ref([
   'Бассейн', 'Анимация', ' Доступная среда'
])

const tours = [
   [
       {
           title: 'Радуга',
           image: 'sport-1',
           price: 42000,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000781&date=27.10.24&duration=7&hotelScheme=1_6_3339_830_1_0_7&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=1_0_0_3_3339_134601_41_460_667_830_1_1_6&currency=RUB'
       },
       {
           title: 'Next Camp',
           image: 'sport-2',
           price: 31200,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000773&date=26.10.24&duration=9&hotelScheme=5_8_3298_833_10797_0_9&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=5_0_0_3_3298_132613_41_460_736_833_10797_1_8&currency=RUB'
       },
       {
           title: 'E-Camp (Relax & Fun)',
           image: 'sport-3',
           price: 42000,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000770&date=27.10.24&duration=7&hotelScheme=5_6_8134_746_10822_0_7&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=5_0_0_3_8134_95584_41_460_739_746_10822_1_6&currency=RUB'
       },
   ],
   [
       {
           title: 'Казачок, конный лагерь',
           image: 'art-1',
           price:  550000,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000767&date=26.10.24&duration=10&hotelScheme=2_9_8078_762_10993_0_10&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=3_0_0_3_381_95586_707_460_785_762_10993_1_9&currency=RUB'
       },
       {
           title: 'Дружба',
           image: 'art-2',
           price: 35000,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000785&date=26.10.24&duration=10&hotelScheme=3_9_8002_689_10944_0_10&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=3_0_0_3_8002_95550_41_460_1726_689_10944_1_9&currency=RUB'
       },
       {
           title: 'Start UP',
           image: 'art-3',
           price: 19900,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000776&date=02.11.24&duration=3&hotelScheme=16_2_3362_836_10798_0_3&adultCount=1&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=16_0_0_3_3362_132718_41_460_741_836_10798_1_2&currency=RUB'
       },
   ],
   [
       {
           title: 'FILLCAMP',
           image: 'half-1',
           price: 37990,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000774&date=27.10.24&duration=7&hotelScheme=10_6_8135_834_10929_0_7&adultCount=1&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=10_0_0_3_8135_132712_41_460_736_834_10929_1_6&currency=RUB'
       },
       {
           title: 'Инкубатор изобретателей',
           image: 'half-2',
           price: 43990,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000774&date=27.10.24&duration=7&hotelScheme=10_6_8135_834_10929_0_7&adultCount=1&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=10_0_0_3_8135_132712_41_460_736_834_10929_1_6&currency=RUB'
       },
       {
           title: 'Hashtag',
           image: 'half-3',
           price: 19990,
           link: '/basket#/Basket?departureCities=-1&destination=1_460&tour=100000775&date=02.11.24&duration=3&hotelScheme=16_2_3363_835_10798_0_3&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=16_0_0_3_3363_132718_41_460_741_835_10798_1_2&currency=RUB'
       },
   ]
]
const actTab = ref(0);
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