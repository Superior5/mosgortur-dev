<template>
   <div>
      <PagesLkMenu class="md:block hidden" :books-count="books.length" />
      <PagesLkCheckBookStasus v-if="books.length" :book-num="books.at(-1)?.Code" />
      <section class="md:mt-50px mt-30px " v-if="books.length">
         <div class="container">
            <div class="flex flex-col md:gap-20px gap-30px">
               <div @click="openBookCard(book)"
                  class="md:flex hidden rounded-10px h-152px bg-regular-3 flex justify-between items-center"
                  v-for="book in showBooks" :key="book.Key">
                  <div
                     class="bg-no-repeat w-360px h-full text-12px font-extrabold bg-center items-start bg-cover flex justify-end gap-10px text-white rounded-10px p-25px"
                     style="background-image: url('/new-main-section-15/bookPlaceholder.webp');">
                     <p :class="{ 'bg-red': book.Status == 'Аннулирован' }"
                        class="bg-regular-2 py-5px px-10px rounded-4px">{{ book.Status }}</p>
                  </div>
                  <div class="w-full font-mulish grid grid-cols-[1fr,150px,150px,150px,1fr] items-center px-20px">

                     <h4 v-if="book.CityEvent" class="font-extrabold text-18px leading-22px">{{ book.Country }}, <br>
                        {{ book.CityEvent }}</h4>
                     <h4 v-else class="font-extrabold text-18px">{{ book.Country }}</h4>
                     <div class="flex gap-6px text-12px items-center">
                        <IconsUser />
                        <!-- 2 взр, 1 реб -->
                        {{ priceFormatter(book.TuristCount) }} турист.
                     </div>
                     <div class="flex gap-6px text-12px items-center">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M12.1629 1.96809C12.0811 1.88719 11.9827 1.82293 11.8737 1.77922C11.7648 1.73551 11.6476 1.71326 11.5292 1.71385H10.6215V1.0711C10.6236 0.930138 10.5952 0.790266 10.5379 0.660114C10.4807 0.529962 10.396 0.41229 10.2889 0.314358C10.1854 0.213085 10.0611 0.132955 9.92361 0.0789095C9.78616 0.0248636 9.63848 -0.00195369 9.48966 0.000110749H9.03739C8.88851 -0.00185678 8.74079 0.0250783 8.60334 0.0792545C8.46589 0.133431 8.34161 0.213699 8.23819 0.315108C8.13105 0.413013 8.04625 0.53068 7.98903 0.660838C7.93182 0.790996 7.90339 0.930881 7.90551 1.07185V1.7146H5.1895V1.0711C5.19158 0.930138 5.16313 0.790266 5.10591 0.660114C5.0487 0.529962 4.96392 0.41229 4.85683 0.314358C4.75342 0.213177 4.62925 0.133102 4.49194 0.0790592C4.35463 0.0250163 4.2071 -0.00185091 4.05842 0.000110749H3.60614C3.45727 -0.00185678 3.30955 0.0250783 3.1721 0.0792545C3.03464 0.133431 2.91037 0.213699 2.80694 0.315108C2.69984 0.41304 2.61507 0.530712 2.55785 0.660864C2.50064 0.791016 2.47219 0.930888 2.47427 1.07185V1.7146H1.56893C1.45061 1.71401 1.33341 1.73626 1.22447 1.77997C1.11553 1.82368 1.01713 1.88794 0.935272 1.96884C0.849835 2.04635 0.781965 2.13952 0.7358 2.24267C0.689636 2.34583 0.666145 2.4568 0.666759 2.56884V11.142C0.669813 11.368 0.765722 11.584 0.934145 11.7442C1.10257 11.9044 1.33026 11.9961 1.56893 12H11.5261C11.7652 11.9969 11.9935 11.9056 12.1626 11.7455C12.3317 11.5854 12.4281 11.3691 12.4314 11.1428V2.57109C12.4325 2.45855 12.4092 2.347 12.363 2.2433C12.3168 2.1396 12.2487 2.04595 12.1629 1.96809ZM3.60852 11.142H1.56893V9.21378H3.60535L3.60852 11.142ZM3.60852 8.78478H1.56893V6.64205H3.60535L3.60852 8.78478ZM3.60852 6.21305H1.56893V4.28482H3.60535L3.60852 6.21305ZM3.4501 3.14933C3.42867 3.13 3.41164 3.10672 3.40006 3.08092C3.38849 3.05513 3.3826 3.02736 3.38278 2.99933V1.0711C3.3836 1.01445 3.40773 0.960345 3.45003 0.920286C3.49234 0.880227 3.54948 0.857379 3.60931 0.856603H4.05842C4.11824 0.857379 4.17539 0.880227 4.21769 0.920286C4.26 0.960345 4.28413 1.01445 4.28495 1.0711V3.00008C4.28413 3.05673 4.26 3.11084 4.21769 3.1509C4.17539 3.19096 4.11824 3.21381 4.05842 3.21458H3.60614C3.57623 3.21481 3.54658 3.2092 3.51905 3.19811C3.49152 3.18701 3.46671 3.17066 3.44615 3.15008L3.4501 3.14933ZM6.32454 11.1413H4.05842V9.21378H6.32137L6.32454 11.1413ZM6.32454 8.78403H4.05842V6.64205H6.32137L6.32454 8.78403ZM6.32454 6.2123H4.05842V4.28482H6.32137L6.32454 6.2123ZM9.04056 11.1405H6.77364V9.21378H9.0366L9.04056 11.1405ZM9.04056 8.78328H6.77364V6.64205H9.0366L9.04056 8.78328ZM9.04056 6.21155H6.77364V4.28482H9.0366L9.04056 6.21155ZM8.88214 3.14783C8.86032 3.12906 8.84274 3.10628 8.83049 3.08088C8.81823 3.05549 8.81156 3.028 8.81085 3.00008V1.0711C8.81147 1.01439 8.83554 0.960175 8.87789 0.920075C8.92024 0.879975 8.9775 0.857189 9.03739 0.856603H9.48966C9.54955 0.857189 9.60681 0.879975 9.64916 0.920075C9.69151 0.960175 9.71558 1.01439 9.7162 1.0711V3.00008C9.71558 3.05679 9.69151 3.11101 9.64916 3.15111C9.60681 3.19121 9.54955 3.214 9.48966 3.21458H9.03739C9.00746 3.21486 8.9778 3.20927 8.95027 3.19817C8.92273 3.18707 8.89792 3.1707 8.87739 3.15008L8.88214 3.14783ZM11.5308 11.1398H9.48966V9.21378H11.5261L11.5308 11.1398ZM11.5308 8.78253H9.48966V6.64205H11.5261L11.5308 8.78253ZM11.5308 6.2108H9.48966V4.28482H11.5261L11.5308 6.2108Z"
                              fill="black" />
                        </svg>
                        {{ formatDate(book.TourDate, book.DurationTour) }}
                     </div>
                     <div class="font-extrabold text-18px">{{ priceFormatter(book.Price) }} ₽</div>
                     <div class="text-regular-0 cursor-pointer flex gap-20px justify-end">
                        <IconsNewMainLinkArrow />

                     </div>
                  </div>
               </div>
               <nuxt-link :to="`/lk/book-item?book=${book.Key}`"
                  class="md:hidden flex relative rounded-10px bg-regular-3 flex justify-between items-center"
                  v-for="book in showBooks" :key="book.Key">
                  <div
                     class="bg-no-repeat w-full h-190px text-12px bg-center items-start bg-cover flex justify-end gap-10px text-white rounded-10px p-25px"
                     style="background-image: url('/new-main-section-15/bookPlaceholder.webp');">
                     <div class="w-full h-full font-mulish flex flex-col items-start justify-between relative z-10">

                        <div class="flex w-full justify-between items-start">
                           <p :class="{ 'bg-red': book.Status == 'Аннулирован' }"
                              class="bg-regular-2 py-5px px-10px rounded-4px">{{ book.Status }}</p>
                        </div>

                        <h4 v-if="book.CityEvent" class="text-18px font-800 leading-22px">{{ book.Country }}, <br>
                           {{ book.CityEvent }}</h4>
                        <h4 v-else class="text-18px font-800">{{ book.Country }}</h4>
                        <div class="w-full font-700 flex flex-col gap-6px">
                           <div class="flex justify-between">
                              <div class="flex gap-6px text-12px items-center">
                                 <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M12.1629 1.96809C12.0811 1.88719 11.9827 1.82293 11.8737 1.77922C11.7648 1.73551 11.6476 1.71326 11.5292 1.71385H10.6215V1.0711C10.6236 0.930138 10.5952 0.790266 10.5379 0.660114C10.4807 0.529962 10.396 0.41229 10.2889 0.314358C10.1854 0.213085 10.0611 0.132955 9.92361 0.0789095C9.78616 0.0248636 9.63848 -0.00195369 9.48966 0.000110749H9.03739C8.88851 -0.00185678 8.74079 0.0250783 8.60334 0.0792545C8.46589 0.133431 8.34161 0.213699 8.23819 0.315108C8.13105 0.413013 8.04625 0.53068 7.98903 0.660838C7.93182 0.790996 7.90339 0.930881 7.90551 1.07185V1.7146H5.1895V1.0711C5.19158 0.930138 5.16313 0.790266 5.10591 0.660114C5.0487 0.529962 4.96392 0.41229 4.85683 0.314358C4.75342 0.213177 4.62925 0.133102 4.49194 0.0790592C4.35463 0.0250163 4.2071 -0.00185091 4.05842 0.000110749H3.60614C3.45727 -0.00185678 3.30955 0.0250783 3.1721 0.0792545C3.03464 0.133431 2.91037 0.213699 2.80694 0.315108C2.69984 0.41304 2.61507 0.530712 2.55785 0.660864C2.50064 0.791016 2.47219 0.930888 2.47427 1.07185V1.7146H1.56893C1.45061 1.71401 1.33341 1.73626 1.22447 1.77997C1.11553 1.82368 1.01713 1.88794 0.935272 1.96884C0.849835 2.04635 0.781965 2.13952 0.7358 2.24267C0.689636 2.34583 0.666145 2.4568 0.666759 2.56884V11.142C0.669813 11.368 0.765722 11.584 0.934145 11.7442C1.10257 11.9044 1.33026 11.9961 1.56893 12H11.5261C11.7652 11.9969 11.9935 11.9056 12.1626 11.7455C12.3317 11.5854 12.4281 11.3691 12.4314 11.1428V2.57109C12.4325 2.45855 12.4092 2.347 12.363 2.2433C12.3168 2.1396 12.2487 2.04595 12.1629 1.96809ZM3.60852 11.142H1.56893V9.21378H3.60535L3.60852 11.142ZM3.60852 8.78478H1.56893V6.64205H3.60535L3.60852 8.78478ZM3.60852 6.21305H1.56893V4.28482H3.60535L3.60852 6.21305ZM3.4501 3.14933C3.42867 3.13 3.41164 3.10672 3.40006 3.08092C3.38849 3.05513 3.3826 3.02736 3.38278 2.99933V1.0711C3.3836 1.01445 3.40773 0.960345 3.45003 0.920286C3.49234 0.880227 3.54948 0.857379 3.60931 0.856603H4.05842C4.11824 0.857379 4.17539 0.880227 4.21769 0.920286C4.26 0.960345 4.28413 1.01445 4.28495 1.0711V3.00008C4.28413 3.05673 4.26 3.11084 4.21769 3.1509C4.17539 3.19096 4.11824 3.21381 4.05842 3.21458H3.60614C3.57623 3.21481 3.54658 3.2092 3.51905 3.19811C3.49152 3.18701 3.46671 3.17066 3.44615 3.15008L3.4501 3.14933ZM6.32454 11.1413H4.05842V9.21378H6.32137L6.32454 11.1413ZM6.32454 8.78403H4.05842V6.64205H6.32137L6.32454 8.78403ZM6.32454 6.2123H4.05842V4.28482H6.32137L6.32454 6.2123ZM9.04056 11.1405H6.77364V9.21378H9.0366L9.04056 11.1405ZM9.04056 8.78328H6.77364V6.64205H9.0366L9.04056 8.78328ZM9.04056 6.21155H6.77364V4.28482H9.0366L9.04056 6.21155ZM8.88214 3.14783C8.86032 3.12906 8.84274 3.10628 8.83049 3.08088C8.81823 3.05549 8.81156 3.028 8.81085 3.00008V1.0711C8.81147 1.01439 8.83554 0.960175 8.87789 0.920075C8.92024 0.879975 8.9775 0.857189 9.03739 0.856603H9.48966C9.54955 0.857189 9.60681 0.879975 9.64916 0.920075C9.69151 0.960175 9.71558 1.01439 9.7162 1.0711V3.00008C9.71558 3.05679 9.69151 3.11101 9.64916 3.15111C9.60681 3.19121 9.54955 3.214 9.48966 3.21458H9.03739C9.00746 3.21486 8.9778 3.20927 8.95027 3.19817C8.92273 3.18707 8.89792 3.1707 8.87739 3.15008L8.88214 3.14783ZM11.5308 11.1398H9.48966V9.21378H11.5261L11.5308 11.1398ZM11.5308 8.78253H9.48966V6.64205H11.5261L11.5308 8.78253ZM11.5308 6.2108H9.48966V4.28482H11.5261L11.5308 6.2108Z"
                                       fill="white" />
                                 </svg>
                                 {{ formatDate(book.TourDate, book.DurationTour) }}
                              </div>
                              <div class="flex gap-6px text-12px items-center">
                                 <IconsUser class="h-12px" />
                                 <!-- 2 взр, 1 реб -->
                                 {{ priceFormatter(book.TuristCount) }} турист.
                              </div>
                           </div>
                           <div>
                              <div class="font-700 text-18px leading-22px">{{ priceFormatter(book.Price) }} ₽</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="absolute rounded-10px top-0 left-0 w-full h-full bg-black/40"></div>
               </nuxt-link>
            </div>
            <BlocksButton @click="showAll = !showAll"
               class="mx-auto block bg-regular-3 !text-regular-0/100  !hover:(bg-regular-0 text-white) font-normal mt-42px !h-40px w-full border-none">
               {{
                  showAll ? 'Скрыть бронирования' : 'Показать все' }}</BlocksButton>
         </div>
      </section>
      <section class="mt-120px" v-else>
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
                     {{ i.buttonText }}
                  </BlocksLinkButton>
               </nuxt-link>
            </div>
         </div>
      </section>
   </div>

   <BlocksDocumentModal :book-code="bookCode" :reset-data="new Date().getMilliseconds()"
      :show="openedModal == 'documents'" @close="openedModal = 'card'" />
   <BlocksBookCard :book="clickedBook" :show="openedModal == 'card'" @open-documents="openDocuments"
      @close="openedModal = null" />
</template>
<script setup>
definePageMeta({
   layout: "lk",
});

const userStore = useUserStore();
const books = ref([]);
const clickedBook = ref(null)
const bookCode = ref(null)

const openedModal = ref(null)

const openDocuments = () => {
   bookCode.value = clickedBook.value.Code
   openedModal.value = 'documents'
}
watch(() => userStore.userInfo, async () => {
   if (userStore.userToken) {
      const res = await userStore.getBookedTours()
      userStore.reservations = res.data.m_Item2
      books.value = res.data.m_Item2
   }
})

onMounted(async () => {
   if (userStore.userInfo) {
      const res = await userStore.getBookedTours()
      books.value = res.data.m_Item2
   }
})

const downloadBook = async (code) => {
   let res = await userStore.downloadDocx(code)
   // isNoneDocuments.value = true;
}
const openBookCard = async (el) => {
   openedModal.value = 'card';
   clickedBook.value = el;
}
const showAll = ref(false)

const showBooks = computed(() => {
   return books.value.slice(0, showAll.value ? books.value.length : 5)
})



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