<template>
    <div>
        <PagesAdminTouristsMemo v-if="actName === 'memo'" />
        <PagesAdminTouristsBeforeTrip v-if="actName === 'before-trip'" />
        <PagesAdminTouristsResortFee v-if="actName === 'resort-fee'" />
    </div>
</template>
<script setup>
const actName = ref(useRoute().params.name);
</script>
<style></style>