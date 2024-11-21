<template>
    <div class="container flex justify-center items-center xl:min-h-[calc(100vh-322px)] lg:min-h-[calc(100vh-355px)] md:min-h-[calc(100vh-410px)] min-h-[calc(100vh-655px)]">
        <h1 class="loading font-bold text-40px text-black">Проверка...</h1>
    </div>
</template>

<style scoped>
.loading {
  display: inline-block;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: l 1s steps(4) infinite;
}

@keyframes l {
  to {
    clip-path: inset(0 -1ch 0 0)
  }
}
</style>
<script setup>
const store = useUserStore();
onMounted(async ()=>{
    const cookieToken = useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth')
    
    if (cookieToken.value) {
        store.userToken = cookieToken.value;
        navigateTo('/lk')
    } else {
        navigateTo('/')
    }
})
</script>