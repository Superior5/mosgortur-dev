<template>
    <div>
        <div class="max-w-400px">
            <div class="flex w-full flex-col gap-15px children:(flex flex-col gap-5px)">
                <div>
                    <label for="link">Ссылка на лого (по желанию)</label>
                    <input v-model="link" class="input-1" type="text" id="link">
                </div>
                <label
                    class="hover:text-regular-0 p-10px overflow-hidden h-full block bg-center bg-cover bg-no-repeat text-black/50 rounded-25px border-width-3px border-[currenColor] border-dashed"
                    for="imagePartners" :style="{ backgroundImage: `url(${prevImg})` }">
                    <div :class="{ 'opacity-0 bg-white/90': prevImg }"
                        class="gap-25px hover:opacity-100 text-18px font-bold transition-all h-full flex flex-col cursor-pointer items-center justify-center ">
                        <span v-if="!prevImg" class="text-center">
                            Выбрать лого <br><br> (138*112 px)</span>
                        <span v-else>Изменить картинку</span>
                        <IconsUploadFile class="w-100px" />
                    </div>
                </label>
                <input accept="image/*" @change="changeImg()" ref="imagePartners" class="w-0px opacity-0" type="file"
                    id="imagePartners">
            </div>
            <BlocksButton @click="addHotTour()" class="h-50px  w-full uppercase" filling>
                Добавить
            </BlocksButton>
        </div>
        <h1 class="text-30px font-bold my-70px">Список добавленных элементов</h1>
        <div v-if="interfaceStore.partners.length">
            <div @click="deleteHotTour" class="cursor-pointer inline-flex gap-10px hover:text-red-600">
                Удалить все
                <IconsDeleteTour class="w-24px" />
            </div>
            <Carousel :autoplay="3000" :itemsToScroll="1" snapAlign="start" :wrapAround="true"
                class="md:mt-80px mt-24px partners-slide" :breakpoints='breakpoints'>
                <Slide v-for="item in interfaceStore.partners" :key="item.id">
                    <a :href="item.link" class="max-h-full relative max-w-full">
                        <img :src="adminStore.adminUrl + '/' + item.image" alt="">
                        <IconsDeleteTour @click="deleteHotTour(item.id)"
                            class="cursor-pointer absolute top-0 right-0 w-24px hover:text-red-600" />
                    </a>
                </Slide>
            </Carousel>
        </div>
        <div v-else class9="text-20px font-bold">
            Список пуст...
        </div>
    </div>
</template>
<script setup>
const adminStore = useAdminStore()
const interfaceStore = useInterfaceStore()
const link = ref('');
const imagePartners = ref(null);
const prevImg = ref(null);

onMounted(async () => {
    try {
        await interfaceStore.getTours(4);
    } catch (error) {
        console.log(error);
    }
})

const changeImg = () => {
    prevImg.value = URL.createObjectURL(imagePartners.value.files[0])
}

const addHotTour = async () => {
    if (!imagePartners.value.files[0]) return alert('Выберите фото')

    interfaceStore.loadData = true

    const formData = new FormData();
    formData.append('image', imagePartners.value.files[0])

    await adminStore.addTour({
        formData,
        data: {
            ...link.value && { link: link.value }
        },
        mId: 4
    })
    await interfaceStore.getTours(4);

    link.value = '';
    imagePartners.value = null;
    prevImg.value = null;

    interfaceStore.loadData = false
}

const deleteHotTour = async id => {
    interfaceStore.loadData = true

    await adminStore.deleteTour(id, 4)
    await interfaceStore.getTours(4);

    interfaceStore.loadData = false
}

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
    }
})
</script>