<template>
   <section class="my-70px">
      <div class="container">
         <h2 class="h-2 mb-60px">Проверить статус заявки</h2>
         <div class="grid grid-cols-6">
            <div class="flex flex-col gap-25px" v-for="(status, i) in statuses" :key="status.title">
               <div class="flex items-center" :class="i > actStatus ? 'text-rarely-1' : 'text-regular-0'">
                  <div class="w-95px h-95px border-3 rounded-1/2 flex border-current items-center justify-center"
                     :class="{ 'bg-regular-0 text-white !border-regular-0': i === actStatus }">
                     <component :is="status.icon"></component>
                  </div>
                  <div class="bg-current h-3px flex-grow-1" :class="{ 'text-rarely-1': i === actStatus }"
                     v-if="i != 5" />
               </div>
               <div class="text-20px font-mulish font-bold px-10px">
                  {{ status.title }}
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const store = useToursStore();
const IconsCheckCercle = resolveComponent('IconsCheckCercle')
const IconsLoadCercle = resolveComponent('IconsLoadCercle')
const IconsSmile = resolveComponent('IconsSmile')
const IconsAvalible = resolveComponent('IconsAvalible')
const IconsCloseCercle = resolveComponent('IconsCloseCircle')
const IconsGetDoc = resolveComponent('IconsGetDoc')

const props = defineProps({
   bookNum: String
})

onMounted(async () => {
   const data = await store.getApplicationStatus({ claimNumber: props.bookNum })
   const index = statuses.findIndex(el => el.key === data.claimStatus)
   actStatus.value = index < 0 ? 0 : index
})

const actStatus = ref(5)

const statuses = [
   {
      title: 'Новая заявка',
      icon: IconsCheckCercle,
      key: ''
   },
   {
      title: 'В процессе бронирования',
      icon: IconsLoadCercle,
      key: 'Бронируется'
   },
   {
      title: 'Подтверждена  заявка',
      icon: IconsSmile,
      key: 'Подтверждена'

   },
   {
      title: 'Запрос на аннуляцию',
      icon: IconsAvalible,
      key: 'Запрос на аннуляцию'
   },
   {
      title: 'Аннулирована заявка',
      icon: IconsCloseCercle,
      key: 'Аннулирована'
   },
   {
      title: 'Аннулирована с ФПР',
      icon: IconsGetDoc
   },
]

</script>