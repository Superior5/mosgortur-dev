<template>
    <section id="section-5" class="md:my-80px mt-60px">
        <div class="container">
            <div class="body flex md:items-center items-start">
                <div
                    class="flex xl:items-center items-start xl:(flex-row gap-50px ml-[12%]) md:(mb-0 ml-60px gap-0 ml-[17%] max-w-none) max-w-220px gap-11px mb-20px flex-col">
                    <h5 class="lg:text-20px leading-7 font-mulish font-bold">
                        Лучшие каникулы для вашего ребенка – бронируйте детские лагеря сейчас!
                    </h5>
                </div>
                <nuxt-link class="md:(text-14px w-auto) w-full"
                    to="/kids">
                    <div class="px-60px py-3px uppercase bg-regular-0 leading-33px font-bold rounded-[6px] text-white">
                        забронировать
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
#section-5 .body {
    @apply bg-no-repeat bg-cover md:(rounded-[20px] bg-sert-desc py-0 h-100px flex-row text-left m-0 max-w-none) px-20px max-w-320px mx-auto pt-8px pb-30px flex-col bg-sert-mobile relative flex justify-between;
}
</style>