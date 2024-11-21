<template>
  <section id="section-9" class="md:mt-150px mt-100px">
    <div class="container">
      <BlocksH2 class="md:text-32px text-20px">С нами сотрудничают</BlocksH2>
      <Carousel
        :autoplay="3000"
        :itemsToScroll="1"
        snapAlign="start"
        :wrapAround="interfaceStore.partners.length >= 2"
        class="md:mt-80px mt-24px partners-slide"
        :breakpoints="breakpoints"
      >
        <Slide v-for="item in interfaceStore.partners" :key="item.id">
          <a :href="item.link" class="max-h-full max-w-full">
            <img :src="adminStore.adminUrl + '/' + item.image" alt="" />
          </a>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>
<script setup>
const interfaceStore = useInterfaceStore();
const adminStore = useAdminStore();

onMounted(async () => {
  await interfaceStore.getTours(4);
});

const breakpoints = ref({
  998: {
    itemsToShow: 6,
  },
  700: {
    itemsToShow: 4,
  },
  500: {
    itemsToShow: 3,
  },
  100: {
    itemsToShow: 2,
  },
});
const partners = ["r-d", "reco", "alean", "tinkoff", "megafon", "delfin"];
</script>

<style>
.partners-slide .carousel__slide {
  display: flex;
  justify-content: center;
  max-height: 112px;
  align-items: center;
  padding: 0 20px;
}

/* .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */
</style>