<template>
   <PagesMainKids />
   <component :is="'script'" src="//code.jivo.ru/widget/MY7urFqqby"  async></component>
</template>

<script setup>
onBeforeRouteLeave(()=> {
   function jivo_onLoadCallback() {
      jivo_destroy();
      console.log('Widget is deleted')
   }

   jivo_onLoadCallback()
})


definePageMeta({
   layout: "new-layout",
});
</script>