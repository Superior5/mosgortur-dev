<template>
   <div id="my-slider" class="relative">
      <Carousel ref="myCarousel" @slide-start="$emit('slide-start')" class="h-full" :items-to-show="1"
         :wrap-around="false">
         <slot />
         <template #addons>
            <Navigation />
         </template>
      </Carousel>
      <div class="absolute flex justify-center w-full md:bottom-10px bottom-5px">
         <span class="bg-white/60 px-5px md:text-14px text-12px py-2px rounded-[5px]">
            {{ currentSlide }} / {{ myCarousel?.data.slidesCount }}
         </span>
      </div>
   </div>
</template>

<script setup>
const myCarousel = ref(null);
const currentSlide = computed(() => myCarousel.value ? myCarousel.value.data.currentSlide.value + 1 : '')
</script>

<style>
#my-slider {
   @apply relative;
}

.carousel .carousel__pagination {
   @apply relative m-0 bottom-20px;
}

.carousel .carousel__viewport,
.carousel .carousel__track {
   @apply h-full;
}

.carousel .carousel__prev,
.carousel .carousel__next {
   @apply bg-white/60 rounded-1/2 h-30px w-30px;
}

.carousel .carousel__pagination-button::after {
   @apply block content-[''] w-8px h-8px rounded-1/2 bg-white/20;
}

.carousel .carousel__pagination-button:hover::after,
.carousel .carousel__pagination-button--active::after {
   @apply bg-white;
}
</style>