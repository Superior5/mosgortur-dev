<template>
  <div id="filters-header" class="">
    <div
      class="grid lg:flex justify-between justify-items-center md:(grid-cols-2 gap-10px) grid-cols-1 text-15px items-center gap-24px"
    >
      <BlocksPrice
        filling
        class="py-9px h-40px w-full cursor-pointer md:max-w-240px"
        @click="switchPriceList"
      >
        <div
          v-if="interfaceStore.showPriceList"
          class="flex justify-center gap-10px"
        >
          Скрыть календарь цен
          <img class="w-18px" src="@/assets/images/icons/close.svg" alt="" />
        </div>
        <span v-else>Смотреть календарь цен</span>
      </BlocksPrice>
      <div class="font-ptsans">
        Нашли {{ toursStore.mapTours.length }} предложений от
        {{ priceFormatter(toursStore.minMaxPrices[0]) }} руб
      </div>
      <!-- <div
        class="font-ptsans items-center flex cursor-pointer gap-10px py-5px px-10px border-2 border-rarely-4 rounded-[4px]"
      >
        Сначала дешевые
        <img src="@/assets/images/icons/arrow.svg" alt="" />
      </div> -->
      <!-- <blocks-blue-button class="flex gap-10px">
            Смотреть на карте
            <img src="@/assets/images/icons/geo-tag.svg" alt="">
         </blocks-blue-button> -->
    </div>
    <PriceList
      v-if="toursStore.priceList.length && interfaceStore.showPriceList"
    />
  </div>
</template>
<script setup>
import PriceList from "./price-list.vue";
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();

const switchPriceList = async () => {
  if (!toursStore.priceList.length) {
    interfaceStore.loadData = true;
    await toursStore.getPriceList();
    interfaceStore.loadData = false;
  }

  interfaceStore.showPriceList = !interfaceStore.showPriceList;
};
</script>