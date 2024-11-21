<template>
  <div id="successull-payment" class="container">
    <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
    <div class="flex flex-col items-center">
      <div class="md:mb-20px mb-16px">
        <div>
          <img
            class="md:h-92px h-[67px]"
            src="@/assets/images/failed-payment/failed.png"
            alt="Оплата не прошла"
          />
        </div>
      </div>
      <div class="md:mb-36px mb-16px">
        <div
          class="md:mb-18px mb-16px children:(text-center font-mulish font-bold text-16px leading-[18px] md:text-24px md:leading-[30.12px])"
        >
          <h5>Операция по оплате заявки, не прошла.</h5>
          <h5>Проверьте корректность вводимых данных и попробуйте снова.</h5>
        </div>
        <div class="children:(text-center text-18px font-ptsans)">
          <p>
            Если ошибка повторится - обратитесь к менеджеру команды МОСГОРТУР.
          </p>
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
const breadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Оплата", link: false },
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