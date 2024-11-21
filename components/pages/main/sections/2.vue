<template>
  <div
    class="container scroll-style overflow-auto flex lg:(grid !pb-50px mb-0) pt-50px !pb-25px mb-25px gap-26px grid-cols-3 children:(h-64px min-w-310px bg-regular-3 text-regular-0 font-ptsans justify-between pl-30px pr-8px flex items-center rounded-[10px])">
    <nuxt-link target="_blank" to="https://www.mos.ru/pgu/ru/services/link/3109/">
      <p class="leading-20px">
        Записаться в офис <br />
        Мосгортура
      </p>
      <img src="@/assets/images/icons/header-link.svg" alt="" />
    </nuxt-link>
    <nuxt-link target="_blank" to="https://widget.easyweek.io/mosgortur/84419/255957/users">
      <p class="leading-20px">
        Записаться в офисы продаж <br />
        в МФЦ “Мои путешествия”
      </p>
      <img src="@/assets/images/icons/header-link.svg" alt="" />
    </nuxt-link>
    <nuxt-link target="_blank" to="/question-answer">
      <p class="leading-20px">
        Часто задаваемые <br />
        вопросы
      </p>
      <img src="@/assets/images/icons/header-link.svg" alt="" />
    </nuxt-link>
  </div>
  <section id="section-2">
    <div class="container font-mulish">
      <div v-if="true" class="flex md:(flex-row) flex-col md:gap-20px gap-60px lg:m-0 mb-80px">
        <BlocksBannersCarousel class="md:(w-2/3) lg:min-h-380px w-full relative" />
        <div class="aside flex flex-col gap-20px md:(w-1/3) w-full">
          <div class="new relative flex flex-col justify-between flex">

            <nuxt-link class="absolute top-0 left-0 w-full h-full z-2" to="/family-tours"></nuxt-link>
            <div class="absolute top-0 left-0 w-full h-full z-0 gradient"></div>
            <!-- <img src="@/assets/images/sections/2/new-icon.png" alt="" /> -->
            <div class="relative top-0 left-0 w-full z-1 p-20px pt-9px pb-13px">
              <div class="max-w-220px text-black font-mulish mb-10px">
              <p class="font-bold md:text-18px text-13px leading-22px mb-5px">Отдыхайте всей семьей без лишних забот!</p>
              <p class="md:text-11px text-8px leading-13px font-normal">Туры, которые покрывают все основные
                расходы* — минимальные доплаты
                и максимум комфорта</p>
            </div>
            <div>
              <a target="_blank"
                href="/day-camp"
                class="text-white blur-link md:flex hidden font-notosans text-13px font-bold leading-33px w-[100%] h-40px flex justify-center items-center uppercase block bottom-22px z-0">
                подобрать отель
            </a>
            <p class="font-mulish mt-7px max-w-340px text-black text-6px">*Отсутствие значительных дополнительных расходов при выборе стандартных условий проживания. Пожалуйста, обратите внимание, что при выборе дополнительных услуг 
              или улучшенных условий размещения могут потребоваться дополнительные платежи. Точная стоимость будет уточняться при бронировании.</p>
            </div>
            </div>
            
          </div>
          <div class="discount relative flex flex-col justify-between p-20px pt-15px pb-16px">
            <nuxt-link class="absolute top-0 left-0 w-full h-full z-20"
              to="/inclusive-tours"></nuxt-link>
            <div class="font-mulish relative z-1 text-14px flex flex-col gap-9px  max-w-290px">
              <p class="font-bold text-21px leading-26px text-regular-0">С заботой о вашем отдыхе!</p>
              <p class="max-w-260px font-normal">Санатории с реабилитацией и отели 
                с доступной средой</p>
              <p class="font-bold">
                Используйте сертификат до 31.10.2024
              </p>
            </div>
            <img src="@/assets/images/sections/2/hands.png" class="absolute top-0 right-0 z-0" alt="">
            <BlocksButton filling class="w-full <lg:hidden flex justify-center items-center h-40px uppercase text-14px leading-33px font-bold">подобрать санаторий</BlocksButton>
          </div>
        </div>
      </div>
      <div v-if="interfaceStore.hotTours.length" class="flex md:gap-25px gap-10px mt-46px">
        <div class="flex md:(flex-row items-center text-22px) flex-col items-start gap-20px font-bold text-16px">
          <img src="@/assets/images/icons/fire.svg" alt="" />
          <span>Горящие <br />
            туры</span>
        </div>
        <div class="flex overflow-auto scroll-style">
          <BlocksHotTourCard v-for="(item, i) in interfaceStore.hotTours" class="min-w-306px" :key="item.id + i"
            :hot-tour="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const interfaceStore = useInterfaceStore();

onMounted(async () => {
  await interfaceStore.getTours(0);
});

const breakpoints = ref({
  1536: {
    itemsToShow: 4,
  },
  1280: {
    itemsToShow: 3,
  },
  1024: {
    itemsToShow: 2,
  },
  768: {
    itemsToShow: 2,
  },
  460: {
    itemsToShow: 1.5,
  },
});
</script>

<style scoped>
#section-2 .banner {
  
  @apply rounded-[10px]
}

#section-2 .gradient {
  @apply rounded-[10px];
  background: linear-gradient(90deg, #0C999F -40%, transparent);
}
#section-2 .illustration {
  @apply relative bg-no-repeat bg-cover bg-center h-full;
  background-image: url("@/assets/images/sections/2/kids-kanat.webp");
}

#section-2 .slider>div {
  @apply absolute lg:(bottom-60px left-100px text-32px) md:(left-20px text-25px) bottom-40px left-40px text-15px font-extrabold;
}

#section-2 .slider>div:last-child {
  @apply lg:(bottom-30px left-130px) md:bottom-25px left-50px bottom-30px;
}

#section-2 .slider>div:first-child>span {
  @apply absolute md:(top-20px left-40px) top-11px left-27px;
}

#section-2 .slider>div:last-child>span {
  @apply absolute md:(top-10px left-40px) top-6px left-22px;
}

#section-2 .aside>div {
  @apply bg-no-repeat bg-cover bg-center md:h-full md:text-22px text-15px font-bold rounded-[10px] h-140px;
}

#section-2 .aside>div>img {
  @apply mb-13px;
}

#section-2 .aside .new {
  color: white;
  display: flex;
  /* background-position: right; */
  background-image: url("@/assets/images/sections/2/family.webp");
}
#section-2 .aside .new .blur-link {
  width: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(15px);
}
#section-2 .aside .discount {
  background: linear-gradient(129.06deg, #FFF7F1 -0.07%, #FFFFCC 100%);
}

#section-2 .section-2__tour-cards {
  @apply flex pb-15px;
}
</style>