<template>
  <BlocksModal @close="$emit('close')" classes="container">
    <div id="modal-how-get-certificate">
      <div class="md:mb-32px mb-16px text-center px-20px pt-20px">
        <h2 class="h-2 <md:text-16px">
          Как купить тур с использованием сертификата?
        </h2>
      </div>
      <div
        class="flex flex-col md:text-18px text-16px items-center max-w-355px mx-auto"
      >
        <div class="list">
          <div v-for="(el, i) in list" :key="el">
            <span>{{ i + 1 }}</span>
            <div v-html="el"></div>
          </div>
        </div>
        <div
          class="flex w-full md:(mt-50px gap-22px) mt-40px text-center flex-col gap-16px"
        >
          <!-- <p class="font-bold font-mulish text-16px">
                        К какому туру его можно применить?
                    </p>

                    <BlocksButton filling class="w-full relative uppercase text-13px md:leading-33px leading-20px">
                        <a class="w-full h-full absolute top-0 left-0" href="https://online.mosgortur.ru/tours">
                        </a>
                        Поехать на отдых с ребенком
                    </BlocksButton>
                    Или
                    <BlocksButton filling class="w-full uppercase relative text-13px md:leading-33px leading-20px">
                        <a class="w-full h-full absolute top-0 left-0" href="https://online.mosgortur.ru/tours">
                        </a>
                        Отправить ребенка в детский лагерь
                    </BlocksButton> -->
          <nuxt-link
            @click="$emit('close')"
            target="_blank"
            to="https://mosgortur.ru/lok/navigator"
          >
            <BlocksButton
              filling
              class="w-full uppercase relative text-13px md:leading-33px leading-20px"
            >
              Подробнее
            </BlocksButton>
          </nuxt-link>
        </div>
      </div>
    </div>
  </BlocksModal>
</template>
 
<script setup>
const list = [
  'Выберите <a href="https://online.mosgortur.ru/tours">тур</a> онлайн или обратитесь в наш <a href="https://online.mosgortur.ru/contacts">офис</a>',
  "Укажите номер сертификата в заявке",
  "Получите скидку по сертификату",
  "Оплатите тур",
];
</script>
<style>
#modal-how-get-certificate .list > div {
  @apply flex not-last:mb-12px items-center md:(gap-20px not-last:mb-20px) gap-10px;
}

#modal-how-get-certificate .list div span {
  @apply min-w-30px font-bold text-16px h-30px border-1 border-rarely-1 flex items-center justify-center rounded-1/2;
}

#modal-how-get-certificate .list div a {
  @apply text-regular-1;
}
</style>