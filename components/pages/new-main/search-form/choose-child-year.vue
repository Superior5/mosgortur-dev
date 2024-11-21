<template>
   <div class="relative flex">
     <div class="input-value w-full" @click="$emit('open')">
       <span v-if="toursStore.selectedChildYear">
         {{ toursStore.selectedChildYear }} лет
       </span>
       <template v-else>Выберите возраст</template>
     </div>
     <div v-if="show" class="bg-white absolute z-32 min-w-100px w-full rounded-5px top-0 max-h-300px overflow-auto shadow-0 px-20px py-15px flex flex-col">
       <div v-for="i in 12" :key="i">
          <div @click="toursStore.selectedChildYear = i+5; $emit('close')" :class="{'bg-regular-3': toursStore.selectedChildYear === i+5}" class="py-7px cursor-pointer font-bold text-center hover:opacity-50">{{ i+5 }}</div>
       </div>
     </div>
   </div>
 </template>

 <script setup>
 const toursStore = useToursStore();
 const emit = defineEmits(["close", "open"]);
const props = defineProps({ show: Boolean });
</script>