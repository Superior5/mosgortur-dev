<template>
   <BlocksModal :show="show" @close="$emit('close')" classes="max-w-700px">
      <div class="lg:(text-xl pt-0) text-lg pt-30px text-center">
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
                  <div v-if="mId == 2">
                     <label for="link">Оценка</label>
                     <input v-model="rating" class="input-1" type="text" id="link">
                  </div>
                  <div v-if="mId == 2">
                     <label for="price">Адрес</label>
                     <input v-model="address" class="input-1" type="text" id="price">
                  </div>
               </div>
               <div class="w-full">
                  <label
                     class="hover:text-regular-0 overflow-hidden h-full block bg-center bg-cover bg-no-repeat text-black/50 rounded-25px border-width-3px border-[currenColor] border-dashed"
                     for="imageUpdate" :style="{ backgroundImage: `url(${prevImg})` }">
                     <div :class="{ 'opacity-0 bg-white/90': prevImg }"
                        class="gap-25px hover:opacity-100 text-18px font-bold transition-all h-full flex flex-col cursor-pointer items-center justify-center ">
                        <span v-if="!prevImg">Выбрать картинку</span>
                        <span v-else>Изменить картинку</span>
                        <IconsUploadFile class="w-100px" />
                     </div>
                  </label>
                  <input @change="changeImg()" accept="image/*" :multiple="mId == 2" ref="imageUpdate"
                     class="w-0px opacity-0" type="file" id="imageUpdate">
               </div>
            </div>
            <BlocksButton @click="updHotTour" class="h-50px mt-30px w-full uppercase" filling>
               Изменить тур
            </BlocksButton>
         </div>
      </div>
   </BlocksModal>
</template>
<script setup>
const adminStore = useAdminStore()
const interfaceStore = useInterfaceStore()
const emit = defineEmits(['close'])
const props = defineProps({
   id: Number,
   show: Boolean,
   mId: Number
})
const thisItem = computed(() => interfaceStore[adminStore.methods[props.mId].var].find(el => el.id == props.id))

const title = ref('');
const price = ref('');
const link = ref('');
const rating = ref('');
const address = ref('');
const imageUpdate = ref(null);
const prevImg = ref(null);

const changeImg = () => {
   prevImg.value = URL.createObjectURL(imageUpdate.value.files[0])
}

const updHotTour = async () => {
   if (!title.value || !price.value || !link.value) return alert('Заполните все поля!')
   if (!imageUpdate.value.files[0] && !prevImg.value) return alert('Выберите фото')

   const formData = new FormData();
   formData.append('image', imageUpdate.value.files[0])

   interfaceStore.loadData = true

   const data = {
      name: title.value,
      price: price.value,
      link: link.value,
   }

   if (props.mId == 2) {
      data.rate = rating.value
      data.city = address.value
   }

   await adminStore.addTour({
      formData,
      data,
      mId: props.mId
   }, props.id)
   await interfaceStore.getTours(props.mId);

   interfaceStore.loadData = false
   emit('close')
}

watchEffect(() => (v => {
   if (v) {
      title.value = thisItem.value.name
      price.value = thisItem.value.price
      link.value = thisItem.value.link
      prevImg.value = `${adminStore.adminUrl}/${thisItem.value.image}`

      if (props.mId == 2) {
         rating.value = thisItem.value.rate
         address.value = thisItem.value.city
         prevImg.value = `${adminStore.adminUrl}/${thisItem.value.gallery[0].image}`
      }
   }
})(props.show));
</script>