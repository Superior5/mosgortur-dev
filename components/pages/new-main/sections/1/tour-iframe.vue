<template>
  <div
    data-sletat-module-id="68ea30c6-f7a0-4a8c-9775-ccd5a3063a02"
    data-sletat-module-type="mgt"
  ></div>
</template>
<script setup>
onMounted(() => {
  if (document.getElementById("my-datatable1")) return;
  const scriptTag = document.createElement("script");
  scriptTag.src = "https://front.sletat.ru/modules/module6/latest/module.js";
  scriptTag.id = "my-datatable1";
  scriptTag.defer = true;
  scriptTag.charset = "utf-8";
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
});

onUnmounted(() => {
  document.getElementById("my-datatable1").remove();
});

useHead({
  script: [
    {
      innerHTML: `
      window.__SLETAT_MODULE6_REWRITE_CONFIG__ = {
     "68ea30c6-f7a0-4a8c-9775-ccd5a3063a02": {
          tourCard: {
             files: ['https://online.mosgortur.ru/sl.css']
          }
      }
   };
      `,
    },
  ],
});
</script>