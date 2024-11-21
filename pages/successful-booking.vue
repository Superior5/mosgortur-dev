<template>
  <div id="successull-payment" class="container">
    <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
    <div class="flex flex-col items-center">
      <div class="md:mb-20px mb-16px">
        <div>
          <img
            class="md:h-auto h-[67px]"
            src="@/assets/images/successful-payment/ok-hand.png"
            alt="Оплата прошла успешно"
          />
        </div>
      </div>
      <div class="md:mb-36px mb-16px">
        <div
          class="md:mb-18px mb-16px children:(text-center font-mulish font-bold text-16px leading-[18px] md:text-24px md:leading-[30.12px])"
        >
          <h5>Ваша заявка на бронирование принята</h5>
          <h5>Мы обязательно с вами свяжемся после проверки данных</h5>
        </div>
        <div class="children:(text-center text-18px font-ptsans)">
          <p>Команда Мосгортур</p>
        </div>
      </div>
      <div class="w-240px h-40px">
        <nuxt-link to="/">
          <BlocksButton
            filling
            class="h-full w-full text-13px uppercase flex justify-center items-center"
          >
            <span
              class="arrow-left transition-all transform scale-85 rotate-90 h-16px w-16px mr-8px bg-regular-0"
            ></span>
            <span>Вернуться на главную</span>
          </BlocksButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const breadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Бронирование", link: false },
];
</script>
<style scoped>
#successull-payment .arrow-left {
  -webkit-mask: url(../assets/images/icons/arrow.svg) no-repeat center;
  mask: url(../assets/images/icons/arrow.svg) no-repeat center;
}

#successull-payment button:hover .arrow-left {
  @apply -translate-x-8px;
}
</style>