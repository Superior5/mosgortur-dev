<template>
   <section id="section-7" class="md:mt-150px mt-100px">
      <div class="container flex md:(flex-row) flex-col  items-center justify-center md:gap-60px gap-24px">
         <div class="flex flex-col gap-17px">
            <h2 class="h-2 text-left !<md:text-center">Будь в курсе наших новостей</h2>
            <div class="font-notosans md:(text-20px max-w-450px) text-left !<md:text-center text-16px w-full !leading-8">
               Подпишитесь и получайте выгодные туры <br> на свою почту
            </div>
         </div>
         <!-- В макете отличается компоновка элементов, поэтому для адаптива сделал отдельный блок кода -->
         <div class="w-full max-w-500px lg:hidden block ">
            <div class="flex gap-25px w-full">
               <input class="rounded-[6px] w-full py-7px px-17px border border-rarely-1" type="email" placeholder="E-mail">
            </div>
            <div class="flex md:(flex-row) flex-col items-center">
               <div class="font-notosans text-rarely-1 font-medium md:text-16px text-13px mt-16px text-center max-w-370px">Нажимая «Подписаться»
                  вы даёте
                  согласие
                  на обработку
                  персональных данных.</div>
               <BlocksButton class="md:(mt-0px text-16px) text-13px leading-33px mt-32px">Подписаться</BlocksButton>

            </div>

         </div>
         <div class="w-full max-w-500px lg:block hidden ">
            <div class="flex gap-25px w-full">
               <input key="" class="rounded-[6px] w-full py-10px px-17px border border-rarely-1" type="email"
                  placeholder="E-mail">
               <BlocksButton>Подписаться</BlocksButton>
            </div>
            <div class="font-notosans text-rarely-1 font-medium mt-16px max-w-370px">Нажимая «Подписаться» вы даёте
               согласие
               на обработку
               персональных данных.</div>
         </div>
      </div>
   </section>
</template>