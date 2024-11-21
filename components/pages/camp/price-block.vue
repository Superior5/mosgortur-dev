<template>
  <div id="price-block-tour">
    <div
      :class="actModal == true ? 'bottom-0' : '-bottom-[100%]'"
      class="price-block-tour__book"
    >
      <div class="container">
        <div class="relative">
          <img
            @click="actModal = false"
            src="@/assets/images/icons/close.svg"
            class="xl:hidden block absolute top-20px right-20px"
            alt=""
          />
          <div>
            <div class="flex gap-6px items-start md:pr-0 pr-25px">
              <img src="@/assets/images/icons/success-check.svg" alt="" />
              Полная и частичная оплата сертификатом
            </div>
            <div class="mt-10px flex gap-6px items-start text-regular-1">
              <IconsInfo class="w-12px" />
              Подробнее о сертификатах
            </div>
            <div class="flex mt-20px justify-between mb-5px text-16px">
              <span class="font-bold">от 100 000 ₽</span>
              <BlocksOldPrice>148 000 ₽</BlocksOldPrice>
            </div>
            <div class="flex justify-between items-center">
              <span>4 312 /день</span>
              <span
                class="px-8px py-4px rounded-[5px] font-bold bg-regular-4 text-white"
                >Скидка -25%</span
              >
            </div>
          </div>
          <div>
            <div class="xl:mt-25px mt:mt-0 mt-20px">6 смен на лето</div>
            <div
              class="my-8px px-12px py-8px bg-rarely-2/30 rounded-[8px] border border-rarely-1"
            >
              1- я смена 01.06...
            </div>
            <div class="text-regular-0 mb-20px">Осталось: 15 мест</div>
            <div
              class="bg-regular-0 xl:mb-10px md:mb-0 mb-10px text-white font-bold text-center w-full py-12px rounded-[6px] uppercase"
            >
              забронировать
            </div>
          </div>
          <div>
            <div
              class="text-white bg-regular-5 font-bold justify-center items-center w-full py-10px rounded-[6px] uppercase flex gap-15px"
            >
              <img src="@/assets/images/icons/whatsapp.svg" alt="" />
              Написать нам
            </div>
            <div class="md:flex hidden mb-10px mt-15px gap-6px items-start">
              <img src="@/assets/images/icons/like.svg" alt="" />
              Бесплатное бронирование без комиссии и предоплат
            </div>
            <div class="md:flex hidden gap-6px items-start">
              <img src="@/assets/images/icons/like.svg" alt="" />
              Бесплатная отмена
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-block xl:hidden block">
      <div class="container">
        <div>
          <div @click="actModal = true" class="mobile-block__btn">
            выбрать смену
          </div>
          <div class="mobile-block__btn">
            <img src="@/assets/images/icons/whatsapp.svg" alt="" />
            <span class="md:block hidden">Написать нам</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const actModal = ref(false);
</script>
<style>
#price-block-tour .mobile-block {
  @apply w-full left-0 fixed bottom-0;
}

#price-block-tour .mobile-block .container > div {
  backdrop-filter: blur(10px);
  @apply py-16px rounded-t-10px bg-white/20 flex justify-center gap-20px;
}

#price-block-tour .mobile-block .mobile-block__btn {
  @apply bg-regular-0 text-14px text-white font-bold text-center max-w-165px w-full py-12px rounded-[6px] uppercase;
}

#price-block-tour .mobile-block .mobile-block__btn:last-child {
  @apply bg-regular-5 justify-center md:(w-full px-0) py-10px px-10px w-auto items-center flex gap-15px;
}

#price-block-tour .price-block-tour__book {
  @apply xl:(block w-325px static) w-full left-0 z-2 fixed transition-all duration-500;
}

#price-block-tour .price-block-tour__book .container > div {
  @apply py-30px md:px-40px px-30px text-13px xl:block grid items-center shadow-2 xl:rounded-[10px] rounded-t-[10px] md:(grid-cols-3 gap-40px) grid-cols-1 bg-white;
}
</style>