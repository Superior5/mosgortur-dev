<template>
   <div class="xl:w-[calc(100%-345px)] w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
      <div id="additional-services">
      <h2 class="h-2">Дополнительные услуги</h2>
      <div class="additional-services__tab my-40px">
         <div class="additional-services__tab_headers">
         <div>Название</div>
         <div>Класс</div>
         <div>Туристы</div>
         <div>Цена</div>
         </div>
         <div class="additional-services__tab_body">
            <div v-for="i in 4" :key="i" class="additional-services__tab_row">
               <div>
                  22.01 Трансфер - а/п <br />
                  <span>Красная Поляна (верхний уровень)</span>
               </div>
               <div>
                  индив. машина <br />
                  1-3 чел
               </div>
               <div>
                  <BlocksDropList
                  @select="(el) => (selectedEl[i] = el)"
                  :list="list"
                  :pls="placeholder"
                  :selectedEl="selectedEl[i]"
                  />
               </div>
               <div>
                  + 1093 ₽ <br />
                  <span>за всех туристов</span>
               </div>
            </div>
         </div>
      </div>
      <BlocksButton filling class="w-full h-50px"
         >Перейти к оформлению заказа</BlocksButton
      >
      </div>
   </div>

</template>
<script setup>
const list = ref(["fred", "red", "rer"]);
const selectedEl = ref(["", "", "", ""]);
const placeholder = ref("Выбрать туриста");
</script>
<style scoped>
#additional-services .additional-services__tab_row,
#additional-services .additional-services__tab_headers {
  @apply grid grid-cols-[2fr,1fr,1fr,1fr];
}

#additional-services .additional-services__tab_headers {
  @apply text-neutral-600;
}

#additional-services .additional-services__tab_row > div,
#additional-services .additional-services__tab_headers > div {
  @apply py-14px px-16px;
}

#additional-services .additional-services__tab_row > div > span {
  @apply text-neutral-500;
}
</style>