<template>
    <div class="relative">
        <Carousel ref="myCarousel" v-model="currentSlide" @slide-start="$emit('slide-start')" class="h-full"
            :items-to-show="1" :wrap-around="true">
            <Slide v-for="i in 6" :key="i">
                <img :src="`/best_hotels/${image}.jpg`" alt="">

            </Slide>
        </Carousel>
        <div class="w-full flex justify-center absolute bottom-10px">
            <div class="w-150px flex justify-center gap-16px">
                <div v-for="item in 6" :key="item" :class="{ '!opacity-100': currentSlide+1 == item }"
                    class="w-6px h-6px transition-all bg-white opacity-50 rounded-[50%]">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    image: String,
})
const myCarousel = ref(null);
const currentSlide = ref(0)
</script>