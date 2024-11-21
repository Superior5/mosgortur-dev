<template>
    <BlocksModal classes="lg:max-w-600px" @close="$emit('close')">
        <BlocksH2 class="text-22px mb-30px">Добавить тип тура</BlocksH2>

        <div class="flex gap-15px">
            <input v-model="type" class="input-1 self-end" placeholder="Название типа" type="text" id="type">
            <div>
                <span class="text-16px inline-block ml-10px mb-10px w-4/5">Иконка должна быть в формате <span
                        class="inline-block px-5px py-2px rounded-[5px] bg-yellow-400">.svg</span>, 32x32 пикселя.</span>
                <input class="input-1" @change="changeImg()" ref="icon" accept="image/svg+xml" type="file" id="icon">
            </div>


            <!-- <input type="file" name="uploadfile" id="img" style="display:none;"/>
            <label for="img">Click me to upload image</label>    -->
        </div>
        <BlocksButton @click="addTourType()" class="h-50px mt-30px w-full uppercase" filling>
            Добавить
        </BlocksButton>
    </BlocksModal>
</template>

<script setup>
const emit = defineEmits(['close']);
const type = ref('');
const icon = ref(null);
const prevImg = ref(null);
const adminStore = useAdminStore()
const interfaceStore = useInterfaceStore()


const checkResolution = (a, b) => {
    const number = Number(a) / Number(b);
    console.log((+number != 1 || (1 - +number) < 0.1))
    return (+number == 1 || (1 - +number) < 0.1)
}

const changeImg = () => {
    const imageSource = new Image();
    console.log(icon.value.files[0]);
    imageSource.src = URL.createObjectURL(icon.value.files[0])
    imageSource.onload = () => {
        if (!checkResolution(imageSource.width, imageSource.height)) {
            prevImg.value = null;
            icon.value = null;
            console.log(imageSource.width, imageSource.height)
            alert("Иконка должна быть в соотношении 1 к 1");
        } else {
            prevImg.value = imageSource.src;
        }
    }
}
const addTourType = async () => {
    if (!type.value) return alert('Заполните все поля!')
    if (!icon.value.files[0]) return alert('Выберите фото')

    const formData = new FormData();
    formData.append('icon', icon.value.files[0])

    interfaceStore.loadData = true

    await adminStore.addTourType({
        formData,
        data: {
            type: type.value
        },
        mId: 3
    })
    await interfaceStore.getTourTypes(3);
    await interfaceStore.getTours(2);

    // await interfaceStore.getHotTours(0);

    type.value = '';
    icon.value = null;
    prevImg.value = null;
    // await interfaceStore.getTourTypes(3);
    // await interfaceStore.getLinksAndTours(2);
    interfaceStore.loadData = false
    emit('close')
}



</script>


