<template>
    <BlocksModal @close="$emit('close')" classes="p-56px w-auto">
        <div class="flex flex-col items-center text-center max-w-330px">
            <img class="md:h-[40px] h-[67px]" src="@/assets/images/icons/check.svg" alt="Оплата прошла успешно">
            <h2 class="h-2 text-24px font-black my-19px">Получилось!</h2>
            <div class="text-rarely-1 mb-34px">
                Ваш аккунат успешно создан!
            </div>
            <button @click="$emit('close')" class="auth-btn login">
                Отлично!
            </button>
        </div>
    </BlocksModal>
</template>

<script setup>
const emit = defineEmits(['changeModal']);

</script>

<style scoped>
.auth-btn {
    @apply w-full h-45px transition-all rounded-10px font-bold font-ptsans flex items-center justify-center px-10px py-5px cursor-pointer hover:opacity-60;
}

.auth-btn.login {
    @apply text-white;
    box-shadow: 0px 0px 30px 0px #FF7F5080;
    background: conic-gradient(from -3.29deg at 100% -50%, #FF6600 0deg, #FFCC00 0.06deg, #FF6600 360deg);
}
</style>