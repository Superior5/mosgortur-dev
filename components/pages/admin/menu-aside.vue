<template>
   <div id="aside-menu" class="mt-80px">
      <div class="container flex gap-40px">
         <aside class="w-2/5 max-w-300px">
            <nav>
               <ul>
                  <li v-for="el in adminStore.adminMenu" :key="el.link" :class="{ 'active-tab': el.link === actPage }"
                     class="not-last:border-b transition-all flex flex-col font-pts border-b border-rarely-1 !last:border-0">
                     <a @click="actPage = actPage == el.link ? '' : el.link"
                        class="px-15px h-60px flex items-center cursor-pointer">
                        {{ el.title }}
                     </a>
                     <ul class="submenu" :class="{ 'act-menu': el.link === actPage }">
                        <li class="cursor-pointer border-b border-rarely-1 !last:border-0" v-for="item in el.pages"
                           :key="item.link">
                           <nuxt-link class="h-60px pl-15px flex items-center"
                              :to="`/${baseAdminURL}/${el.link}/${item.link}`">
                              {{ item.title }}
                           </nuxt-link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </nav>
         </aside>
         <div class="w-full">
            <h1 class="text-40px font-bold mb-30px">{{ title }}</h1>
            <slot />
         </div>
      </div>
   </div>
</template>
<script setup>
const adminStore = useAdminStore()
const route = useRoute()
const actPage = ref(route.params.page);
const baseAdminURL = ref('admin');

const title = route.params.name ? adminStore.adminMenu.find(el => el.link == actPage.value).pages.find(el => el.link == route.params.name).title : ''
</script>
<style>
#aside-menu .router-link-active {
   @apply text-regular-0 bg-regular-0/10;
}

#aside-menu .active-tab {
   @apply bg-rarely-2 font-bold;
}

#aside-menu .active-tab>a {
   @apply text-regular-0;
}

#aside-menu .submenu {
   @apply max-h-0 overflow-hidden pl-20px transition-all duration-600 font-bold;
}

#aside-menu .submenu.act-menu {
   @apply max-h-500px;
}
</style>