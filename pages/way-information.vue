<template>
    <div class="container">
        <BlocksBreadCrumbs class="children:(!text-15px)" :bread-crumbs="breadCrumbs" />
        <div class="w-full mt-36px flex justify-center">
            <div
                class="xl:max-w-630px md:max-w-576px font-ptsans leading-25px text-16px tracking-[0.02em] flex flex-col">
                <h3 class="font-mulish text-20px font-bold text-center mb-50px">Уважаемые родители!</h3>
                <div class="flex flex-col gap-30px">
                
                    <BlocksInform class="p-10px">
                        С 2 июня 2024 г. изменилась форма справки 079/у о состоянии здоровья ребенка, которая требуется
                    для отправки ребенка в детский лагерь.
                    </BlocksInform>

                    <p>
                        <span class="font-bold">❓Что изменилось?</span>
                        <br/>
                        👉🏻Теперь вся информация в одной справке: в справке 079/у будут перечислены инфекционные и
                        неинфекционные заболевания, перенесенные операции и травмы, данные об аллергических заболеваниях
                        и реакциях, росте и массе тела ребенка, группе здоровья, результатах анализов на гельминтозы, а
                        также сведения об осмотре на педикулез и чесотку. Также в справку добавлена графа с результатом
                        реакции Манту и заключением фтизиатра об отсутствии заболевания.
                    </p>
                    <p>
                        <span class="font-bold">❓Где можно оформить справку?</span><br>
                        <span class="block ml-15px mt-5px">1. У педиатра в поликлинике по месту жительства</span>
                        <span class="block ml-15px mb-5px">2. В частной клинике</span>
                    ⚠️Важно! Лучше начинать оформление справки за 2-3 недели до отдыха. Так вы сможете по направлению
                    медицинской организации успеть сдать все анализы и получить их результаты.
                    </p>
                    <p>
                        Обратите внимание, что сведения об отсутствии контактов с больными инфекционными заболеваниями
                        должны быть внесены в справку 079/у не ранее чем за три рабочих дня до даты отправления на отдых
                        и совпадать с датой оформления справки.
                    </p>
                    <nuxt-link
                        to="/kids"
                        class="w-full self-center max-w-248px">
                        <BlocksButton class="w-full text-13px uppercase tracking-[0.03em] font-notosans leading-33px">
                            Выбрать лагерь
                        </BlocksButton>
                    </nuxt-link>
                    <p class="text-center max-w-420px self-center">
                        Спасибо, что выбрали наш сервис! Желаем вашему ребенку веселых и запоминающихся приключений!
                    </p>
                    <img class="self-center xl:w-414px md:w-337px w-293px"
                        src="@/assets/images/illustrations/family.webp" alt="">
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
const breadCrumbs = [
    { name: 'Главная', link: '/' },
    { name: 'Информация', link: false },
]
</script>