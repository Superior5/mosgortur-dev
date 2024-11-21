<template>
    <transition name="fade">
       <div v-if="show" @click.self="$emit('close')"
          class="bg-black/60 z-30 top-0 left-0 fixed w-screen h-screen flex justify-center items-center p-20px">
          <div class="container p-28px md:pt-47px pt-20px w-full bg-white relative rounded-[5px] text-base-1">
             <div @click="$emit('close')" class="absolute top-15px right-15px cursor-pointer">
                <img src="@/assets/images/icons/close.svg" alt="">
             </div>
             <slot />
          </div>
       </div>
    </transition>
 </template>
 <script setup>
 const props = defineProps({
    show: Boolean
 })
 
 watchEffect(() => (v => {
    useHead({
       htmlAttrs: {
          class: computed(() => v ? 'overflow-hidden lg:pr-17px' : ''),
       },
    })
 })(props.show));
 </script>