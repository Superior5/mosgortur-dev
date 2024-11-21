<template>
   <BlocksModal @close="$emit('close')">
      <div class="md:gap-24px flex flex-col gap-16px pt-10px max-w-350px mx-auto">
         <h2 class="h-2">Авторизация</h2>
         <div class="flex flex-col gap-8px">
            <label for="auth-login">Логин</label>
            <input required v-model="login" class="input-1" type="text">
         </div>
         <div class="flex flex-col gap-8px">
            <label for="auth-password">Пароль</label>
            <input required v-model="password" class="input-1" type="password">
         </div>
         <div>
            <BlocksCheck required :check="checkCond" @input="() => checkCond = !checkCond" key-check="checkCond">
               <span class="text-rarely-1 text-14px md:(leading-20px text-16px)">
                  Нажимая на кнопку, я соглашаюсь на обработку
                  <a class="text-regular-1" target="_blank"
                     href="https://mosgortur.dev/documents/ConsentToTheProcessingOfPersonalData.pdf">
                     персональных данных
                  </a>
               </span>
            </BlocksCheck>
            <BlocksCheck :check="checkLK" @input="() => checkLK = !checkLK" key-check="checkLK">
               <span class="text-rarely-1 leading-20px">Перейти в личный кабинет</span>
            </BlocksCheck>
         </div>
         <div class="flex flex-col gap-10px">
            <BlocksButton :disabled="loading" @click="handleSubmit"
               class="md:(h-45px text-16px) text-14px h-40px uppercase">
               {{ loading ? 'вход...' : 'войти' }}
            </BlocksButton>
            <BlocksButton @click="$emit('changeModal', 'reg')" filling
               class="md:(h-45px text-16px) text-14px h-40px uppercase">
               Регистрация туриста
            </BlocksButton>
         </div>
         <div @click="$emit('changeModal', 'recovery')" class="text-regular-1 text-center cursor-pointer">
            Забыли пароль?
         </div>
         <div v-if="error"
            class="text-white px-20px font-bold text-center absolute bottom-0 bg-red-500 py-5px w-full right-0">
            {{ error }}
         </div>
      </div>
   </BlocksModal>
</template>

<script setup>
const emit = defineEmits(['close']);
const checkCond = ref(false)
const checkLK = ref(false)
const adminStore = useAdminStore()
const userStore = useUserStore()
const loading = ref(false)
const login = ref('');
const password = ref('');
const error = ref('')

const handleSubmit = async () => {
   if (!password.value || !login.value) return error.value = 'Заполните все поля'

   if (login.value[0] == '&') {
      loading.value = true

      await adminStore.fetchAdminLogin({
         username: login.value,
         password: password.value
      })

      loading.value = false
      if (adminStore.adminToken) {
         emit('close')
         return navigateTo('/admin')
      }
   }

   if (!checkCond.value) return error.value = 'Примите согласие на обработку персональных данных'

   loading.value = true
   await userStore.fetchLogin({ password: password.value, username: login.value })

   if (!userStore.userToken) {
      loading.value = false
      return emit('close')
   }

   await userStore.getUserInfo()
   setTimeout(() => {
      login.value = ''
      password.value = ''
      loading.value = false
      emit('close')
   }, 1000);
}

watch(error, () => {
   setTimeout(() => {
      error.value = ''
   }, 3000);
})
</script>