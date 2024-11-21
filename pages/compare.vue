<template>
    <div class="container mt-60px flex flex-col gap-30px">
        <BlocksFavoriteCard v-for="(tour, i) in toursStore.toursCompare" :tour="tour" :key="'' + i + tour.Key"
          :hotel="getTourHotel(tour)" :visible-costs="visiblePrice == '' + i + tour.Key"
          @switchVisiblePrices="switchVisiblePrices(tour, i)" :dateForBasket="dateForBasket(tour)"
          @showTourInfo="showTourInfo = tour" @showHotelInfo="showHotelInfo = tour" />
    </div>
</template>

<script setup>
const toursStore = useToursStore();

const showHotelInfo = ref(false);
const showTourInfo = ref(false);

const dateForBasket = (tour) => {
  const date = new Date(tour.StartDate).toLocaleDateString("en-GB");
  return (date.substring(0, 6) + date.slice(-2)).replace(/\//gi, ".");
};

const switchVisiblePrices = async (tour, i) => {
  const service = getTourHotel(tour);
  if (visiblePrice.value == "" + i + tour.Key) return (visiblePrice.value = "");

  const dynamicParams =
    new URLSearchParams({
      PageNumber: toursStore.pageNumber,
      PageSize: 1000,
      Durations: tour.Duration,
      HotelScheme: JSON.stringify([
        {
          TemplateId: service.Id,
          TotalTourDuration: tour.Duration,
          DurationInNight: service.DurationInNight,
          Code: service.Hotel.Key,
          PacketKey: service.PacketId,
          PartnerKey: service.HotelDetails[0].PartnerId,
          Http: service.Http,
          GDSProviderId: service.RemoteId,
        },
      ]),
      TourKey: tour.Key,
      TourDuration: tour.Duration,
      Dates: dateForBasket(tour),
    }) + tour.Types.reduce((str, el) => (str += `&TourType=${el}`), "");

  const { data } = await useMyFetch(
    "/TourSearchOwin/TourForWeb/search/simple?" +
    toursStore.inputParams.replace(
      /(TourType=-?[0-9]*&)|(Durations=[0-9]*&)|(Dates=-?[^a-z]*&)/g,
      ""
    ) +
    dynamicParams
  );
  service.HotelDetails = getTourHotel(data.Result[0]).HotelDetails;

  visiblePrice.value = "" + i + tour.Key;
};

</script>