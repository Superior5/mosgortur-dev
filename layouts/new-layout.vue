<template>
    <div>
       <BlocksPlaceholder v-if="interfaceStore.loadData" />
       <LayoutNewHeader />
       <div>
          <slot />
       </div>
       <LayoutNewFooter />
       
    </div>
    <component v-if="useRoute().name != 'kids'" :is="'style'">
      jdiv {
      display: none;
      }
   </component>
    
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
      await userStore.getUserInfo()
   } else {
      if(route.name.includes('lk')) {
         navigateTo("/check-auth");
      }
   }
}

 onMounted(async () => {
    if (!userStore.userToken) {
       const cookieToken = useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth')
 
       console.log(cookieToken.value);
       
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
 