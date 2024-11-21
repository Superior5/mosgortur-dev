<template>
  <div>
    <div class="max-w-700px flex gap-20px">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="form flex flex-col w-full gap-40px">
          <div
            class="flex w-full flex-col gap-15px children:(flex flex-col gap-5px)"
          >
            <div class="flex-row">
              <div class="flex flex-col gap-5px">
                <label for="title">Тип тура</label>
                <select v-model="type" class="input-1 max-w-250px w-full">
                  <option selected hidden value="">Выберите тип</option>
                  <option
                    v-for="item in interfaceStore.tourTypes"
                    :key="item.id"
                    :value="item.type"
                  >
                    {{ item.type }}
                  </option>
                </select>
              </div>
              <div
                @click="showTourTypeModal = true"
                class="input-1 cursor-pointer flex justify-center items-center self-end"
              >
                <IconsPlus />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-20px uppercase">Обложка</h3>
            </div>
            <div>
              <label for="prev-title">Название тура / Регион</label>
              <input
                v-model="prevTitle"
                class="input-1"
                type="text"
                id="prev-title"
              />
            </div>
            <div>
              <label for="prev-link">Ссылка на тур</label>
              <input
                v-model="prevLink"
                class="input-1"
                type="text"
                id="prev-link"
              />
            </div>
            <div>
              <label for="prev-price">Цена</label>
              <input
                v-model="prevPrice"
                class="input-1"
                type="number"
                id="prev-price"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              class="hover:text-regular-0 overflow-hidden h-full block bg-center bg-cover bg-no-repeat text-black/50 rounded-25px border-width-3px border-[currenColor] border-dashed"
              for="image"
              :style="{ backgroundImage: `url(${prevImg})` }"
            >
              <div
                :class="{ 'opacity-0 bg-white/90': prevImg }"
                class="gap-25px hover:opacity-100 text-18px font-bold transition-all h-full flex flex-col cursor-pointer items-center justify-center"
              >
                <span v-if="!prevImg">Выбрать картинку</span>
                <span v-else>Изменить картинку</span>
                <span
                  class="text-center text-12px inline-block px-40px leading-20px"
                  >картинка должна быть в разрешении
                  <span class="rounded-[5px] p-2px bg-yellow-400">740x365</span>
                  пикселей</span
                >
                <IconsUploadFile class="w-100px" />
              </div>
            </label>
            <input
              accept="image/*"
              multiple
              @change="changeImg()"
              ref="image"
              class="w-0px opacity-0"
              type="file"
              id="image"
            />
          </div>
        </div>
        <BlocksButton
          @click="addTypeTour(true, tours?.length ? tours?.length : 0)"
          class="h-50px mt-30px w-full uppercase"
          filling
        >
          Добавить обложку
        </BlocksButton>
      </div>
      <div class="w-1/2 flex flex-col justify-between">
        <div class="form flex flex-col w-full gap-40px">
          <div
            class="flex w-full flex-col gap-15px children:(flex flex-col gap-5px)"
          >
            <div class="opacity-0 visible">
              <label for="title">.</label>
              <div class="input-1">.</div>
            </div>
            <div>
              <h3 class="font-bold text-20px uppercase">Тур (всего 3)</h3>
            </div>
            <div>
              <label for="title">Название тура</label>
              <input v-model="title" class="input-1" type="text" id="title" />
            </div>
            <div>
              <label for="address">Адрес</label>
              <input
                v-model="address"
                class="input-1"
                type="text"
                id="address"
              />
            </div>
            <div>
              <label for="link">Ссылка на тур</label>
              <input v-model="link" class="input-1" type="text" id="link" />
            </div>
            <div>
              <label for="price">Цена от</label>
              <input v-model="price" class="input-1" type="number" id="price" />
            </div>
            <div>
              <label for="old-price">Старая цена</label>
              <input
                v-model="oldPrice"
                class="input-1"
                type="number"
                id="old-price"
              />
            </div>
            <div>
              <label for="rate">Рейтинг</label>
              <input v-model="rate" class="input-1" type="number" id="rate" />
            </div>
          </div>
        </div>
        <BlocksButton
          @click="addTypeTour(false, tours?.length ? tours?.length : 0)"
          class="h-50px mt-30px w-full uppercase"
          filling
        >
          Добавить тур
        </BlocksButton>
      </div>
    </div>
    <h1 class="text-30px font-bold my-70px">Список добавленных элементов</h1>
    <div v-if="interfaceStore?.typeTours?.length" class="">
      <div
        class="flex h-52px gap-50px items-center overflow-x-auto overflow-y-clip"
      >
        <div
          class="flex gap-20px"
          v-for="(tab, i) in interfaceStore.typeTours"
          :key="tab.type + i"
        >
          <div
            @click="actTab = i"
            :class="{
              'border-b !border-regular-0 text-regular-0': i == actTab,
            }"
            class="cursor-pointer flex whitespace-nowrap pb-4px items-center gap-15px"
          >
            <span class="icon-span" v-html="tab.icon" />
            <h6 class="md:text-18px texgt-16px font-medium">{{ tab.type }}</h6>
          </div>
          <IconsDeleteTour
            @click="deleteTypeTour(tab.type, 3)"
            class="cursor-pointer w-24px hover:text-red-600"
          />
        </div>
      </div>
      <div v-if="totalTours?.length" class="md:mt-45px mt-24px">
        <div
          v-if="previewTour"
          class="md:mt-45px mt-24px flex lg:(flex-row) flex-col md:gap-50px gap-24px"
        >
          <div
            class="bg-no-repeat lg:(w-2/3 h-auto) md:(h-291px) w-full h-[168px] flex flex-col items-start bg-img1 gap-16px bg-center bg-cover rounded-[10px] p-30px"
            :style="{
              backgroundImage: `url(${adminStore.adminUrl}/${previewTour?.image})`,
            }"
          >
            <div class="md:text-36px text-24px text-white font-bold">
              {{ previewTour.title }}
            </div>
            <div
              class="font-ptsans font-bold py-2px px-9px text-white rounded-[6px] bg-regular-0"
            >
              от {{ priceFormatter(previewTour.price) }} руб.
            </div>
          </div>
          <div
            v-if="tours.length"
            class="flex lg:(!flex-col w-1/3) flex-row w-full overflow-x-auto md:gap-50px gap-27px"
          >
            <div
              v-for="item in tours"
              :key="item.id"
              class="lg:(min-w-[100%]) relative md:min-w-[415px] w-[50%]"
            >
              <div class="flex gap-10px md:flex-row flex-col-reverse">
                <BlocksRatingCard v-if="item.rate">{{
                  item.rate
                }}</BlocksRatingCard>
                <h6 class="font-mulish md:text-18px text-16px font-bold">
                  {{ item.title }}
                </h6>
              </div>
              <BlocksBlueButton
                class="md:flex hidden gap-5px text-15px xl:(py-5px px-10px) my-10px"
              >
                <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                <!-- <span v-if="isMobile()">Открыть карту</span> -->
                <span>{{ item.address }}</span>
              </BlocksBlueButton>
              <div class="flex justify-between">
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
                <IconsDeleteTour
                  @click="deleteTypeTour(item.id, 2)"
                  class="cursor-pointer right-0 w-24px hover:text-red-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class9="text-20px font-bold">Список пуст...</div>
    <ItemEditModal
      :m-id="2"
      :show="!!idEdit"
      :id="idEdit"
      @close="idEdit = null"
    />
    <PagesAdminTourTypeModal
      @close="showTourTypeModal = false"
      :show="showTourTypeModal"
    />
  </div>
</template>
<style>
.icon-span svg {
  @apply w-46px h-46px;
}
</style>
<script setup>
import ItemEditModal from "./item-edit-modal.vue";
const showTourTypeModal = ref(false);
const adminStore = useAdminStore();
const interfaceStore = useInterfaceStore();

await interfaceStore.getTourTypes(3);
await interfaceStore.getTours(2);

const checkResolution = (a, b) => {
  const number = Number(a) / Number(b);

  return +number == 740 / 365 || 740 / 365 - +number < 0.1;
};

const changeImg = () => {
  const imageSource = new Image();
  console.log(image.value.files[0]);
  imageSource.src = URL.createObjectURL(image.value.files[0]);
  imageSource.onload = () => {
    if (!checkResolution(imageSource.width, imageSource.height)) {
      prevImg.value = null;
      image.value = null;
      console.log(imageSource.width, imageSource.height);
      alert("Иконка должна быть в соотношении 740 на 365");
    } else {
      prevImg.value = imageSource.src;
    }
  };
};

const idEdit = ref(null);

const prevTitle = ref("");
const prevPrice = ref("");
const prevLink = ref("");
const image = ref(null);
const prevImg = ref(null);

const title = ref("");
const price = ref("");
const oldPrice = ref("");
const link = ref("");
const address = ref("");
const rate = ref("");

const type = ref("");
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

const addTypeTour = async (isPreview, toursLength) => {
  if (isPreview) {
    if (!prevTitle.value || !prevLink.value || !prevPrice.value || !type.value)
      return alert("Заполните все поля!");

    if (!image.value.files[0]) return alert("Выберите фото");

    const formData = new FormData();
    formData.append("image", image.value.files[0]);

    interfaceStore.loadData = true;

    await adminStore.addTour({
      data: {
        prevTitle: prevTitle.value,
        prevPrice: prevPrice.value,
        prevLink: prevLink.value,
        type: type.value,
        isPreview,
      },
      mId: 2,
      formData,
    });
    await interfaceStore.getTourTypes(3);
    await interfaceStore.getTours(2);

    prevTitle.value = "";
    prevPrice.value = "";
    prevLink.value = "";
    image.value = null;
    prevImg.value = null;

    interfaceStore.loadData = false;
    return null;
  }
  if (toursLength == 3)
    return alert(
      "Для этого типа, больше туров добавлять нельзя! Удалите один из существующих."
    );
  if (
    !title.value ||
    !price.value ||
    !oldPrice.value ||
    !rate.value ||
    !link.value ||
    !type.value ||
    !address.value
  )
    return alert("Заполните все поля!");

  interfaceStore.loadData = true;

  await adminStore.addTour({
    data: {
      title: title.value,
      price: price.value,
      oldPrice: oldPrice.value,
      link: link.value,
      rate: rate.value,
      type: type.value,
      address: address.value,
      isPreview,
    },
    mId: 2,
  });
  await interfaceStore.getTourTypes(3);
  await interfaceStore.getTours(2);

  link.value = "";
  price.value = "";
  title.value = "";
  address.value = "";
  image.value = null;
  prevImg.value = null;

  interfaceStore.loadData = false;
};

const deleteTypeTour = async (type, mId) => {
  interfaceStore.loadData = true;

  await adminStore.deleteTour(type, mId);
  await interfaceStore.getTourTypes(3);
  await interfaceStore.getTours(2);

  // await interfaceStore.getLinksAndTours(2);

  interfaceStore.loadData = false;
};
</script>