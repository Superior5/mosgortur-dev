<template>
   <div id="entertainment">
      <h2>Развлечения</h2>
      <div class="grid md:grid-cols-4 grid-cols-2 mt-30px gap-x-20px gap-y-30px">
         <PagesCampCard v-for="i in 8" :key="i" :obj="{ name: 'Меню без глютена', price: 'от 1500 руб.' }" />
      </div>
   </div>
</template>
<script setup>
</script>
