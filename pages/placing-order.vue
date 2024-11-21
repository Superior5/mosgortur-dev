<template>
   <div id="placing-order" class="container">
      <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
      <BlocksButton filling class="flex items-center gap-10px uppercase text-sm">
         <IconsSliderArrow class="transform rotate-180" /> вернуться назад
      </BlocksButton>
      <div class="xl:mt-50px mt-36px flex md:flex-row flex-col justify-between gap-24px font-ptsans">
         <div class="md:max-w-450px w-full">
            <div>
               <div class="md:text-18px mb-20px">Ваш заказ:</div>
               <h1 class="h-2">
                  Лагерь "Нива" длинный заголовок и название лагеря
               </h1>
               <div class="flex md:(flex-col items-start gap-0) items-center gap-20px">
                  <blocks-blue-button class="flex text-sm my-12px gap-6px py-2px px-4px rounded-[4px]">
                     <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                     <span class="md:( !inline) !hidden">Краснодарский край, г. Анапа, ул. Крымская, д. 22</span>
                     <span class="md:( !hidden) !inline">Открыть карту</span>
                  </blocks-blue-button>
                  <div>(120 км. от МКАД)</div>
               </div>
               <div class="md:text-18px mt-8px">2 реб. / Superior Twin корп. "Рассвет" / 2-местный /</div>
            </div>
            <div class="xl:mt-50px mt-36px">
               <div class="md:text-18px font-bold mb-16px">Даты заезда:</div>
               <div class="flex items-center xl:gap-20px gap-10px">
                  <div class="text-sm flex flex-col gap-5px">
                     <span class="xl:text-20px md:text-18px font-bold">19 сентября, пн.</span>
                     с 15:00
                  </div>
                  <div class="w-32px h-1px bg-black"></div>
                  <div class="text-sm flex flex-col gap-5px">
                     <span class="xl:text-20px md:text-18px font-bold">26 сентября, сб.</span>
                     до 21:00
                  </div>
               </div>
            </div>
            <div class="md:text-18px xl:mt-50px mt-36px !leading-30px">
               <div class="font-bold mb-5px">Ваши услуги:</div>
               <div>Отдельный номер в лагере (20 м2) в номере:</div>
               <ul class="list-disc flex flex-col pl-25px">
                  <li>2 двухярусные кровати</li>
                  <li>2 основных места и 1 дополнительное</li>
                  <li>5-ти разовое питание для всех смен!</li>
               </ul>
               <div class="flex flex-wrap text-15px xl:mt-50px md:mt-36px mt-20px gap-y-10px gap-x-20px">
                  <div v-for="item in roomServices" :key="item"
                     class="flex px-8px cursor-pointer py-5px rounded-[6px] bg-[#F5F5F5]">
                     <img class="mr-12px" src="@/assets/images/icons/cloakroom.svg" />
                     <span>{{ item }}</span>
                  </div>
               </div>
            </div>
            <div class="md:text-18px xl:mt-50px mt-36px !leading-30px">
               <div class="font-bold mb-5px">Дополнительные услуги:</div>
               <ul class="list-disc flex flex-col pl-25px">
                  <li v-for="addService in addServices" :key="addService">{{ addService }}</li>
               </ul>
            </div>
         </div>
         <div class="md:max-w-450px w-full">
            <div>
               <div class="font-bold md:text-18px mb-18px">Общая сумма:</div>
               <div class="flex gap-30px">
                  <span class="text-22px font-mulish font-bold">210 000 ₽</span>
                  <BlocksOldPrice class="text-20px">348 000 ₽</BlocksOldPrice>
               </div>
               <div class="flex my-15px items-center gap-27px text-15px">
                  4 312 /день
                  <span class="px-8px py-4px rounded-[5px] font-bold bg-regular-4 text-white">Скидка -25%</span>
               </div>
               <div class="flex gap-6px items-center md:pr-0 pr-25px">
                  <img class="w-16px" src="@/assets/images/icons/success-check.svg" alt="">
                  Полная и частичная оплата сертификатом
               </div>
               <div class="mt-10px flex gap-6px items-center text-regular-1">
                  <IconsInfo class="w-12px" />
                  Подробнее о сертификатах
               </div>
               <div class="mt-30px max-w-220px !leading-16px">
                  <div class="md:flex hidden mb-11px gap-6px items-center">
                     <img src="@/assets/images/icons/like.svg" alt="">
                     Бесплатная отмена
                  </div>
                  <div class="md:flex hidden gap-6px items-center">
                     <img src="@/assets/images/icons/like.svg" alt="">
                     Бесплатное бронирование
                     без комиссии и предоплат
                  </div>
               </div>
            </div>
            <div class="xl:mt-50px mt-36px">
               <div class="font-bold md:text-18px mb-24px">Способы оплаты:</div>
               <div class="flex gap-24px">
                  <div class="w-full md:h-115px h-90px flex justify-center rounded-[10px] items-center shadow-2">
                     <img src="@/assets/images/icons/sbp.svg" alt="">
                  </div>
                  <div class="w-full md:h-115px h-90px flex justify-center rounded-[10px] flex-col items-center shadow-2">
                     <img src="@/assets/images/icons/bank-card.svg" alt="">
                     Банковской картой
                  </div>
               </div>
               <div class="xl:mt-50px mt-36px text-center">
                  <BlocksButton class="text-sm uppercase md:w-auto w-full font-bold py-12px px-35px">оплатить
                  </BlocksButton>
               </div>
            </div>
            <div class="text-15px !leading-22px text-rarely-1 xl:mt-50px mt-36px">
               Нажимая «Оплатить», вы соглашаетесь с <a class="text-regular-1" href="">пользовательским соглашением</a>,
               условиями бронирования.
               <br>
               Мы подтвердим бронирование и спишем указанную сумму с вашей карты. <br>
               Данные предоставлены <a class="text-regular-1" href="">продавцами-партнёрами</a>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const breadCrumbs = [
   { name: 'Главная', link: '/' },
   { name: 'Краснодарский край / Анапа', link: false },
   { name: 'Лагерь "Нива"', link: '/camp' },
   { name: 'Оформление заказа', link: false },
]

const roomServices = ["Гардероб", "Wi-Fi", "Баня", "Бар"]

const addServices = ['Уроки английского (+1500 руб.);',
   'уроки дайвинга (+1500 руб.);',
   'катание на лошадях (+1500 руб.);',
   'индивидуальная фотосессия (+1500 руб.);']
</script>
<style scoped></style>