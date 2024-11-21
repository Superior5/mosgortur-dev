<template>
    <div class="banner overflow-hidden w-full h-full flex lg:flex-row flex-col justify-between md:bg-transparent bg-regular-3" :class="{'bg-[#f6ecf5]': banner?.titleColor}">
        <div
            v-if="banner?.isDayCamp"
            class="xl:(w-[calc(33.333333% + 30px)]) !px-35px text-left lg:w-1/2 w-full flex flex-col justify-center rounded-l-[10px] items-start md:h-full h-350px font-ptsans text-15px leading-20px tracking-[0.03em] bg-regular-3 py-20px px-22px">
            <h3 v-html="banner?.title" class="font-mulish md:text-27px text-22px md:text-left text-center font-bold leading-34px">
            </h3>
        </div>
        <div v-else
            class="info-card xl:(w-[calc(33.333333% + 30px)]) text-left lg:w-1/2 w-full flex flex-col md:justify-between rounded-l-[10px] items-start md:h-full h-350px font-ptsans text-15px leading-20px tracking-[0.03em] bg-regular-3 py-20px px-22px" :class="{'bg-[#f6ecf5]': banner?.titleColor}">
            <div class="flex flex-col gap-7px mb-7px">
                <h3 class="font-mulish md:text-27px text-22px font-bold leading-34px" :class="{'text-[#7901c4]': banner?.titleColor}">
                    {{ banner?.title }}
                </h3>
            </div>
            <div class="flex w-full !lg:(flex-col justify-start) !md:(flex-row justify-between) flex-col justify-start">
                <div class="flex flex-col gap-7px">
                    <p :class="{'text-[#ff509e] text-20px font-bold': banner?.titleColor}">{{banner?.date}}</p>
                    <div class="flex text-16px gap-12px">
                        <p class="font-bold">{{banner?.price}}</p>
                        <BlocksOldPrice>{{banner?.oldPrice}}</BlocksOldPrice>
                    </div>
                </div>
                <div class="lg:mt-25px md:mt-0px mt-25px">
                    <div v-for="item in banner?.include" :key="item" class="flex">
                        <IconsFavoriteTour v-if="banner?.titleColor" class="w-full max-w-13px mr-8px text-[#ff509e] border-none"/>
                        <img v-else class="w-13px mr-8px" src="@/assets/images/icons/success-check.svg" alt="" />
                        <p :class="{'text-[#7901c4] font-bold': banner?.titleColor}">{{item}}</p>
                    </div>
                </div>
            </div>
            <div class="flex !lg:flex-col md:flex-row flex-col">
                <p class="text-rarely-1 lg:my-25px md:my-0px my-25px max-w-340px">
                    *заявки принимаются только через бронирование на сайте
                </p>
            </div>
            <div class="flex w-1/2 gap-5px">
                <div class="h-4px flex-grow-1"></div>
            </div>
        </div>
        <div 
            :style="{ backgroundImage: `url(${banner?.image})`}"
            class="illustration xl:(w-2/3) rounded-[10px] flex justify-center items-center lg:w-1/2 w-full relative">
            <a target="_blank"
                :href="banner?.isDayCamp ? '/day-camp' : banner?.link"
                class="text-white font-notosans text-13px font-bold leading-33px w-[80%] h-40px flex justify-center items-center uppercase absolute block bottom-22px z-1">
            Подробнее
            </a>
        </div>
    </div>
</template>
<script setup>
 const props = defineProps({
    banner: Object,
 })

</script>
<style>

.banner .info-card {
 @apply h-auto;
}

.banner {
 @apply rounded-[10px]
}

.illustration {
 @apply relative bg-no-repeat bg-cover bg-center md:h-full h-380px;
}
.illustration a {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(15px);
}
</style>