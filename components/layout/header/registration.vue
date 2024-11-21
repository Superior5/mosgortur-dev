<template>
   <BlocksModal @close="$emit('close')" :show="show">
      <div class="flex flex-col md:gap-24px gap-16px pb-10px">
         <h2 class="h-2">Регистрация</h2>
         <div class="flex flex-col gap-8px">
            <label for="reg-login">E-mail</label>
            <input v-model="email" class="input-1" type="text" id="reg-login">
         </div>
         <div class="flex flex-col gap-8px">
            <label for="reg-password">Пароль</label>
            <input v-model="password" class="input-1" type="password" id="reg-password">
         </div>
         <div class="flex flex-col gap-8px">
            <label for="reg-repassword">Подтверждение пароля</label>
            <input v-model="rePassword" class="input-1" type="password" id="reg-repassword">
         </div>
         <div class="flex justify-between">
            <img v-if="captcha.FileContents" :src="`data:${captcha.ContentType};base64,${captcha.FileContents}`" alt="">
            <BlocksButton @click="updateCaptcha" class="!p-10px btn-upd-captcha">
               <IconsLoader class="transition-transform load-icon duration-500 transform" />
            </BlocksButton>
         </div>
         <div class="flex flex-col gap-8px">
            <label for="reg-captcha">Введите текст с картинки</label>
            <input v-model="captchaTxt" class="input-1" type="text" id="reg-captcha">
         </div>
         <BlocksCheck :check="checkCond" @input="() => checkCond = !checkCond" key-check="checkCond">
            <span class="text-rarely-1 text-14px md:(leading-20px text-16px)">Нажимая на кнопку, я соглашаюсь на обработку
               <a class="text-regular-1" href="">персональных данных</a></span>
         </BlocksCheck>
         <BlocksButton :disabled="loading" @click="handleSubmit" class="md:(h-45px text-16px) text-14px h-40px uppercase">
            {{ loading ? 'Идет регистрация...' : 'регистрация' }}
         </BlocksButton>
         <div v-if="error"
            class="text-white px-20px font-bold text-center absolute bottom-0 bg-red-500 py-5px w-full right-0">
            {{ error }}
         </div>
      </div>
   </BlocksModal>
</template>

<script setup>
const emit = defineEmits(['success']);
const userStore = useUserStore()
const checkCond = ref(false)
const props = defineProps({ show: Boolean })
const error = ref('')
const loading = ref(false)
const email = ref('')
const password = ref('')
const rePassword = ref('')
const captchaTxt = ref('')
const captcha = ref({ FileContents: '', ContentType: '' })

const updateCaptcha = async () => captcha.value = await userStore.getCaptcha()

const handleSubmit = async () => {
   if (!password.value || !email.value || !captcha.value) return error.value = 'Заполните все поля'
   if (password.value != rePassword.value) return error.value = 'Заполните все поля'
   if (!checkCond.value) return error.value = 'Примите согласие на обработку персональных данных'

   loading.value = true
   const { data: isMail } = await userStore.checkMail(email.value)
   if (!isMail) return error.value = 'Такой Email уже существует', loading.value = false;
   const { data: check } = await userStore.checkCaptcha(captchaTxt.value)
   if (!check) return error.value = 'Текст с картинки введен неверное', loading.value = false;
   const { data } = await userStore.fetchRegistration({
      name: email.value,
      surname: email.value,
      phone: '',
      login: email.value,
      password: password.value,
      citizen: '',
      country: '',
      city: '',
      address: '',
      comment: '',
      BirthDay: '',
      captchaText: captchaTxt.value,
      sessionId: userStore.sessionId,
   })

   if (!data) return error.value = 'При регистрации возникла ошибка, попробуйте снова', loading.value = false;

   await userStore.fetchLogin({ password: password.value, username: email.value })

   if (!userStore.userToken) return error.value = 'При регистрации возникла ошибка, попробуйте снова', loading.value = false;


   await userStore.getUserInfo()


   setTimeout(async () => {
      password.value = ''
      email.value = ''
      captchaTxt.value = ''
      rePassword.value = ''
      loading.value = false
      emit('success')
   }, 1000);
}

watch(() => props.show, v => v ? updateCaptcha() : null)
watch(error, () => {
   setTimeout(() => {
      error.value = ''
   }, 3000);
})
</script>

<style scoped>
.btn-upd-captcha:hover .load-icon {
   @apply rotate-360;
}
</style>