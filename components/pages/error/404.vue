<template>
    <div class="container">
        <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
        <h3 class="font-mulish font-bold text-center lg:(text-24px leading-30px mb-36px) md:(text-20px leading-25px mt-54px mb-24px) text-16px px-35px leading-18px mt-40px mb-14px">Извините, такая страница не найдена.</h3>
        <div class="flex justify-center">
            <img class="lg:(h-auto max-h-617px) md:(max-h-439px) max-h-277px" src="@/assets/images/errors/404.png" alt="Такая страница не найдена.">
        </div>
    </div>
</template>

<script setup>
const breadCrumbs = [
    { name: 'Главная', link: '/' },
    { name: '404', link: false },
]
</script>
