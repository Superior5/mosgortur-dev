<template>
    <div id="my-slider" class="relative">
      <Carousel v-if="banners.length > 1"
        ref="myCarousel"
        @slide-start="$emit('slide-start')"
        class="h-full"
        :items-to-show="1"
        :wrap-around="true"
      >
        <Slide v-for="banner in banners" :key="banner">
          <BlocksBanner class="md:px-60px" :banner="banner" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <template v-else>
        <BlocksBanner v-for="banner in banners" :key="banner.link" :banner="banner" />
      </template>
      <div class="absolute lg:(w-1/2 bottom-10px pl-60px pb-20px !justify-start) flex justify-center w-full md:(-bottom-30px) -bottom-30px">
        <div class="flex w-1/2 gap-5px">
         
          <div v-for="item in myCarousel?.data.slidesCount.value" class="bg-regular-0/50 transition duration-500 rounded-[11px] h-4px flex-grow-1"
          :class="{'!bg-regular-0 w-1/3': currentSlide == item}"
          :key="item">
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  const banners = ref([
  {
      title: 'Подмосковный лагерь “Радуга»',
      date: 'Программа для школьников «Время креатива»',
      price: 'Развиваем креативное мышление и личностные качества ребенка через творческие инструменты: актерское мастерство, сценографию, хореографию, ораторское искусство.',
      // isDayCamp: true,
      include: [
        'с 27 октября по 2 ноября',
        '7–17 лет',
        '42 000 руб.',
        'Можно оплатить сертификатом',
      ],
      image: '/banners/newRaduga.png',
      link: 'https://online.mosgortur.ru/basket#/Basket?departureCities=-1&destination=1_460&tour=100000781&date=27.10.24&duration=7&hotelScheme=1_6_3339_830_1_0_7&adultCount=1&&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=1_0_0_3_3339_134601_41_460_667_830_1_1_6&currency=RUB'
  },

  {
      title: 'Осенние каникулы в лучших детских лагерях!»',
      date: 'Используйте сертификат до 31 октября — вернуться можно до 15 ноября',
      // price: 'Возвращаем режим после каникул! 9 дней приключений в Затерянном мире, чтобы ребенок через игру вернулся к школьному графику и зарядился энергией на весь год.',
      // isDayCamp: true,
      include: [
        'Осенние смены',
        'Забронировать лагерь, можно до 31.10.2024',
        'Путешествие должно быть завершено 15.11.2024',
      ],
      image: '/banners/bannerFall.webp',
      link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%20%2724&Durations=7&Durations=9&Durations=10&Dates=05.10.2024&Dates=06.10.2024&Dates=16.10.2024&Dates=26.10.2024&Dates=27.10.2024&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration='
  }
  ])

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  const myCarousel = ref(null);
  const currentSlide = computed(() =>
    myCarousel.value ? myCarousel.value.data.currentSlide.value + 1 : ""
  );
  </script>
  
  <style>
  #my-slider {
    @apply relative;
  }
  
  .carousel .carousel__pagination {
    @apply relative m-0 bottom-20px;
  }
  
  .carousel .carousel__viewport,
  .carousel .carousel__track {
    @apply h-full;
  }
  
  .carousel .carousel__prev,
  .carousel .carousel__next {
    @apply bg-regular-3 rounded-1/2 h-50px w-50px m-0 md:flex hidden;
  }
  
  .carousel .carousel__pagination-button::after {
    @apply block content-[''] w-8px h-8px rounded-1/2 bg-white/20;
  }
  
  .carousel .carousel__pagination-button:hover::after,
  .carousel .carousel__pagination-button--active::after {
    @apply bg-white;
  }
  </style>