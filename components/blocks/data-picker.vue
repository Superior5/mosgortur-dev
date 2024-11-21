<template>
    <vue-date-picker v-model="date"
    locale="ru" cancelText="Отмена" selectText="Применить"
    input-class-name="!input-1" :format="'dd.MM.yy'"> 
    <template #input-icon>
        <img class="input-slot-image" src="@/assets/images/icons/calendar.svg"/>
    </template>
</vue-date-picker>
</template>

<script setup>
const date = ref();
</script>

<style>
    .dp__input_icon {
        left: auto;
        right: 12px;
    }
</style>