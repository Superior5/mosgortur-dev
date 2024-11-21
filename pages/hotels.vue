<template>
    <PagesMainHotels />
 </template>

<script setup>

const route = useRoute();
onMounted(()=> {
    window['disableYaCounter97107007'] = false
    console.log(window['disableYaCounter97107007']);
})

onBeforeRouteLeave(()=> {
    window['disableYaCounter97107007'] = true
    console.log(window['disableYaCounter97107007']);
})

definePageMeta({
    layout: "new-layout",
});
</script>