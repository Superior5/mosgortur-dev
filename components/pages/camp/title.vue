<template>
  <div>
    <div class="flex justify-between">
      <div class="flex gap-30px">
        <h1 class="font-bold md:text-30px text-22px font-mulish">
          Лагерь "Нива"
        </h1>
        <div
          class="flex items-center justify-center w-34px h-34px bg-rarely-4 rounded-[50px]"
        >
          <img src="@/assets/images/icons/fire.svg" alt="" />
        </div>
      </div>
      <div class="flex gap-18px font-notosans">
        <div class="p-10px flex gap-16px cursor-pointer">
          <img src="@/assets/images/icons/heart.svg" alt="" />
          <span class="md:inline hidden">В избранное</span>
        </div>
        <div class="p-10px flex gap-16px cursor-pointer">
          <img src="@/assets/images/icons/share.svg" alt="" />
          <span class="md:inline hidden">Поделиться</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-20px font-ptsans">
      <div class="flex gap-18px items-center">
        <blocks-blue-button
          class="flex text-sm gap-6px py-2px px-6px rounded-[4px]"
        >
          <img src="@/assets/images/icons/geo-tag.svg" alt="" />
          <!-- <span v-if="isMobile()">Открыть карту</span> -->
          <span>Краснодарский край, г. Анапа, ул. Крымская, д. 22</span>
        </blocks-blue-button>
        <span class="md:inline hidden">(120 км. от МКАД)</span>
      </div>
      <div
        class="flex items-center gap-6px bg-regular-3 rounded-[30px] px-16px py-5px"
      >
        <IconsInfo />
        Только от 12 лет
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped></style>