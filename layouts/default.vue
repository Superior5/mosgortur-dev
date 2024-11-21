<template>
   <div>
      <BlocksPlaceholder v-if="interfaceStore.loadData" />
      <LayoutHeader />
      <slot />
      <LayoutFooter />
   </div>
</template>

<script setup>
const adminStore = useAdminStore()
const userStore = useUserStore()
const interfaceStore = useInterfaceStore()

onMounted(async () => {
   if (!userStore.userToken) {
      const cookieToken = useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth')

      if (cookieToken.value) {
         userStore.userToken = cookieToken.value;
         await userStore.getUserInfo()
      }
   }

   if (!userStore.sessionId) userStore.sessionId = (new Date).valueOf()

   if (!adminStore.adminToken) {
      const cookieToken = useCookie('admin-token')

      if (cookieToken.value) adminStore.adminToken = cookieToken.value
   }


   if (isLarge()) interfaceStore.switchShowFilters = false
})
</script>
