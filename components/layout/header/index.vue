<template>
  <header id="header" class="py-22px">
    <div
      class="container flex md:(flex-row justify-between items-center) flex-col gap-20px"
    >
      <div class="flex w-full items-center gap-30px">
        <nuxt-link to="/" class="max-w-113px">
          <img src="@/assets/images/layouts/logo.png" alt="" />
        </nuxt-link>
      </div>

      <div v-if="false" class="flex gap-30px items-center">
        <img src="@/assets/images/icons/heart.svg" alt="" />
        <IconsInfo />
        <div class="relative">
          <blocks-blue-button
            @click="
              showModal =
                userStore.userInfo || adminStore.adminToken
                  ? 'user-menu'
                  : 'auth'
            "
            class="flex items-center gap-14px <md:p-12px"
            :class="{
              'bg-rarely-5 text-black':
                userStore.userInfo || adminStore.adminToken,
            }"
          >
            <span class="md:( !inline) !hidden">
              {{
                userStore.userInfo
                  ? userStore.userInfo.UserId
                  : adminStore.adminToken
                  ? "Админ"
                  : "Войти в кабинет"
              }}
            </span>
            <IconsUser />
          </blocks-blue-button>
          <div
            class="header__user-menu"
            @click="showModal = ''"
            v-if="showModal == 'user-menu'"
          >
            <nuxt-link
              :to="adminStore.adminToken ? '/admin' : '/lk'"
              class="hover:bg-gray-200 border-b"
            >
              {{ adminStore.adminToken ? "Админ панель" : "Личный кабинет" }}
            </nuxt-link>
            <div class="hover:bg-gray-200" @click="userStore.logout">Выход</div>
          </div>
        </div>
      </div>

      <div class="flex md:flex-row flex-col-reverse gap-30px">
        <div
         v-if="route.name==='kids'"
          class="cursor-pointer flex items-center gap-8px w-max"
          @click="navigateTo('/compare')"
        >
          <div class="flex">
            <IconsFavoriteTour class="text-white" />
          </div>
          <p class="text-regular-0 font-notosans text-14">Избранное</p>
        </div>

        <div class="relative flex md:(flex-row w-auto) w-full flex-col gap-10px">
          <nuxt-link target="_blank" to="/information/instructions">
            <BlocksOrangeButton
              @click="showModal = 'instruction'"
              class="gap-10px md:w-auto justify-center w-full h-46px whitespace-nowrap"
            >
              Как работать с модулем поиска?
            </BlocksOrangeButton>
          </nuxt-link>
          <nuxt-link target="_blank" to="https://hr.mosgortur.ru/corpmgt">
            <BlocksOrangeButton
              class="gap-10px md:w-auto justify-center w-full h-46px whitespace-nowrap"
            >
            Корпоративным клиентам
            </BlocksOrangeButton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="fixed w-screen h-screen top-0 left-0 z-9"
      @click="showModal = ''"
      v-if="showModal == 'user-menu'"
    />
    <LayoutHeaderAuth
      @changeModal="(e) => (showModal = e)"
      @close="showModal = ''"
      :show="showModal == 'auth'"
    />
    <LayoutHeaderPasswordRecovery
      :show="showModal == 'recovery'"
      @close="showModal = ''"
    />
    <LayoutHeaderRegistration
      :show="showModal == 'reg'"
      @success="showModal = 'success'"
      @close="showModal = ''"
    />
    <LayoutHeaderSuccesfullRegistration
      :show="showModal == 'success'"
      @close="showModal = ''"
    />
  </header>
</template>
<script setup>
const adminStore = useAdminStore();
const userStore = useUserStore();
const interfaceStore = useInterfaceStore();
const showModal = ref("");
const route = useRoute();

const showInstruction = (el) => {
  if (el == "kids") {
    interfaceStore.showModuleInstructionKids = true;
    interfaceStore.showModuleInstruction = false;
  }
  if (el == "tours") {
    interfaceStore.showModuleInstructionKids = false;
    interfaceStore.showModuleInstruction = true;
  }
};
</script>

<style scoped>
.header__user-menu {
  @apply shadow-4 absolute mt-7px z-10 top-full right-0 bg-white flex flex-col whitespace-nowrap rounded-[5px] children:(py-8px px-15px cursor-pointer transition);
}
</style>