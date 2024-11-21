<template>
   <BlocksModal @close="$emit('close')">
      <div class="flex flex-col md:gap-24px gap-16px">
         <h2 class="h-2">Восстановление пароля</h2>
         <div class="">
            Для восстановления пароля, введите адрес электронной почты, который вы указывали при регистрации
         </div>
         <div class="flex flex-col gap-8px">
            <label for="reg-login">Введите email для восстановления</label>
            <input class="input-1" type="text" id="reg-login">
         </div>
         <BlocksButton class="md:(h-45px text-16px) text-14px h-40px uppercase">восстановить пароль</BlocksButton>
      </div>
   </BlocksModal>
</template>