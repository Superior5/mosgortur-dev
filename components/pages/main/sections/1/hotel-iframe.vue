<template>
   <div data-sletat-module-id="18ff2377-4055-4f60-b31c-baa9d92230e9" data-sletat-module-type="mgt"></div>
</template>
<script setup>
onMounted(() => {
   if (document.getElementById('my-datatable2')) return;
   const scriptTag = document.createElement("script");
   scriptTag.src = "https://front.sletat.ru/modules/module6/latest/module.js";
   scriptTag.id = "my-datatable2";
   scriptTag.defer = true;
   scriptTag.charset = 'utf-8';
   document.getElementsByTagName('head')[0].appendChild(scriptTag);
})

onUnmounted(() => {
   document.getElementById('my-datatable2').remove()
})

useHead({
   script: [{
      innerHTML: `
      window.__SLETAT_MODULE6_REWRITE_CONFIG__ = {
     "18ff2377-4055-4f60-b31c-baa9d92230e9": {
          tourCard: {
             files: ['https://online.mosgortur.ru/sl.css']
          }
      }
   };
      ` }]
})
</script>