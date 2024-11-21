<template>
   <section class="py-20px">
         <div class="container">
            <div class="md:flex hidden justify-between items-center">
               <nuxt-link to="/lk/book" class="flex gap-24px text-regular-0 text-20px font-bold items-center">
                  <IconsBasket />
                  Мои бронирования ({{ booksCount }})
               </nuxt-link>
               <nuxt-link to="/question-answer" class="flex gap-24px text-rarely-1 text-20px font-bold items-center">
                  <IconsAsk />
                  Ответы на вопросы
               </nuxt-link>
               <nuxt-link to="https://www.mos.ru/pgu2/landing/1022746">
               <BlocksLinkButton class="w-auto m-0 pt-0 px-0">
                  <div class="flex gap-20px items-center">
                     <IconsSun />
                     Записаться в офис
                  </div>
               </BlocksLinkButton></nuxt-link>
            </div>
            <div class="md:hidden">
               <div
                  class="grid text-sm grid-cols-[100px,100px] justify-center gap-50px text-regular-0 font-bold text-center">
                  <nuxt-link :to="item.link" v-for="item in mobileMenu" :key="item.name">
                     <div class="rounded-10px bg-regular-3 w-full h-100px flex justify-center items-center mb-8px">
                        <component :is="item.icon" />
                     </div>
                     <p>{{ item.name }}</p>
                  </nuxt-link>
               </div>
               <BlocksLinkButton class="w-auto mt-40px mx-0 pt-0 px-0">
                  <div class="flex gap-20px items-center">
                     <IconsSun />
                     Записаться в офис
                  </div>
               </BlocksLinkButton>
            </div>
         </div>
      </section>
</template>
<script setup>
const props = defineProps({
   booksCount: {
      type: Number,
      default: 0
   }
})

const IconsBasket = resolveComponent("IconsBasket");
const IconsAsk = resolveComponent("IconsAsk");
const IconsLike = resolveComponent("IconsLike");
const IconsMessage = resolveComponent("IconsMessage");

const mobileMenu = [
   {
      name: 'Мои бронирования',
      icon: IconsBasket,
      link: '/lk/book'
   },
   {
      name: 'Обратная связь',
      icon: IconsLike,
      link: '/'
   },
   {
      name: 'Связаться с нами',
      icon: IconsMessage,
      link: '/'
   },
   {
      name: 'Ответына вопросы',
      icon: IconsAsk,
      link: '/question-answer'
   }
]
</script>
<style>
   
</style>