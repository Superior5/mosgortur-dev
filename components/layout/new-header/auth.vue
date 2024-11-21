<template>
   <BlocksModal @close="$emit('close')" :show="show">
      <div class="flex flex-col pt-10px max-w-350px mx-auto">
         <h2 class="h-2 text-24px font-black text-center mb-44px">Авторизация</h2>
         <div class="mb-34px">
            <div class="flex flex-col gap-8px mb-16px">
               <label for="auth-login" class="text-sm font-medium">Логин</label>
               <input required v-model="login" class="input-1" type="text" />
            </div>
            <div class="flex flex-col gap-8px">
               <label for="auth-password" class="text-sm font-medium">Пароль</label>
               <div class="flex items-center relative">
                  <input required v-model="password" class="input-1 w-full pr-35px"
                     :type="inputTypePassword ? 'password' : 'text'" />
                  <img class="absolute right-10px cursor-pointer" v-if="password"
                     @click="inputTypePassword = !inputTypePassword" src="@/assets/images/icons/eye.svg" alt="" />
               </div>
            </div>
         </div>
         <div class="flex flex-col gap-16px">
            <button :disabled="isNotValid || loading" @click="handleSubmit" class="auth-btn login">
               Войти
            </button>
            <!-- <button class="auth-btn bg-[#CC0029]">
               <img src="@/assets/images/icons/mos.svg" alt="" />
            </button> -->
            <div id="buttonContainerId"></div>
         </div>
         <div class="mt-40px text-center font-medium">
            <span>У вас еще нет аккаунта?</span>
            <BlocksButton @click="$emit('changeModal', 'reg')" filling
               class="md:(h-45px) text-15px h-40px w-full mt-20px">
               Зарегистрироваться
            </BlocksButton>
         </div>
         <!-- <div>
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
         </div> -->
         <div @click="$emit('changeModal', 'recovery')"
            class="text-regular-0 font-medium text-center cursor-pointer mt-40px">
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
const emit = defineEmits(["close"]);
const props = defineProps({
   show: Boolean,
});
const checkCond = ref(false);
const checkLK = ref(false);
const adminStore = useAdminStore();
const userStore = useUserStore();
const loading = ref(false);
const login = ref("");
const password = ref("");
const error = ref("");
const inputTypePassword = ref(true);

useHead({
   script: [
      {
         src: "https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js",
      },
   ],
});

watch(() => props.show, (v) => {
   if (v) {
      nextTick(() => {
         var oauthQueryParams = {
            client_id: '618e503d0da94e1a80e24b2dd7007fe1',
            response_type: 'token',
            redirect_uri: 'https://online.mosgortur.ru/check-auth-yandex',
         };

         var tokenPageOrigin = 'https://online.mosgortur.ru';

         window.YaAuthSuggest.init(
            oauthQueryParams,
            tokenPageOrigin,
            {
               view: "button",
               parentId: "buttonContainerId",
               buttonSize: 'm',
               buttonView: 'main',
               buttonTheme: 'light',
               buttonBorderRadius: "10",
               buttonIcon: 'ya',
            }
         ).then(({ handler }) => handler()).then(async data => {

            userStore.userToken = data.extraData.token
            await userStore.getUserInfo()
            emit('close')

         }).catch(error => console.log('Обработка ошибки', error));
      })
   }
})

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

   // if (!checkCond.value) return error.value = 'Примите согласие на обработку персональных данных'

   loading.value = true
   await userStore.fetchLogin({ password: password.value, username: login.value })

   if (!userStore.userToken) {
      loading.value = false
      return
   }

   await userStore.getUserInfo()

   if (checkLK.value) {

      navigateTo('/lk/book')
   }
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


<style scoped>
.auth-btn {
   @apply w-full h-45px transition-all rounded-10px font-bold font-ptsans flex items-center justify-center px-10px py-5px cursor-pointer hover:opacity-60;
}

.auth-btn.login {
   @apply text-white;
   box-shadow: 0px 0px 30px 0px #ff7f5080;
   background: conic-gradient(from -3.29deg at 100% -50%,
         #ff6600 0deg,
         #ffcc00 0.06deg,
         #ff6600 360deg);
}

.auth-btn.login:disabled {
   @apply text-regular-0 bg-regular-3 cursor-not-allowed;
   background-image: none;
   box-shadow: none;
}
</style>

