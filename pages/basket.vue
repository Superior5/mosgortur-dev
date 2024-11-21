<template>
   <div id="basket" class="pt-30px">
      <div class="container">
         <h1 class="text-40px font-bold font-mulish">Бронирование</h1>
         <div class="flex gap-6px mt-40px">
            <div v-for="(step, i) in steps" @click="actStep = i" :key="step" class="flex items-center gap-6px">
               <div
                  class="py-16px px-24px cursor-pointer text-rarely-3 font-ptsans rounded-[10px] transition-all hover:bg-rarely-4"
                  :class="{ 'bg-regular-3 text-regular-0': actStep == i }">
                  {{ step.name }}
               </div>
               <img src="@/assets/images/icons/arrow-up-outline.svg" alt="" />
            </div>
         </div>
         <div class="flex xl:gap-20px items-start mt-26px">
                  <component v-if="steps[actStep].comp" :is="steps[actStep].comp" />
                  <div v-else class="xl:w-[calc(100%-345px)] w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
                  </div>
               
            <PagesCampPriceBlock />
         </div>
      </div>
   </div>
</template>
<script setup>
import AdditionalServices from "@/components/pages/basket/additional-services.vue";
import TouristInfo from "@/components/pages/basket/tourist-info.vue";
import Payment from "@/components/pages/basket/payment.vue";

const actStep = ref(0);
const steps = [
   { name: "Доп. услуги", comp: AdditionalServices },
   { name: "Оформление заказа", comp: "" },
   { name: "Данные туристов", comp: TouristInfo },
   { name: "Оплата", comp: Payment },
];
</script>
<style lang="">
</style>