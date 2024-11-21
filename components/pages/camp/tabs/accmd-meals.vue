<template>
   <div id="accmd-meals">
      <h2>Питание</h2>
      <div class="flex gap-12px">
         <BlocksMyCarousel class="md:max-w-2/3">
            <Slide v-for="slide in 6" :key="slide" class="slider">
               <img src="@/assets/images/basket-tabs/1/slider-1.png" alt="" loading="lazy"
                  class="object-cover rounded-[10px] w-full h-full" />
            </Slide>
         </BlocksMyCarousel>
         <div class="md:grid hidden grid-cols-2 gap-12px w-1/3">
            <img v-for="Img in 6" :key="Img" src="@/assets/images/basket-tabs/1/slider-1.png" alt="" loading="lazy"
               class="object-cover rounded-[10px] w-full h-full" />
         </div>
      </div>
      <div
         class="flex relative items-start gap-20px duration-1000 <md:(flex-col items-center max-h-[216px] overflow-hidden) mt-50px"
         :class="{ '<md:(!max-h-[1000px])': actDesc }">
         <div class="md:max-w-2/3">
            <div class="mb-10px">
               Питание в лагере 5-ти разовое, сбалансированное и разнообразное.
            </div>
            Приготовление блюд производится в соответствии с двухнедельной
            меню-раскладкой, которое разрабатывается с учётом пожелания детей и их
            родителей, а так же учитываются медицинские рекомендации.В лагере
            соблюдается питьевой режим (минеральная, негазированная и родниковая
            вода). Полностью новая кухня и столовая. Практически все готовится на
            дорогостоящих паровых конвекторах - при готовке на пару продукты
            сохраняют их витаминный и минеральный состав, что позволяет нашим
            ребятам оставаться здоровыми!
         </div>
         <BlocksButton class="w-1/3 <md:(w-2/3) uppercase flex gap-10px text-13px justify-center items-center" filling><img
               src="@/assets/images/icons/book.svg" alt="" /> смотреть меню
         </BlocksButton>
         <div class="w-full h-130px absolute bottom-0 transition-all duration-400 buttonShadowActive"
            :class="{ 'buttonShadowDisactive': actDesc }"></div>
      </div>
      <div class="w-full hidden <md:block">
         <button
            class="w-full bg-[white] h-36px flex font-notosans mt-20px py-[15px] rounded-[6px] border-1 border-solid border-gray-300 tracking-[0.39px] h-[75%] gap-10px text-13px justify-center items-center"
            @click="actDesc = !actDesc">
            {{ actDesc ? 'Свернуть' : 'Развернуть' }}
            <IconsSliderArrow class="transform transition-all duration-100 rotate-90"
               :class="{ 'rotate-[-90deg]': actDesc }" />
         </button>
      </div>
      <div class="mt-50px">
         <h5 class="font-bold text-20px mb-30px">Дополнительно можно заказать:</h5>
         <div class="flex justify-between overflow-auto gap-15px">
            <PagesCampCard class="min-w-150px" v-for="i in 4" :key="i"
               :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
         </div>
      </div>
      <h2 class="mt-80px">Проживание и размещение</h2>
      <div
         class="bg-regular-3 md:(py-40px px-50px flex-row gap-40px) gap-25px flex-col p-15px rounded-[12px] mt-40px flex">
         <div v-for="(infrastructure, k) in accommodation" :key="k" class="">
            <h5 class="flex gap-10px font-bold md:(text-20px mb-20px) items-start mb-12px text-18px mb-20px">
               <img src="@/assets/images/icons/like.svg" alt="" /> {{ k }}
            </h5>
            <div class="">{{ infrastructure }}</div>
         </div>
      </div>
      <div class="flex mt-50px <md:(flex-col items-center)" v-for="(room, i) in rooms" :key="i">
         <div class="w-1/2 <md:(w-full)">
            <CarouselGallery />
         </div>
      </div>
      <div class="mt-50px">
         <h5 class="font-bold text-20px mb-30px">Дополнительно можно заказать:</h5>
         <div class="flex justify-between overflow-auto gap-15px">
            <PagesCampCard class="min-w-150px" v-for="i in 4" :key="i"
               :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
         </div>
      </div>
   </div>
</template>

<script setup>
import CarouselGallery from '../carousel-gallery.vue'
const actDesc = ref(false);

const rooms = [
   {
      title: "5-ти местный стандарт",
      size: "20 м2",
      included: [
         "2 двухярусные кровати",
         "2 основных места и 1 дополнительное",
         "5-ти разовое питание для всех смен!",
      ],
      services: ["Гардероб", "Wi-Fi", "Баня", "Бар"],
      options: [
         {
            title: "3-местный номер (размещение в удобствах)",
            pricePerNight: 10900,
         },
         {
            title: "5-местный номер (размещение в удобствах)",
            pricePerNight: 12300,
         },
      ],
   },
   {
      title: "5-ти местный стандарт",
      size: "20 м2",
      included: [
         "2 двухярусные кровати",
         "2 основных места и 1 дополнительное",
         "5-ти разовое питание для всех смен!",
      ],
      services: [
         "Гардероб",
         "Гардероб",
         "Гардероб",
         "Гардероб",
         "Wi-Fi",
         "Баня",
         "Бар",
      ],
      options: [
         {
            title: "3-местный номер (размещение в удобствах)",
            pricePerNight: 10900,
         },
         {
            title: "5-местный номер (размещение в удобствах)",
            pricePerNight: 12300,
         },
      ],
   },
];

const accommodation = {
   "Ежедневная уборка": "Идеальная чистота каждого номера по всем требованиям!",
   "Душ и туалет на 2 комнаты":
      "В каждой комнате есть 2 прикроватные тумбы и шкаф для хранения вещей.",
   "Вожатые живут в одном корпусе с детьми": "",
};
</script>

<style>
#accmd-meals .button-shadow__active {
   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}

#accmd-meals .button-shadow__disactive {
   bottom: -1000px;
}
</style>