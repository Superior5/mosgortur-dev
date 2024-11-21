<template>
  <transition name="fade">
    <div
      @click.self="$emit('close')"
      v-if="show"
      class="bg-black/50 top-0 left-0 fixed z-32 w-screen h-screen"
    />
  </transition>
</template>
<script setup>
const props = defineProps({
  show: [String, Boolean, Number],
});
</script>