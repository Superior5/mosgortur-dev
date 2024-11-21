<template>
   <p id="link-static-page">
      <IconsLink />
      <a :href="link">
         <slot />
      </a>
   </p>
</template>
<script setup>
const props = defineProps({
   link: String
})
</script>
<style>
#link-static-page {
   @apply text-regular-0 p-10px !my-15px flex gap-10px;
}

#link-static-page a {
   @apply underline-transparent text-lg;
}

#link-static-page svg {
   @apply min-w-24px;
}
</style>