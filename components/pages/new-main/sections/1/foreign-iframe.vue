<template>
    <div
      data-sletat-module-id="419f5cf9-c594-417a-89a6-c627ea666e6e"
      data-sletat-module-type="mgt"
    ></div>
  </template>
  <script setup>
  onMounted(() => {
    if (document.getElementById("my-datatable3")) return;
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://front.sletat.ru/modules/module6/latest/module.js";
    scriptTag.id = "my-datatable3";
    scriptTag.defer = true;
    scriptTag.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  });
  
  onUnmounted(() => {
    document.getElementById("my-datatable3").remove();
  });
  
  useHead({
    script: [
      {
        innerHTML: `
        window.__SLETAT_MODULE6_REWRITE_CONFIG__ = {
       "419f5cf9-c594-417a-89a6-c627ea666e6e": {
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