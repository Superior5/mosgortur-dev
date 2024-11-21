<template>
   <BlocksModal @close="$emit('close')"  classes="lg:(max-w-600px p-60px) md:(max-w-480px p-40px) p-30px">
      <div class="py-50px px-20px text-center max-w-500px text-18px">
            <div class="flex flex-col gap-20px">
                <h3 class="font-bold text-22px">Мы в процессе загрузки предложений!</h3>
                <p class="text-justify">На данный момент мы не можем найти лагеря, соответствующие вашим параметрам поиска. Возможно, смены ещё не добавлены на сайт, или все доступные места уже забронированы.</p>
                <p class="text-justify">Пожалуйста, обратите внимание: смены на лето 2025 год появятся в ближайшее время, ориентировочно в 1 квартале. Мы рекомендуем вернуться позже, чтобы выбрать подходящее предложение, или попробовать изменить параметры поиска.</p>
            </div>
        </div>
   </BlocksModal>
</template>
<script setup>
const props = defineProps({
   field: String
})
</script>