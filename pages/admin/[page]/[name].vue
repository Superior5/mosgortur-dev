<template>
    <PagesAdminMenuAside v-if="adminStore.adminToken">
        <PagesAdminMain v-if="actPage === 'main'" />
        <PagesAdminTourists v-if="actPage === 'tourists'" />
        <PagesAdminPartners v-if="actPage === 'partners'" />
        <PagesAdminInformation v-if="actPage === 'information'" />
    </PagesAdminMenuAside>
</template>
<script setup>
const adminStore = useAdminStore()
const actPage = ref(useRoute().params.page);
if (!adminStore.adminToken) navigateTo('/')
</script>