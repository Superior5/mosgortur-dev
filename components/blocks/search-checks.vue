<template>
   <div id="search-checks">
      <div class="flex relative items-center rounded-[2px] shadow-0 px-30px">
         <img class="absolute left-13px" src="@/assets/images/icons/search.svg" alt="">
         <img v-if="search" @click="search = ''" class="absolute right-13px cursor-pointer"
            src="@/assets/images/icons/close.svg" alt="">
         <input type="text" v-model="search" class="w-full p-10px outline-none" :placeholder="placeholder">
      </div>
      <div class="search-checks__body">
   
         <BlocksCheck v-for="option in filterOptions" :check="checks.includes(option.key)"
            @input="$emit('changeCheck', option.key)" :key="option.key" :title="option.title" :key-check="option.key"
            :svg="option.svg" />
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   placeholder: String,
   checks: Array,
   options: Object
})

const search = ref('')

const filterOptions = computed(() => props.options.filter(el => el.title.toUpperCase().includes(search.value.toUpperCase())).sort((a, b) => a.title - b.title))
</script>
<style scoped>
#search-checks .search-checks__body {
   @apply flex flex-col gap-5px mt-25px max-h-140px overflow-auto py-10px px-3 relative;
}

#search-checks .search-checks__body::-webkit-scrollbar {
   @apply w-4px;
}

#search-checks .search-checks__body::-webkit-scrollbar-thumb {
   @apply bg-rarely-1 rounded-[10px];
}
</style>