<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
onMounted(() => {
  if (process.client) window.dataLayer = window.dataLayer || [];
});

useHead({
  meta: [{ name: "yandex-verification", content: "1ebd1e2a55725b6d" }],
  noscript: [
    {
      innerHTML:
        '<div><img src="https://mc.yandex.ru/watch/90662828" style="position:absolute; left:-9999px;" alt="" /></div>',
    },
  ],
  script: [
    {
      innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

   ym(90662828, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        trackHash:true,
        ecommerce:"dataLayer"
   });
   ym(97107007, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
   });
   ym(98638737, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
   })
  window['disableYaCounter97107007'] = true
  window['disableYaCounter98638737'] = true
   `,
    },
    {
      innerHTML: `
      (function(e, x, pe, r, i, me, nt){
e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)})
(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
ymab('metrika.90662828', 'init'/*, {clientFeatures}, {callback}*/);
      `,
    },
    {
      async: true,
      src: "https://widget.novofon.ru/novofon.js?sk=tG8eqAmzLTGE4114ZnkYeLM8RrdW9PRZ",
    },
  ],
});
</script>