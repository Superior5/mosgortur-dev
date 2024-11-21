<template>

<svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.868164 14.6316C0.868164 6.82723 7.19538 0.5 14.9997 0.5C22.8041 0.5 29.131 6.82723 29.131 14.6316C29.131 22.4356 22.9712 35.5 15.164 35.5C7.35666 35.5 0.868164 22.4359 0.868164 14.6316ZM14.8682 19.5C18.1819 19.5 20.8682 16.8137 20.8682 13.5C20.8682 10.1863 18.1819 7.5 14.8682 7.5C11.5545 7.5 8.86816 10.1863 8.86816 13.5C8.86816 16.8137 11.5545 19.5 14.8682 19.5Z" fill="currentColor"/>
</svg>
</template>

<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
})
</script>
