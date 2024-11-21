<template>
   <section id="section-8" class="md:mt-150px mt-100px">
      <div class="container">
         <div class="flex  md:(flex-row items-center gap-70px) flex-col items-center gap-32px">
            <BlocksH2 class="md:text-32 text-20px leading-25px">Новости</BlocksH2>
            <BlocksSeeAll />
         </div>
         <div class="flex lg:(flex-row) flex-col md:(gap-40px mt-70px) gap-24px mt-32px">
            <div class="main-news overflow-hidden lg:(w-1/2) md:(w-full !h-[288px]) h-auto ">
               <div class="font-notosans relative z-1 font-medium mb-10px">19.07.2023</div>
               <div class="font-mulish relative z-1 md:(text-lg leading-22px) text-16px leading-18px font-bold">В России проводится онлайн-акция, приуроченная к
                  Международному
                  дню борьбы со злоупотреблением наркотическими средствами и их незаконным оборотом</div>
            </div>
            <div class="flex lg:(!flex-col w-1/2) flex-row w-full gap-30px">
               <div class="flex md:(flex-row) flex-col gap-20px">
                  <img src="@/assets/images/sections/8/news-2.png" class="rounded-[10px] lg:(h-126px)" alt="">
                  <div class="flex flex-col gap-8px">
                     <div class="font-notosans font-medium md:text-16px text-13px text-rarely-1">19.07.2023</div>
                     <div class="font-mulish md:(text-lg leading-20px line-clamp-5) text-14px leading-17px line-clamp-4 font-medium wrap-text">Объявлен конкурс на бесплатную путёвку в
                        «Орлёнок» на
                        смену «Авангард – моя траектория»</div>
                  </div>
               </div>
               <div class="flex md:(flex-row) flex-col  gap-20px">
                  <img src="@/assets/images/sections/8/news-3.png" class="rounded-[10px] lg:(h-126px) object-cover"
                     alt="">
                  <div class="flex flex-col gap-8px">
                     <div class="font-notosans font-medium md:text-16px text-13px  text-rarely-1">19.07.2023</div>
                     <div class="font-mulish md:(text-lg leading-20px line-clamp-5) text-14px leading-17px line-clamp-4 font-medium wrap-text">Всероссийская лига педагогов приглашает форум
                        успешных
                        цифровых практик в образовании</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
#section-8 .main-news {
   @apply relative bg-no-repeat bg-cover bg-center rounded-[10px] p-30px text-white flex flex-col justify-end;
   background-image: url('@/assets/images/sections/8/news-1.jpg');
}

#section-8 .main-news::after {
   @apply absolute w-full h-full content-[''] top-0 left-0;
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.5158438375350141) 20%, rgba(0, 212, 255, 0) 80%);
}

</style>