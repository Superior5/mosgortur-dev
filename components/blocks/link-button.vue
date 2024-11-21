<template>
    <div
        class="container flex grid pt-30px children:(h-55px text-white font-ptsans md:justify-center gap-15px justify-between p-8px  pl-20px flex items-center rounded-[10px])">
        <nuxt-link class="button-gradient" :class="classes" :to="link">
            <slot/>
            <IconsNewMainLinkArrow/>
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
    link: String,
    classes: String,
})
</script>

<style scoped>

.button-no-gradient {
    background: #F5F5F5;
    border: none;
    box-shadow: none;
    color: black !important;
}

.button-no-gradient:hover {
    background: conic-gradient(from -3deg at 100% -13%, #bababa 0.05824981606565416deg, #ffffff 360deg) !important;
    box-shadow: none;
    color: black !important;
}
</style>