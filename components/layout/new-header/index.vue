<template>
  <header id="header" class="pt-22px pb-22px relative z-10">
    <div class="container flex flex-row justify-between items-center gap-55px">
      <div class="flex items-center gap-30px">
        <nuxt-link to="/" class="w-400px max-w-113px">
          <img src="@/assets/images/layouts/logo.svg" alt="" />
        </nuxt-link>
      </div>

      <div class="text-14px md:(flex flex-col-reverse) lg:(flex-row gap-20px) hidden w-full items-center justify-between gap-50px">
        <div class="relative flex md:(flex-row w-auto) w-full flex-col gap-10px">
          <nuxt-link target="_blank" to="/information/instructions">
            <BlocksOrangeButton @click="showModal = 'instruction'"
              class="gap-10px md:w-auto justify-center w-full h-46px whitespace-nowrap">
              Как работать с модулем поиска?
            </BlocksOrangeButton>
          </nuxt-link>
          <nuxt-link target="_blank" to="https://hr.mosgortur.ru/corpmgt">
            <BlocksOrangeButton class="gap-10px md:w-auto justify-center w-full h-46px whitespace-nowrap">
              Корпоративным клиентам
            </BlocksOrangeButton>
          </nuxt-link>
        </div>
        <div class="flex items-center gap-50px">
          <div v-if="interfaceStore.showAuthIcon >= 5" @click="login" class="p-10px cursor-pointer"
            :class="{ 'text-regular-0': userStore.userToken }">
            <IconsUser />
          </div>
          <div v-for="nav in navsSecond" :key="nav.title" class="">
            <nuxt-link :to="nav.link" @click="openMenu = false" class="flex items-center gap-20px">
              <p>{{ nav.title }}</p>
            </nuxt-link>
          </div>
        </div>

      </div>
      <div class="flex md:hidden w-full max-w-200px items-center justify-between">
        <div class="cursor-pointer relative w-36px h-36px cursor-pointer flex justify-center items-center">
          <a class="absolute top-0 bottom-0 left-0 right-0" href="tel:+78003011770"></a>
          <IconsPhone />
        </div>
        <div v-if="interfaceStore.showAuthIcon >= 5" @click="login" :class="{ 'text-regular-0': userStore.userToken }">
          <IconsUser />
        </div>
        <div class="cursor-pointer" ref="excludeRef" @click="openMenu = !openMenu">
          <transition name="fade">
            <IconsNewMainCancel class="w-36px h-36px transform scale-50" v-if="openMenu" />
            <IconsNewMainBurger v-else />
          </transition>
        </div>
      </div>
    </div>
    <div class="w-full md:flex hidden mt-24px uppercase font-bold text-16px container justify-between items-center">
      <div class="cursor-pointer">
        <a href="tel:+78003011770">+7 (800) 301 17 70</a>
      </div>
      <div v-for="nav in navs" :key="nav.title" class="">
        <nuxt-link :to="nav.link" @click="openMenu = false" class="flex items-center gap-20px">
          <p>{{ nav.title }}</p>
        </nuxt-link>
      </div>
      <nuxt-link target="_blank" to="https://www.mos.ru/pgu2/landing/1022746">
        <div class="flex gap-20px items-center">
          <p class="leading-20px font-bold">
            Записаться в офис
          </p>
          <IconsNewMainLinkArrow />
        </div>
      </nuxt-link>
    </div>
    <div class="fixed w-screen h-screen top-0 left-0 z-9" @click="showModal = ''" v-if="showModal == 'user-menu'" />
  </header>

  <div ref="componentRef"
    class="w-full absolute text-black z-10 transition-all duration-700 max-h-0px overflow-hidden bg-regular-3"
    :class="{ 'max-h-1000px': openMenu }">
    <div v-for="nav in navs" :key="nav.title" class="relative text-regular-0 flex px-30px py-12px">
      <nuxt-link :to="nav.link" @click="openMenu = false" class="flex items-center gap-20px">
        <component v-if="nav.icon" :is="nav.icon" />
        <p class="uppercase font-bold text-14px">{{ nav.title }}</p>
      </nuxt-link>
    </div>

    <div v-for="nav in navsSecond" :key="nav.title" class="relative text-regular-0 flex px-30px py-12px">
      <nuxt-link :to="nav.link" @click="openMenu = false" class="flex items-center gap-20px">
        <component v-if="nav.icon" :is="nav.icon" />
        <p class="uppercase font-bold text-14px">{{ nav.title }}</p>
      </nuxt-link>
    </div>
  </div>

  <div v-if="openMenu" @click="openMenu = false" class="w-full h-screen fixed z-9 top-0"></div>

  <LayoutNewHeaderAuth @changeModal="(e) => (showModal = e)" @close="showModal = ''" :show="showModal == 'auth'" />
  <LayoutNewHeaderPasswordRecovery @changeModal="(e) => (showModal = e)" :show="showModal == 'recovery'"
    @close="showModal = ''" />
  <LayoutNewHeaderRegistration :show="showModal == 'reg'" @success="showModal = 'success'"
    @close="showModal = 'auth'" />
  <LayoutNewHeaderSuccesfullRegistration @changeModal="(e) => (showModal = e)" :show="showModal == 'success'"
    @close="showModal = ''" />
  <LayoutNewHeaderSuccessfullRecovery @changeModal="(e) => (showModal = e)" :show="showModal == 'success-recovery'"
    @close="showModal = ''" />
</template>
<script setup>
const adminStore = useAdminStore();
const userStore = useUserStore();
const toursStore = useToursStore();
const interfaceStore = useInterfaceStore();
const showModal = ref("");
const openMenu = ref(false)
const route = useRoute()

onMounted(() => {
  if (localStorage.getItem("toursCompare")) {
    toursStore.toursCompare = JSON.parse(localStorage.getItem("toursCompare"));
  }
});

watchEffect(() =>
  ((v) => {
    useHead({
      htmlAttrs: {
        class: computed(() => (v ? "overflow-hidden lg:pr-17px" : "")),
      },
    });
  })(openMenu.value)
);

const navs = [
  {
    title: 'ГЛАВНАЯ',
    link: '/',
    icon: resolveComponent('IconsNewMainMenuBase')

  },
  {
    title: 'Туры',
    link: '/tours',
    icon: resolveComponent('IconsNewMainMenuTour')
  },
  {
    title: 'Отели',
    link: '/hotels',
    icon: resolveComponent('IconsNewMainMenuHotel')
  },
  {
    title: 'Детские лагеря',
    link: '/kids',
    icon: resolveComponent('IconsNewMainMenuCamp')
  }
]

const navsSecond = [
  {
    title: 'Сертификаты',
    link: 'https://mosgortur.ru/lok/navigator',
    icon: resolveComponent('IconsNewMainMenuCertif')

  },
  {
    title: 'Помощь',
    link: 'https://online.mosgortur.ru/contacts',
    icon: resolveComponent('IconsNewMainMenuHelp')
  },
  {
    title: 'Контакты',
    link: 'https://online.mosgortur.ru/contacts/',
    icon: resolveComponent('IconsNewMainMenuContacts')
  }
]


const componentRef = ref()
const excludeRef = ref()

const login = () => {
  if (!userStore.userToken) {
    showModal.value = 'auth'
  } else {
    navigateTo('/lk/book')
  }
}

useClickOutside(
  componentRef,
  () => {
    openMenu.value = false
  },
  excludeRef
)
</script>



<style scoped>
.header__user-menu {
  @apply shadow-4 absolute mt-7px z-10 top-full right-0 bg-white flex flex-col whitespace-nowrap rounded-[5px] children:(py-8px px-15px cursor-pointer transition);
}

.gradient-bacgkround {
  background: linear-gradient(#ff7865, #fcd17c);
}

.gradient-bacgkround-nav {
  background: linear-gradient(#ff7865 0 5%, #fcd17c 25%);
}
</style>