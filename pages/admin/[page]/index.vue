<template>
    ...
</template>
<script setup>
const adminStore = useAdminStore()
navigateTo(adminStore.adminToken ? `/admin/${adminStore.adminMenu[0].link}/${adminStore.adminMenu[0].pages[0].link}` : '/')
</script>