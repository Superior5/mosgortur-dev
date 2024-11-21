<template>
   <div id="camp" class="container">
      <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
      <div class="flex xl:gap-20px items-start">
         <div class="xl:w-[calc(100%-345px)] w-full font-ptsans">
            <PagesCampTitle />
            <PagesCampTabs :tabs="tabs" :act-tab="actTab" @changeActTab="t => actTab = t" />
            <component :is="tabs[actTab].comp" />
         </div>
         <PagesCampPriceBlock />
      </div>
   </div>
</template>
<script setup>
const CampDesc = resolveComponent('PagesCampTabsCampDesc')
const AccmdMeals = resolveComponent('PagesCampTabsAccmdMeals')
const ShiftPrograms = resolveComponent('PagesCampTabsShiftPrograms')
const Schedule = resolveComponent('PagesCampTabsSchedule')
const Entertainment = resolveComponent('PagesCampTabsEntertainment')
const Parents = resolveComponent('PagesCampTabsParents')

const breadCrumbs = [
   { name: 'Главная', link: '/' },
   { name: 'Краснодарский край / Анапа', link: false },
   { name: 'Лагерь "Нива"', link: false },
]

const tabs = [{ title: 'Описание лагеря', comp: CampDesc }, { title: 'Размещение и питание', comp: AccmdMeals }, { title: 'Программы смен', comp: ShiftPrograms }, { title: 'Распорядок дня', comp: Schedule }, { title: 'Развлечения', comp: Entertainment }, { title: 'Родителям', comp: Parents }]
const actTab = ref(0)
</script>
<style>
#camp h2 {
   @apply font-mulish md:(text-28px mb-30px) mb-16px text-20px font-bold;
}
</style>