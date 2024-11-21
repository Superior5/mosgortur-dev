<template>
    <PagesMainForeignTours />
 </template>

 <script setup>
onMounted(()=> {
    window['disableYaCounter98638737'] = false
    console.log(window['disableYaCounter98638737']);
})

onBeforeRouteLeave(()=> {
    window['disableYaCounter97107007'] = true
    console.log(window['disableYaCounter97107007']);
})

definePageMeta({
    layout: "new-layout",
});
</script>