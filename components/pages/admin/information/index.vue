<template>
    <div>
        <PagesAdminInformationAboutUs v-if="actName === 'about-us'" />
        <PagesAdminInformationBookingAndPayment v-if="actName === 'booking-and-payment'" />
        <PagesAdminInformationDocuments v-if="actName === 'documents'" />
    </div>
</template>
<script setup>
const actName = ref(useRoute().params.name);
</script>