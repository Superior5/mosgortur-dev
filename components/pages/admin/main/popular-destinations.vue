<template>
    <div>
        <div class="max-w-700px">
            <div class="form flex gap-40px">
                <div class="flex w-full flex-col gap-15px children:(flex flex-col gap-5px)">
                    <div>
                        <label for="title">Название тура</label>
                        <input v-model="title" class="input-1" type="text" id="title">
                    </div>
                    <div>
                        <label for="link">Ссылка на тур</label>
                        <input v-model="link" class="input-1" type="text" id="link">
                    </div>
                    <div>
                        <label for="price">Цена</label>
                        <input v-model="price" class="input-1" type="number" id="price">
                    </div>
                </div>
                <div class="w-full">
                    <label
                        class="hover:text-regular-0 overflow-hidden h-full block bg-center bg-cover bg-no-repeat text-black/50 rounded-25px border-width-3px border-[currenColor] border-dashed"
                        for="image" :style="{ backgroundImage: `url(${prevImg})` }">
                        <div :class="{ 'opacity-0 bg-white/90': prevImg }"
                            class="gap-25px hover:opacity-100 text-18px font-bold transition-all h-full flex flex-col cursor-pointer items-center justify-center ">
                            <span v-if="!prevImg">Выбрать картинку</span>
                            <span v-else>Изменить картинку</span>
                            <IconsUploadFile class="w-100px" />
                        </div>
                    </label>
                    <input accept="image/*" @change="changeImg()" ref="image" class="w-0px opacity-0" type="file"
                        id="image">
                </div>
            </div>
            <BlocksButton @click="addHotTour()" class="h-50px mt-30px w-full uppercase" filling>
                Добавить
            </BlocksButton>
        </div>
        <h1 class="text-30px font-bold my-70px">Список добавленных элементов</h1>
        <div v-if="interfaceStore.popularDestination.length" class="flex flex-wrap gap-40px overflow-x-auto">
            <div class="flex gap-15px" v-for="item in interfaceStore.popularDestination" :key="item.id">
                <BlocksPopularDestinationCard :popular-destination="item" />
                <div class="text-30px text-rarely-3 flex gap-10px">
                    <IconsPenEdit @click="idEdit = item.id" class="cursor-pointer w-24px hover:text-regular-1" />
                    <IconsDeleteTour @click="deleteHotTour(item.id)" class="cursor-pointer w-24px hover:text-red-600" />
                </div>
            </div>
        </div>
        <div v-else class9="text-20px font-bold">
            Список пуст...
        </div>
        <ItemEditModal :m-id="1" :show="!!idEdit" :id="idEdit" @close="idEdit = null" />
    </div>
</template>
<script setup>
import ItemEditModal from './item-edit-modal.vue'
const adminStore = useAdminStore()
const interfaceStore = useInterfaceStore()
const idEdit = ref(null);
const title = ref('');
const price = ref('');
const link = ref('');
const image = ref(null);
const prevImg = ref(null);

await interfaceStore.getTours(1);

const changeImg = () => {
    prevImg.value = URL.createObjectURL(image.value.files[0])
}

const addHotTour = async () => {
    if (!title.value || !price.value || !link.value) return alert('Заполните все поля!')
    if (!image.value.files[0]) return alert('Выберите фото')

    const formData = new FormData();
    formData.append('image', image.value.files[0])

    interfaceStore.loadData = true

    await adminStore.addTour({
        formData,
        data: {
            title: title.value,
            price: price.value,
            link: link.value,
        },
        mId: 1
    })
    await interfaceStore.getTours(1);

    title.value = '';
    price.value = '';
    link.value = '';
    image.value = null;
    prevImg.value = null;

    interfaceStore.loadData = false
}

const deleteHotTour = async id => {
    interfaceStore.loadData = true

    await adminStore.deleteTour(id, 1)
    await interfaceStore.getTours(1);

    interfaceStore.loadData = false
}
</script>