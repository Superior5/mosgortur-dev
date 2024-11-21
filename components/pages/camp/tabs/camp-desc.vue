<template>
   <div id="camp-desc">
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
      <div class="md:(mt-55px flex-row) flex-col mt-30px flex justify-between gap-20px items-center">
         <div class="md:max-w-520px w-full">
            <div class="mb-30px">
               <h2>Описание лагеря</h2>
               <div class="">
                  Детский оздоровительный лагерь Дубравушка располагается в Воскресенском районе в 70 км от Москвы
                  в
                  живописном лесном массиве рядом с Москва-рекой.
               </div>
            </div>
            <div class="mb-30px">
               <h2>Как добраться до лагеря</h2>
               <div class="flex flex-col gap-22px">
                  <div class="flex gap-25px items-start">
                     <img src="@/assets/images/icons/airplane.svg" class="w-30px h-30px" alt="">
                     От аэропорта г. Анапа, далее на такси или маршрутным такси № 3 до автовокзала г. Анапа, далее
                     на
                     маршрутном такси № 2,7, 9, 24,25 до остановки "Пансионат "Нива".
                  </div>
                  <div class="flex gap-25px items-start">
                     <img src="@/assets/images/icons/bus.svg" class="w-30px h-30px" alt="">
                     От железнодорожного вокзала г. Анапа на автобусе до автовокзала г. Анапа, далее на маршрутном
                     такси
                     № 2,7, 9, 24,25 до остановки "Пансионат "Нива".
                  </div>
               </div>
            </div>
            <div class="mb-30px">
               <h2>Лечение</h2>
               <div class="flex gap-25px items-start">
                  <img src="@/assets/images/icons/chest.svg" alt="">
                  <div class="">
                     ✔ заболевания органов дыхания; <br>
                     ✔ заболевания сердечно-сосудистой системы;<br>
                     ✔ заболевания нервной системы;<br>
                     ✔ заболевания желудочно-кишечного тракта;<br>
                     ✔ заболевания костно-мышечной системы и соединительной ткани.</div>
               </div>
            </div>
         </div>
         <div class="">
            <div class="flex flex-col gap-8px mb-30px">
               <div class="flex gap-16px">
                  Возраст
                  <span class="font-bold">12 - 18 лет</span>
               </div>
               <div class="flex gap-16px">
                  Сезон
                  <span class="font-bold">осень - зима</span>
               </div>
               <div class="flex flex-wrap gap-16px">
                  Категории
                  <div class="text-14px p-5px rounded-[6px] border !border-black" v-for="category in categories"
                     :key="category">
                     {{ category }}</div>
               </div>
            </div>
            <div class="">
               <h2>График смен</h2>
               <div class="">
                  <div v-for="(season, k) in seasons" :key="k" class="flex gap-10px">
                     <span>{{ k }}</span>
                     <span>{{ season }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="mt-55px">
         <h2>Инфраструктура лагеря</h2>
         <div class="md:(grid gap-20px) gap-10px flex overflow-auto grid-cols-3 ">
            <img class="rounded-[10px] w-full" v-for="i in 6" :key="i"
               src="@/assets/images/basket-tabs/1/infrastructure-1.png" alt="">
         </div>
         <div
            class="bg-regular-3 md:(py-40px px-50px flex-row gap-40px) gap-25px flex-col p-15px rounded-[12px] mt-40px flex">
            <div v-for="(infrastructure, k) in infrastructures" :key="k" class="">
               <h5 class="flex gap-10px font-bold md:(text-20px mb-20px) mb-12px text-18px mb-20px"> <img
                     src="@/assets/images/icons/like.svg" alt="">
                  {{ k }}</h5>
               <div class="">{{ infrastructure }}</div>
            </div>
         </div>
         <div class="mt-40px leading-7 md:(overflow-visible mb-40px h-auto)"
            :class="actShow ? 'mb-40px' : 'h-150px overflow-hidden'">
            Территория - 48 га! Прекраснейший парк, на территории которого расположены: <br />
            ✔ 4 комфортабельных корпусов круглогодичного действия: «Приморский», «Сокол», «Солнечный», «Космос»-
            летние
            эстрады (костровые)<br />
            ✔ танцевальный зал - 12х18,5 м (покрытие - ламинат)<br />
            ✔ открытые танцевальные площадки<br />
            ✔ 4 шт (тротуарная плитка): 20х70 м у корпуса "Космос", 35х40 м у корпуса "Солнечный", 40х30 м у
            корпуса
            "Приморский", 25х20 м у корпуса "Сокол".- детская площадка «Сказка» с водопадом<br />
            ✔ дом творчества – центр Арт-терапии- музей истории здравницы- библиотека<br />
            ✔ часовня им. Серафима Саровского- мемориал памяти «Дети войны»<br />
            ✔ питьевая галерея (бювет с минеральной водой «Витязевская» - собственная скважина)- кинозал- крытый
            спортивный зал - 12х26 м (покрытие - доска) без кондиционера, с татами, высота потолка - 6,20 метра.
            - площадка для стритбола<br />
            ✔ 15х10 м, у корпуса "Космос" (покрытие - песок).<br />
            ✔ открытый бассейн - 25х16 м (5 дорожек, 1,80 м - глубина)<br />
            ✔ У каждого корпуса универсальная площадка 23х42 для мини-футбола, баскетбола, волейбола с резиновым
            покрытием "Торнадо-практик", экскурсионное бюро, теле-радио студия «Юниор»,<br />
            ✔ Wi-Fi в каждом корпусе.
         </div>
         <button class="md:hidden mb-40px flex justify-center gap-10px p-7px border rounded-[10px] w-full items-center"
            @click="actShow = !actShow">
            Развернуть
            <IconsSliderArrow class="transform" :class="actShow ? 'rotate-270' : 'rotate-90'" />
         </button>
         <div>
            <h5 class="font-bold text-20px mb-30px">Дополнительно можно заказать:</h5>
            <div class="flex justify-between overflow-auto gap-15px">
               <PagesCampCard class="min-w-150px" v-for="i in 4" :key="i"
                  :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
            </div>
         </div>
      </div>
      <div class="mt-55px">
         <h2>Пляж</h2>
         <div class="md:grid flex overflow-auto grid-cols-3 gap-20px">
            <img v-for="i in 6" :key="i" src="@/assets/images/basket-tabs/1/beach-1.png" alt="">
         </div>
         <div class="md:mt-40px mt-30px text-18px max-w-750px leading-6">
            Собственный, галечный, расположен в 200 м от лагеря, широкий и удобный. Вход в воду плавный, есть зона
            для
            купания малышей. Имеется теневой навес, медицинский пункт, кабинки для переодевания, биотуалет и душ с
            пресной водой
         </div>
         <div class="md:mt-40px mt-30px">
            <h5 class="font-bold text-20px mb-30px">Дополнительно можно заказать:</h5>
            <div class="flex overflow-auto justify-between gap-15px">
               <PagesCampCard class="min-w-150px" v-for="i in 4" :key="i"
                  :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const actShow = ref(false)
const seasons = {
   '1- я смена': '01.06.2023 - 21.06.2023',
   '2- я смена': '24.06.2023 - 14.07.2023',
   '3- я смена': '17.07.2023 - 06.08.2023',
   '4- я смена': '09.08.2023 - 29.08.2023'
}

const categories = ['творческий', 'спортивный', 'английский', 'языковой']

const infrastructures = {
   'Хорошая экология': 'Целебный хвойный воздух укрепляет здоровье ребят. Проживание в двухэтажных домах в окружении тихого и уютного соснового леса.',
   'Лучшие тренеры': 'Насыщенная программа лагеря под чутким руководством любимых тренеров, которые сами провели все детство в лагере',
   'Всё для обучения': 'Наш компьютерный лагерь для детей оборудован аудиториями, спортзалом, залом для занятий хореографией'
}
</script>


<style>

#camp-desc .carousel__pagination {
   top: -40px;
}

#camp-desc .carousel__viewport,
#camp-desc .carousel__track {
   height: 100%;
}
</style>