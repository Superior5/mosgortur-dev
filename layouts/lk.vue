<template>
   <div>
      <BlocksPlaceholder v-if="interfaceStore.loadData" />
      <LayoutLkHeader />
      <div class="<md:(pt-20px -mt-20px rounded-tr-20px rounded-tl-20px bg-white)" :class="{'!rounded-tr-0px !pt-0px !mt-0px !rounded-tl-0px': route.name == 'lk-book-item'}">
         <slot />
      </div>
      <LayoutLkFooter />
   </div>
</template>

<script setup>
const adminStore = useAdminStore()
const userStore = useUserStore()
const interfaceStore = useInterfaceStore()
const route = useRoute()

if (!userStore.userToken) {
  const cookieToken = useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth')

  if (cookieToken.value) {
     userStore.userToken = cookieToken.value;
  } else {
     if(route.name.includes('lk')) {
        navigateTo("/check-auth");
     }
  }
}

onMounted(async () => {
   await userStore.getUserInfo()
   
   if(!userStore.userInfo) {
      useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth').value = null
      userStore.userToken = null
      navigateTo('/')
   }
   // if (!userStore.userToken) {
   //    const cookieToken = useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth')

   //    if (cookieToken.value) {
   //       userStore.userToken = cookieToken.value;
   //       await userStore.getUserInfo()
   //    }
   // }

   if (!userStore.sessionId) userStore.sessionId = (new Date).valueOf()

   if (!adminStore.adminToken) {
      const cookieToken = useCookie('admin-token')

      if (cookieToken.value) adminStore.adminToken = cookieToken.value
   }

   if (isLarge()) interfaceStore.switchShowFilters = false
})
</script>
