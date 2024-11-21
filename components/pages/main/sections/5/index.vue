<template>
  <section id="section-5" class="md:mt-150px mt-100px">
    <div class="container">
      <div class="body flex md:items-center items-end">
        <div
          class="flex xl:items-center items-start xl:(flex-row gap-50px ml-[12%]) md:(mb-0 ml-60px gap-0 ml-[17%] max-w-none) max-w-220px gap-11px mb-20px flex-col"
        >
          <h5 class="lg:text-20px leading-7 font-mulish font-bold">
            Лучшие каникулы для вашего ребенка – бронируйте детские лагеря сейчас!
          </h5>
          <!-- <div
            class="font-ptsans leading-7 xl:max-w-250px gap-7px items-start text-17px text-rarely-3 flex"
          >
            Узнай, как его использовать тут
          </div> -->
        </div>
        <a class="md:(text-14px w-auto) w-full" href="https://online.mosgortur.ru/kids?Durations=3&Durations=7&Durations=8&Durations=9&Durations=10&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%9E%D1%81%D0%B5%D0%BD%D1%8C%20%2724&Dates=05.10.2024&Dates=06.10.2024&Dates=26.10.2024&Dates=27.10.2024&Dates=02.11.2024&Dates=16.11.2024&Dates=17.11.2024&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=" target="_blank">
          <BlocksButton
            class="flex items-center w-full justify-center text-13px uppercase"
            filling
          >
          забронировать
            <IconsDoubleArrows />
          </BlocksButton>
        </a>
      </div>
    </div>
    <!-- <Modal
      @changeModal="(e) => (showModal = e)"
      @close="showModal = ''"
      :show="showModal == 'show-info'"
    /> -->
  </section>
</template>
<script setup>
import Modal from "./modal-how-get-certificate.vue";
const showModal = ref("");
</script>
<style scoped>
#section-5 .body {
  @apply bg-no-repeat bg-cover md:(border-2 border-[#23D6FB] bg-sert-desc py-0 h-100px flex-row text-left m-0 max-w-none) px-20px max-w-320px mx-auto pt-8px pb-30px text-right flex-col bg-sert-mobile rounded-[16px] relative flex justify-between;
}
</style>