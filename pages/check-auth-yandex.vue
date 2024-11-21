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
const userStore = useUserStore();
useHead({
   script: [
      { src: "https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" }
   ],
});

onMounted(async ()=>{
    var urlParams = new URLSearchParams(window.location.hash.substring(1));
    var accessToken = urlParams.get('access_token');

    await userStore.fetchLogin({ yandex_token: accessToken })

     YaSendSuggestToken(
        'https://online.mosgortur.ru', 
        {
          token: userStore.userToken
        }
    );
})
</script>