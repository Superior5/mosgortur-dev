<template>
    <div>
        <PagesAdminMainHotTours v-if="actName === 'hot-tours'" />
        <PagesAdminMainPopularDestinations v-if="actName === 'popular-destinations'" />
        <PagesAdminMainTourType v-if="actName === 'tour-type'" />
        <PagesAdminMainPartners v-if="actName === 'partners'" />
    </div>
</template>
<script setup>
const actName = ref(useRoute().params.name);
</script>