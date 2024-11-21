<template>
   <div id="autocomplete" class="w-full min-w-300px z-33 absolute top-0">
      <div @click="() => searchInput.focus()"
         class="flex bg-white text-sm rounded-[5px] flex-wrap border w-full p-10px pr-35px gap-5px items-center relative">
         <div v-for="item in selectedValue" :key="item.Key"
            class="px-8px py-4px whitespace-nowrap pr-25px relative text-12px overflow-hidden text-ellipsis bg-rarely-2 rounded-[20px]">
            {{ item.Name }} <img class="w-15px absolute cursor-pointer top-3px right-5px"
               src="@/assets/images/icons/close.svg" @click="delEl(item.Key)" alt="">
         </div>
         <input ref="searchInput" type="text" class="flex-grow-1 w-50px outline-none" v-model="searchItem">
         <img class="absolute right-5px cursor-pointer" v-if="selectedValue.length" @click="selectedValue = []"
            src="@/assets/images/icons/close.svg" alt="">
      </div>
      <div class="rounded-[5px] bg-white shadow-0">
         <div class="py-10px max-h-200px min-h-100px overflow-auto">
            <label :for="item.Key" class="flex gap-10px pl-20px py-10px hover:(bg-rarely-2) cursor-pointer"
               v-for="item in items.filter(el => prepareText(el.Name).includes(prepareText(searchItem)))"
               :key="item.Key">
               <input :checked="!(selectedValue.findIndex(el => el.Key == item.Key) < 0)" type="checkbox" :id="item.Key"
                  @input="select(item)">
               <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{ item.Name }}</span>
            </label>
         </div>
         <div class="flex gap-10px p-10px children:(w-full py-5px rounded-[5px])">
            <button class="bg-regular-0 text-white"
               @click="$emit('update:modelValue', [...selectedValue]), $emit('close'), $emit('select')">Применить</button>
            <button class="bg-rarely-2" @click="$emit('close')">Отменить</button>
         </div>
      </div>
   </div>
</template>
<script setup>
const searchItem = ref('')
const searchInput = ref(null)
const props = defineProps({
   items: Array,
   modelValue: Array
})

const prepareText = (text) => {
   return text.replaceAll('"', '').toLowerCase()
}
const selectedValue = ref([...props.modelValue.filter((el) => el.Key != 376 && el.Key != 393)])
const select = item => {
   // console.log(selectedValue)

   const i = selectedValue.value.findIndex(el => {

      return el.Key === item.Key
   }
   )
   // console.log(i)
   if (i < 0) {
      if (item.Key < 0) return selectedValue.value = [item]
      const all = selectedValue.value.findIndex(el => el.Key === -1)
      if (all >= 0) selectedValue.value.splice(all, 1)
      return selectedValue.value.push(item)
   }

   selectedValue.value.splice(i, 1)
}

const delEl = key => {
   const i = selectedValue.value.findIndex(el => el.Key === key)

   if (i > -1) selectedValue.value.splice(i, 1)
}
</script>