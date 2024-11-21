<template>
   <div>
      <PagesLkMenu />
      <section class="mt-120px">
         <div class="container">
            <p class="max-w-370px text-20px text-center mx-auto mb-90px">У вас еще не было путешествий с нами, самое
               время это исправить!</p>
            <div class="flex md:flex-row flex-col justify-center gap-45px">
               <nuxt-link :to="i.link" v-for="i in items" :key="i.title"
                  class="flex h-430px flex-col justify-between align-center p-35px text-center md:max-w-325px rounded-20px bg-no-repeat bg-center bg-cover"
                  :style="`background-color: ${i.color}; background-image: url('${i.img}');`">
                  <div class="">
                     <h3 class="font-mulish text-24px font-extrabold mb-18px">{{ i.title }}</h3>
                     <p>{{ i.desc }}</p>
                  </div>
                  <!-- <img :src="i.img" alt=""> -->
                  <BlocksLinkButton class="m-0 pt-0 px-0">
                     {{i.buttonText}}
                  </BlocksLinkButton>
               </nuxt-link>
            </div>
         </div>
      </section>
   </div>
</template>
<script setup>
definePageMeta({
   layout: "lk",
});

navigateTo('/lk/book')

const items = [
   {
      title: 'Отели',
      desc: 'Более 2000 интересных предложений по всему миру!',
      buttonText: 'Присмотреть отель',
      img: '/lk/hotel.png',
      link: '/hotels',
      color: '#FFFFCC'
   },
   {
      title: 'Детские лагеря',
      desc: 'Более 2000 интересных предложений по всему миру!',
      buttonText: 'Присмотреть лагерь',
      img: '/lk/camp.png',
      link: '/kids',
      color: '#FFF7F1'
   },
   {
      title: 'Туры',
      desc: 'Более 2000 интересных предложений по всему миру!',
      buttonText: 'Присмотреть тур',
      img: '/lk/plane.png',
      link: '/tours',
      color: '#E1F4FF'
   }
]
</script>
<style></style>