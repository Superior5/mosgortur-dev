<template>
    <div id="radio-checks">
       <div class="search-checks__body">
          <BlocksRadioCheck v-for="option in options" :check="checks.title == option.title"
             @input="$emit('changeCheck', option)" :key="option.title" :title="option.title" :key-check="option.key"
             :svg="option.svg" />
       </div>
    </div>
 </template>
 <script setup>
 const props = defineProps({
    placeholder: String,
    checks: [Array, Object],
    options: Object,
 })
  </script>
 <style scoped>
 #radio-checks .search-checks__body {
    @apply flex flex-col gap-5px max-h-140px overflow-auto py-10px px-3;
 }
 
 #radio-checks .search-checks__body::-webkit-scrollbar {
    @apply w-4px;
 }
 
 #search-checks .search-checks__body::-webkit-scrollbar-thumb {
    @apply bg-rarely-1 rounded-[10px];
 }
 </style>