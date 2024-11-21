export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.directive('thtml', {
      mounted: (el: HTMLElement, binding: any, vnode: any) => {
         el.innerHTML = binding.value;
      },
      getSSRProps(binding: any) {
         return {
            innerHTML: binding.value
         }
      }
   })
});