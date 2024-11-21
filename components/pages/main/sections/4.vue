<template>
  <section
    v-if="
      interfaceStore?.typeTours?.some((subArr) => subArr.tours.length === 4)
    "
    id="section-4"
    class="md:mt-150px mt-100px"
  >
    <div class="container">
      <BlocksH2 class="md:(text-32px !text-left) text-20px text-center"
        >Тип тура</BlocksH2
      >
      <div
        class="flex h-52px md:mt-70px mt-24px gap-50px items-center overflow-x-auto overflow-y-clip scroll-style"
      >
        <div
          class="flex gap-20px"
          v-for="(tab, i) in interfaceStore.typeTours"
          :key="tab.type + i"
        >
          <div
            v-if="tab.tours.length >= 4"
            @click="actTab = i"
            :class="{
              'border-b !border-regular-0 text-regular-0': i == actTab,
            }"
            class="cursor-pointer flex whitespace-nowrap pb-4px items-center gap-15px"
          >
            <span class="icon-span block w-32px h-32px" v-html="tab.icon" />
            <h6 class="md:text-18px texgt-16px font-medium">{{ tab.type }}</h6>
          </div>
        </div>
      </div>
      <div v-if="totalTours?.length >= 4" class="md:mt-45px mt-24px">
        <div
          v-if="previewTour"
          class="md:mt-45px mt-24px flex lg:(flex-row) flex-col md:gap-50px gap-24px"
        >
          <nuxt-link
            :to="previewTour.link"
            class="bg-no-repeat lg:(w-2/3 w-max-738px h-auto) md:(h-291px) w-full h-[168px] flex flex-col items-start bg-img1 gap-16px bg-center bg-cover rounded-[10px] p-30px"
            :style="{
              backgroundImage: `url(${adminStore.adminUrl}/${previewTour.image})`,
            }"
          >
            <div class="text-shadow md:text-36px text-24px text-white font-bold">
              {{ previewTour.title }}
            </div>
            <div
              class="font-ptsans font-bold py-2px px-9px text-white rounded-[6px] bg-regular-0"
            >
              от {{ priceFormatter(previewTour.price) }} руб.
            </div>
          </nuxt-link>
          <div
            class="flex lg:(!flex-col w-1/3) flex-row w-full overflow-x-auto scroll-style md:gap-50px gap-27px"
          >
            <nuxt-link
              :to="item.link"
              v-for="item in tours.slice(0, 3)"
              :key="item.id"
              class="lg:(min-w-[100%]) relative md:(min-w-[415px] block) flex flex-col justify-end w-[50%] cursor-pointer"
            >
              <div
                class="flex gap-10px md:(flex-row mb-0) mb-auto flex-col-reverse items-start"
              >
                <BlocksRatingCard v-if="item.rate">{{
                  item.rate
                }}</BlocksRatingCard>
                <span>
                  <h6 class="font-mulish md:text-18px text-16px font-bold">
                    {{ item.title }}
                  </h6>
                </span>
              </div>
              <BlocksBlueButton
                class="inline-flex gap-5px text-15px xl:(py-5px px-10px) my-10px max-w-full"
              >
                <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                <!-- <span v-if="isMobile()">Открыть карту</span> -->
                <span>{{ item.address }}</span>
              </BlocksBlueButton>
              <div
                class="flex md:(flex-row items-center) flex-col items-start gap-10px"
              >
                <BlocksPrice filling
                  >от {{ priceFormatter(item.price) }} руб.</BlocksPrice
                >
                <BlocksOldPrice
                  >{{ priceFormatter(item.oldPrice) }} руб.</BlocksOldPrice
                >
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const interfaceStore = useInterfaceStore();
const adminStore = useAdminStore();

onMounted(async () => {
  await interfaceStore.getTours(2);
});

const actTab = ref(0);
const totalTours = computed(
  () => interfaceStore.typeTours[actTab.value]?.tours
);
const tours = computed(() =>
  interfaceStore.typeTours[actTab.value]?.tours?.filter(
    (el) => el.isPreview == false
  )
);
const previewTour = computed(() =>
  interfaceStore.typeTours[actTab.value]?.tours?.find(
    (el) => el.isPreview == true
  )
);
</script>
<style>
#section-4 .icon-span > svg {
  @apply w-32px h-32px;
}

#section-4 .text-shadow {
  text-shadow: 1px 1px 12px #000;
}

#section-4 .bg-img1 {
  background-image: url("@/assets/images/sections/4/adler.jpg");
}
</style>