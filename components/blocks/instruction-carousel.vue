<template>
    <div id="my-slider" class="relative">
       <Carousel ref="myCarousel" @slide-start="slideHandler" 
         class="h-full" :items-to-show="1"
          :wrap-around="false">
          <slot :currentSlide="currentSlide" />
          <template #addons>
             <Navigation />
          </template>
       </Carousel>
       <div class="flex justify-center w-full mt-30px">
            <div class="w-full flex gap-3px">
                <div class="pagination-line relative transition-all flex-grow-1 bg-gray-200 rounded-[11px] h-5px" :class="{'!bg-regular-0': i == (currentSlide-1)}" v-for="(slide, i) in myCarousel?.data.slidesCount.value" :key="i">
                </div>
            </div>
       </div>
    </div>
 </template>
 
 <script setup>
 const props = defineProps(['toScroll'])
 const myCarousel = ref(null);
 const currentSlide = computed(() => myCarousel.value ? myCarousel.value.data.currentSlide.value + 1 : '')
const emit = defineEmits(['slide-start'])
 const slideHandler = () => {
   if(isMobile()) {
      props.toScroll.scrollIntoView({ behavior: "smooth" })
   }
   emit('slide-start')
 }
 </script>
 
 <style>
 #my-slider {
    @apply relative md:px-40px;
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
    @apply w-36px h-full m-0 md:flex hidden;
 }
.carousel__next {
    right: -40px;
}
.carousel__prev {
    left: -40px;
}
 
 .carousel .carousel__pagination-button::after {
    @apply block content-[''] w-8px h-8px rounded-1/2 bg-white/20;
 }
 
 .carousel .carousel__pagination-button:hover::after,
 .carousel .carousel__pagination-button--active::after {
    @apply bg-white;
 }

 .pagination-line:before, .pagination-line:last-child:after {
  content: '•';
  font-size: 25px;
  color: #EF6C00;
  position: absolute;
  top: 1px;
  line-height: 0px;
}
.pagination-line:before {
    left: -4px;
}
.pagination-line:last-child:after {
  right: -4px;
}
 </style>