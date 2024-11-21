<template>
   <transition name="fade">
      <div v-if="show" @click.self="$emit('close')"
         class="bg-black/60 z-30 top-0 left-0 fixed w-screen h-screen flex justify-center items-center p-20px">
         <div :style="bgImage ? { backgroundImage: `url(${bgImage})`} : ''"
         class="lg:(p-40px max-w-600px) max-w-430px p-15px w-full bg-white relative rounded-[5px]" :class="classes">
            <div @click="$emit('close')" class="absolute top-30px right-30px cursor-pointer">
               <IconsCloseModal class="lg:block hidden"/>
               <IconsCloseModal class="lg:hidden block" :class="closeIconColor ? closeIconColor : 'text-black'"/>
            </div>
            <slot />
         </div>
      </div>
   </transition>
</template>
<script setup>
const props = defineProps({
   show: Boolean,
   bgImage: String,
   closeIconColor: String,
   classes: {
      type: String,
      default: 'lg:max-w-480px max-w-430px'
   }
})

watchEffect(() => (v => {
   useHead({
      htmlAttrs: {
         class: computed(() => v ? 'overflow-hidden lg:pr-17px' : ''),
      },
   })
})(props.show));
</script>