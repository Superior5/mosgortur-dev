<template>
   <footer id="footer" class="container font-notosans md:mt-160px mt-100px">
     <div class="border-t md:(flex justify-between) border-rarely-0">
       <div class="flex md:(pt-30px pb-40px) py-20px">
         <div class="container flex md:gap-23px gap-30px justify-center">
           <div
             class="xl:(gap-30px flex-col items-start) gap-30px md:(flex-row gap-0) flex-col items-center justify-between">
             <nuxt-link to="/"><img class="max-w-180px" src="@/assets/images/layouts/logo-black.png" alt=""></nuxt-link>
             
           </div>
         </div>
       </div>
       <div
         class="md:(flex gap-50px justify-end items-center) grid grid-cols-1 gap-11px !text-center text-rarely-1 text-sm pt-20px pb-25px container">
         <span>© {{ new Date().getFullYear() }} Мосгортур</span>
         <a href="/documents/соглашение_о_конфиденциальности_персональной_информации.pdf">Условия использования</a><a
           href="/documents/соглашение_о_конфиденциальности_персональной_информации.pdf">Политика конфиденциальности</a>
       </div>
     </div>
 
   </footer>
 </template>
 
 <script setup>
 import viber from "@/assets/images/icons/viber.svg";
 import dzen from "@/assets/images/icons/dzen.svg";
 import vk from "@/assets/images/icons/vk.svg";
 import telegram from "@/assets/images/icons/telegram.svg";
 </script>
 <style scoped></style>