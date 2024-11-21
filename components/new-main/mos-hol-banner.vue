<template>
       <div class="container">
        <div class="relative md:hidden flex justify-center" >
            <nuxt-link target="_blank" to="https://московскиеканикулы.рф/" class="w-full flex justify-center">
                <img  class="w-full " src="/banners/bannerMosHol.png" alt="">
                <div class="w-full absolute bottom-20px px-40px">
                    <BlocksButton class="button-gradient uppercase !h-40px w-full hover:(!text-white)">подробнее</BlocksButton>
                </div>
            </nuxt-link>
        </div>
        <div class="md:flex hidden my-80px justify-center" >
            <nuxt-link target="_blank" to="https://московскиеканикулы.рф/" class="w-full flex justify-center">
                <div class="w-full h-150px px-100px flex items-center justify-end mos-hol-banner">
                    <BlocksButton class="!h-40px px-40px font-normal tracking-[0.16px] hover:(!text-white bg-regular-0)">Подробнее</BlocksButton>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
    .mos-hol-banner {
        @apply relative bg-no-repeat bg-cover bg-left;
      background-image: url("/banners/mosHolBig.png");
      
    }

</style>