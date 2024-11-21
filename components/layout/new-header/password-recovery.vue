<template>
   <BlocksModal @close="$emit('close')">
      <div class="flex flex-col gap-34px">
         <h2 class="h-2 text-24px font-black text-center">Восстановление пароля</h2>
         <div class="text-rarely-1">
            Введите вашу почту, указанную при регистрации. Мы отправим на неё ссылку для восстановления пароля.
         </div>
         <div class="flex flex-col gap-8px">
            <label for="reg-login" class="text-sm font-medium">E-mail</label>
            <input class="input-1" type="email" id="reg-login" v-model="email">
         </div>
         <button :disabled="loading" @click="handleSubmit" class="auth-btn login">
            Восстановить
         </button>
         <div class="text-center font-medium">
            <span>Или вы можете</span>
            <BlocksButton @click="$emit('changeModal', 'auth')" filling
               class="md:(h-45px) text-15px h-40px w-full mt-20px">
               Войти
            </BlocksButton>
         </div>
         <div v-if="error"
            class="text-white px-20px font-bold text-center absolute bottom-0 bg-red-500 py-5px w-full right-0">
            {{ error }}
         </div>
      </div>
   </BlocksModal>
</template>
<script setup>
const loading = ref(false)
const email = ref('')
const error = ref('')
const userStore = useUserStore()
const emit = defineEmits(['changeModal'])
const handleSubmit = async () => {
   if (!email.value) return error.value = 'Заполните поле'

   loading.value = true
   const { data } = await userStore.fetchPasswordRecovery({
      eMailLogin: email.value,
   })
   console.log(data);
   if (!data) return error.value = 'При восстановлении почты возникла ошибка, проверьте правильность указанной почты и попробуйте снова', loading.value = false;
   
   loading.value = false;
   emit('changeModal', 'success-recovery')
}

watch(error, () => {
   setTimeout(() => {
      error.value = ''
   }, 3000);
})
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

.auth-btn.login:disabled {
   @apply text-regular-0 bg-regular-3 cursor-not-allowed;
   background-image: none;
   box-shadow: none;
}
</style>