<template>
    <div class="pr-25px h-full <md:(pr-0px)">
        <Carousel id="gallery" class="mb-20px" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="slide in 10" :key="slide">
                <img src="@/assets/images/basket-tabs/1/slider-1.png" alt="" loading="lazy"
                    class="object-cover rounded-[10px] w-full h-full" />
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="false" v-model="currentSlide" ref="carousel"
            class="<md:(hidden)">
            <Slide v-for="slide in 10" :key="slide">
                <img src="@/assets/images/basket-tabs/1/slider-1.png" alt="" @click="slideTo(slide - 1)" loading="lazy"
                    class="carousel__item object-cover rounded-[10px] w-full h-full" />
            </Slide>
        </Carousel>
    </div>
</template>

<style >
#thumbnails .carousel__slide {
    padding-right: 12px;
}

#thumbnails .carousel__slide:last-child {
    padding-right: 0px;
}

#thumbnails .carousel__slide {
    transition: .2s;
    filter: grayscale(80%);
}

#thumbnails .carousel__slide--active {
    filter: grayscale(0%);
}
</style>
<script setup>
const currentSlide = ref(0);


function slideTo(val) {
    currentSlide.value = val
}
</script>


