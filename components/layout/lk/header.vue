<template>
   <header id="header" :style="`background-image: url(${bg})`" class="bg-no-repeat bg-cover bg-center">
      <div class="bg-white md:hidden p-10px items-center flex justify-between">
         <nuxt-link to="/"><img class="max-w-110px" src="@/assets/images/layouts/logo-black.png" alt=""></nuxt-link>
         <div class="text-black flex max-w-140px justify-between items-center w-full">
            <a href="tel:+7(800)3011770">
               <IconsPhone2/>
            </a>
            <nuxt-link to="/lk/book" class="text-regular-0">
               <IconsUser2/>
            </nuxt-link>
            <div @click="userStore.logout">
               <IconsExit/>
            </div>
         </div>
      </div>
     <div class="container text-white">
      <div class="py-16px md:flex hidden justify-between items-center gap-20px">
         <nuxt-link to="/"><img class="max-w-120px" src="@/assets/images/layouts/logo-black.png" alt=""></nuxt-link>
         <div class="w-full max-w-350px flex justify-between">
            <a href="tel:+7(800)3011770">
               <IconsPhone2/>
            </a>
            <!-- <div class="flex items-center gap-5px">
               <IconsCall/>
               <span class="w-14px h-14px rounded-1/2 bg-white !text-regular-0 text-9px flex items-center justify-center">3</span>
            </div> -->
            <nuxt-link to="/lk/book" class="flex items-center gap-5px">
               <IconsUser2/>
               <span>{{ userStore.userInfo ? userStore.userInfo.UserId : "" }}</span>
            </nuxt-link>
            <div class="flex items-center gap-5px cursor-pointer" @click="userStore.logout">
               <IconsExit/>
               <span>Выход</span>
            </div>
         </div>
      </div>
      <h2  v-if="route.name != 'lk-book-item'" class="pt-25px pb-40px md:(text-32px py-25px) text-24px font-extrabold font-mulish">
         {{dayPeriod()}}{{ userStore.clientName ? ", " + userStore.clientName : "" }}!
      </h2>
     </div>
   </header>
 </template>
 
 <script setup>
 import bg from '@/assets/images/layouts/lk-header.png'
const userStore = useUserStore();
const route = useRoute()


const dayPeriod = () => {
   let day = new Date(); 
  let hour = day.getHours(); 
  if (hour>=5 && hour<12) {
    return "Доброе утро" 
  } else if (hour>=0 && hour<5) {
   return "Доброй ночи";
  } else if (hour>=12 && hour<18) {
   return "Добрый день"; 
  } else if (hour>=18 && hour<24) {
   return "Добрый вечер"; 
  }
}
</script>
 <style scoped></style>