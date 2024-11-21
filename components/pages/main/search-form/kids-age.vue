<template>
    <div class="relative flex">
       <div class="input-value w-full" @click="$emit('open')">
          <template v-if="toursStore.kidsAge">
             <span :title="toursStore.kidsAge">
             {{ toursStore.kidsAge }}
          </span>
          </template>
          <template v-else>Выберите Возраст</template>
       </div>
       <div v-if="show"
          class="bg-white scroll-style absolute z-33 min-w-200px w-full rounded-5px top-0 max-h-300px overflow-auto shadow-0 flex flex-col gap-5px">
          <div v-for="age in listAges" @click="chooseAge(age)" class="flex gap-10px pl-20px py-10px hover:bg-rarely-2 cursor-pointer" :key="age">
            <span>{{ age }}</span>
          </div>
        </div>
    </div>
 </template>
 
 <script setup>
 const toursStore = useToursStore();
 const emit = defineEmits(["close", "open"]);
 const props = defineProps({ show: Boolean });

 const listAges = ref(["Любой", 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
 const chooseAge = (age)=> {
    toursStore.kidsAge = age;
    emit("close");
 }
 </script>
