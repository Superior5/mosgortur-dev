<template>
    <BlocksModal :bg-image="userStore.bookDocuments.length == 0 ? '/lk/noDocumentsModal-desktop.png' : ''"
        :classes="'w-full h-480px !lg:max-w-850px md:max-w-1000px !md:px-120px !px-20px !md:py-55px py-66px bg-no-repeat rounded-20px bg-contain bg-left-bottom'"
        @close="$emit('close')">
        <div v-if="isLoad" class="w-full h-full flex justify-center items-center">
            <div class="loader"></div>
        </div>

        <div v-else>
            <div v-if="userStore.bookDocuments.length == 0">
                <h4 class="font-mulish text-center md:text-30px text-24px font-900 leading-37px mb-25px">Ваши документы
                    еще не готовы</h4>
                <p class="md:text-20px text-16px  leading-30px text-center tracking-[0.02px]">Документы для вашего
                    путешествия еще готовятся, и скоро появятся здесь! Обратите внимание, что в некоторых турах
                    документы могут появиться за 24 часа до даты начала тура.</p>
            </div>
            <div v-else>
                <h4 class="font-mulish md:text-30px text-24px font-900 leading-37px mb-25px">Скачать документы </h4>

                <div class="text-16px font-mulish ">
                    <div
                        class="md:flex hidden px-11px items-center py-16px border-b-1 border-rarely-1 flex gap-10px justify-between children:(w-1/3) text-[#606367] font-bold">
                        <BlocksCheck :check="chooseAll" @input="addAllDocuments" :key-check='`chooseAll`'>
                            <p class="font-mulish text-16px text-[#606367]">Тип</p>
                        </BlocksCheck>

                        <p>Название</p>
                        <p class="text-right">Размер</p>
                    </div>

                    <div
                        class="md:hidden flex px-11px items-center py-16px border-b-1 border-rarely-1  gap-10px justify-between text-[#606367] font-bold">
                        <BlocksCheck :check="chooseAll" @input="addAllDocuments" :key-check='`chooseAll`'>
                            <p class="font-mulish text-16px text-[#606367]">Выбрать все документы</p>
                        </BlocksCheck>
                    </div>
                    <div class="md:block hidden max-h-170px overflow-auto scroll-style">
                        <div class="px-11px py-16px border-b-1 border-rarely-1 children:(w-1/3 leading-18px) flex gap-10px justify-between"
                            v-for="document in userStore.bookDocuments" :key="document.documentId">
                            <div class="flex h-full gap-8px">
                                <BlocksCheck :check="choosedDocuments.includes(document.documentId)"
                                    @input="addDocument(document.documentId)"
                                    :key-check='`document-${document.documentId}`'>
                                    <p class="font-mulish text-14px text-[#606367]">{{ document.type }}</p>
                                </BlocksCheck>
                            </div>
                            <p>{{ document.name }}</p>
                            <p class="text-right">{{ formatBytes(byteSize(document.FileContents, 0)) }}</p>
                        </div>
                    </div>
                    <div class="md:hidden block max-h-165px overflow-auto scroll-style">
                        <div class="px-11px py-16px border-b-1 border-rarely-1 children:(leading-18px) flex gap-10px justify-between"
                            v-for="document in userStore.bookDocuments" :key="document.documentId">
                            <div class="flex h-full w-full gap-8px">
                                <BlocksCheck class="h-auto w-full"
                                    :check="choosedDocuments.includes(document.documentId)"
                                    @input="addDocument(document.documentId)"
                                    :key-check='`document-${document.documentId}`'>

                                    <div class="flex w-full flex-col gap-5px">
                                        <p class="font-mulish text-14px">{{ document.name }}</p>
                                        <div class="flex justify-between text-12px text-[#606367]">
                                            <p>{{ document.type }}</p>
                                            <p class="text-right">{{ formatBytes(byteSize(document.FileContents, 0)) }}
                                            </p>
                                        </div>
                                    </div>
                                </BlocksCheck>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="flex !md:justify-start justify-center">
                    <button @click="downloadDocuments" :disabled="isDownloading"
                        class="text-regular-0 md:mt-60px mt-50px p-24px font-ptsans cursor-pointer flex gap-20px">
                        {{ isDownloading ? 'Загрузка...' : 'Скачать документы по туру' }}
                        <img class="w-24px" src="@/assets/images/icons/download.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </BlocksModal>
</template>

<script setup>
const choosedDocuments = ref([])

const emit = defineEmits(['close'])
const userStore = useUserStore()
const isLoad = ref(true)
const isDownloading = ref(false)
const chooseAll = ref(false)
const props = defineProps({
    bookCode: Object,
    resetData: Number
})



const downloadDocuments = async () => {

    if (choosedDocuments.value.length == 0) {
        return
    }
    isDownloading.value = true
    await userStore.downloadFiles(choosedDocuments.value)
    chooseAll.value = false
    choosedDocuments.value = []
    setTimeout(() => {
        isDownloading.value = false
    }, 500)
}
const byteSize = str => new Blob([str]).size;

const getDocumentsList = async (code) => {
    isLoad.value = true
    await userStore.downloadDocx(code)
    isLoad.value = false
}

const formatBytes = (bytes, decimals = 1) => {
    if (!+bytes) return '0Б'

    console.log(bytes);

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Б', 'КБ', 'МБ', 'ГБ']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

const addDocument = (documentId) => {
    if (choosedDocuments.value.includes(documentId)) {
        let index = choosedDocuments.value.indexOf(documentId)
        choosedDocuments.value.splice(index, 1)
        if (choosedDocuments.value.length != userStore.bookDocuments.length) {
            chooseAll.value = false
        }

    } else {
        choosedDocuments.value.push(documentId)
        if (choosedDocuments.value.length == userStore.bookDocuments.length) {
            chooseAll.value = true
        }
    }
}

const addAllDocuments = () => {
    if (choosedDocuments.value.length == userStore.bookDocuments.length) {
        choosedDocuments.value = []
        chooseAll.value = false
    } else {
        choosedDocuments.value = userStore.bookDocuments.map(el => el.documentId)
        chooseAll.value = true
    }
}


watch(() => props.bookCode, async (v) => {
    console.log(v);
    
    await getDocumentsList(v)
}, {
    immediate: true
})

watch(() => props.resetData, async (v) => {
    chooseAll.value = false
    choosedDocuments.value = []
})
</script>


<style>
button:disabled {
    cursor: not-allowed;
}

.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
        radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
        conic-gradient(#0000 30%, #ffa516);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: l13 1s infinite linear;
}

@keyframes l13 {
    100% {
        transform: rotate(1turn)
    }
}
</style>