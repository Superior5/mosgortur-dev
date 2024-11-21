<template>
    <div>
        <PagesAdminPartnersForAccommodationFacilities v-if="actName === 'for-accommodation-facilities'" />
        <PagesAdminPartnersForServiceProviders v-if="actName === 'for-service-providers'" />
        <PagesAdminPartnersForKidsCamps v-if="actName === 'for-kids-camps'" />
    </div>
</template>
<script setup>
const actName = ref(useRoute().params.name);
</script>
<style></style>